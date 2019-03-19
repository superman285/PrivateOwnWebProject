<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="container">

        <v-card class="txcard">

            <v-text-field
                    class="tokenField"
                    label="Token"
                    single-line
                    solo
                    light
                    readonly
                    :value="$store.state.tokenType"
                    background-color = "#E1F9EC"
            ></v-text-field>

            <v-layout justify-space-between align-center class="main">
                <v-text-field
                        class="amountField"
                        label="转账金额"
                        :suffix= "$store.state.tokenType=='ETH'?'ether':$store.state.tokenType.toLowerCase()"
                        :rules="[rules.type]"
                        @input="changeAmount($event)"
                ></v-text-field>

                <v-text-field
                        class="gaspriceField"
                        label="GasPrice"
                        suffix="Gwei"
                        v-model="txGasPrice"
                        :rules="[rules.type,rules.counter]"
                ></v-text-field>
            </v-layout>

            <v-text-field
                    class="targetAddr"
                    label="目标地址"
                    prepend-inner-icon="near_me"
                    single-line
                    box
                    clearable
                    @input="changeAddr($event)"
            ></v-text-field>

            <v-btn
                    block
                    color="#55A47E"
                    class="white--text sendtx-btn"
                    @click="sendTx"
            >发送
                <v-icon right color="white">present_to_all</v-icon>
            </v-btn>

            <!--来个小人加提示动画-->
            <!--<div class="wait" v-show="txSending">请稍后🏄‍</div>-->

            <v-progress-linear class="txProgress" :indeterminate="txSending" color="rgb(0,255,184)" background-color="#E1F9EC"></v-progress-linear>
        </v-card>


        <div class="txtip-card" v-show="txHash!=''">
            <!--<h5>点击可跳转查询</h5>
            <span>交易hash:</span><br>-->
            <v-tooltip bottom dark color="rgb(0, 255, 184)" content-class="black--text"
            >
                <template v-slot:activator="{ on }">
                    <a target="_blank"
                       :href="`https://rinkeby.etherscan.io/tx/${txHash}`"
                       v-on="on"
                       ref="txlink"
                    >{{txHash}}</a>
                </template>
                <span>查看交易详情</span>
            </v-tooltip>
        </div>

    </div>
</template>

<script>

    import iziToast from "izitoast/dist/js/iziToast.min.js";
    import "izitoast/dist/css/iziToast.min.css";

    //本地测试
    let localurl = "http://127.0.0.1:4000";
    //云服务器
    let cloudurl = "http://154.8.215.126:4000";

    export default {
        name: "SendTx",
        data() {
            return {
                // tokenType: "ETH",
                txAmount: "",
                txToAddr: "",
                txGasPrice: "20",
                txHash: "",
                txSending: false,
                rules: {
                    counter: val => val >= 20 || "GasPrice过小可能导致交易失败！",
                    type: val => {
                        const pattern = /^[1-9]+\.?[0-9]*$/
                        const pattern2 = /^(([1-9]+\.?)|([1-9]*0\.))[0-9]*$/
                        return pattern2.test(val) || "请输入有效数字！"
                    },
                    addrFormat: val => {
                        const addrPattern = /^0x[0-9a-fA-F]{40}$/;
                        return addrPattern.test(val) || "请输入正确格式的地址!"
                    }
                }
            }
        },
        computed: {
            tokenCoin: function(){
                if (this.$store.state.tokenType=="ETH") {
                    return "ether"
                }else {
                    return this.$store.state.tokenType.toLowerCase();
                }
            }
        },
        methods: {
            changeAmount(ev) {
                this.txAmount = ev;
            },
            changeAddr(ev) {
                this.txToAddr = ev;
            },
            changeGasPrice(ev) {
                this.txGasPrice = ev;
            },
            async sendTx() {
                console.log('发起来');
                if (this.txAmount && this.txToAddr && this.txGasPrice) {

                    if (Object.is(Number(this.txAmount), NaN)||Number(this.txAmount)<=0) {
                        //toast提示 金额和gasprice必须为数字
                        iziToast.warning({
                            title:"Warning",
                            message: "转账金额输入有误 !",
                            color: "red",
                            timeout: 2000
                        });
                        console.log('金额和gasprice必须为数字');
                        return;
                    }

                    if (Object.is(Number(this.txGasPrice), NaN)) {
                        //toast提示 金额和gasprice必须为数字
                        iziToast.warning({
                            title:"Warning",
                            message: "GasPrice输入有误 !",
                            color: "red",
                            timeout: 2000
                        });
                        console.log('金额和gasprice必须为数字');
                        return;
                    }

                    var utils = require('../../utils/myUtils');
                    var web3 = utils.getweb3();
                    if (!web3.utils.isAddress(this.txToAddr)) {
                        //Toast地址应为16进制数，以0x开头
                        console.log('地址格式错误');
                        iziToast.warning({
                            title:"Error",
                            message: "地址格式错误 !",
                            color: "red",
                            timeout: 2000
                        });
                        return;
                    }

                    //正式交易前的一些判断
                    //1.需登录钱包
                    if (this.$store.state.accountAddr == "0x00" || this.$store.state.globalPrivatekey == "") {
                        //Toast 账户未登录
                        console.log('Please access your Wallet first!');
                        iziToast.warning({
                            message: "请先创建或加载钱包 !",
                            color: "red",
                            timeout: 2000
                        });
                        return;
                    }
                    //2.需余额足够
                    let accountBalance = Number(this.$store.state.accountBalance);
                    let txAmount = Number(this.txAmount);
                    if (accountBalance <= txAmount) {
                        //Toast余额不足

                        console.log('balance');
                        console.log(accountBalance);

                        console.log('txAmount');
                        console.log(txAmount);
                        
                        console.log('Your wallet balance is Not Enough!');
                        iziToast.error({
                            title:"Error",
                            message: "钱包余额不足 !",
                            timeout: 2000
                        });
                        return;
                    }

                    //满足条件 正式发起交易
                    this.txSending = true;

                    //ETH发起交易
                    let url = `${cloudurl}/users/sendtx`;
                    let ercurl = `${localurl}/users/senderc20tx`;
                    try {
                        if (this.$store.state.tokenType=="ETH") {
                           //ETH发起交易
                            var result = await axios({
                                method: "post",
                                url,
                                data: {
                                    privatekey: this.$store.state.globalPrivatekey,
                                    txAmount: this.txAmount,
                                    txFromAddr: this.$store.state.accountAddr,
                                    txToAddr: this.txToAddr,
                                    txGasPrice: this.txGasPrice,
                                }
                            });
                        }else {
                            //ERC20 token 发起交易
                            var result = await axios({
                                method: "post",
                                url:ercurl,
                                data: {
                                    privatekey: this.$store.state.globalPrivatekey,
                                    txAmount: this.txAmount,
                                    txFromAddr: this.$store.state.accountAddr,
                                    txToAddr: this.txToAddr,
                                    txGasPrice: this.txGasPrice,
                                    contractABI: this.$store.state.tokenContractABI,
                                    contractAddr: this.$store.state.tokenContractAddr
                                }
                            });
                        }

                        console.log('sendtxresult', result);
                        this.txHash = result.data.info.transactionHash;
                        console.log(this.txHash);

                        //停下滚动条
                        this.txSending = false;

                        iziToast.success({
                            title: "SUCCESS",
                            message: "转账成功 !",
                            timeout: 2000,
                            position: "bottomCenter"
                        });
                        
                        let txlink = this.$refs.txlink;
                        console.log('link是啥',txlink);
                        txlink.style.visibility="visible";

                        //交易详情跳转链接
                        iziToast.success({
                            // message: "下载并保存好keystore ! ",
                            message: "交易Hash",
                            messageColor: "rgb(0, 255, 184)",
                            timeout: 20000,
                            displayMode: 2,
                            resetOnHover: true,
                            target: ".txtip-card",
                            progressBarColor: 'rgb(0, 255, 184)',
                            transitionIn: 'flipInX',
                            transitionOut: 'flipOutX',
                            color: 'grey',
                            theme: "dark",
                            /*buttons: [
                                ['<button><b>str</b></button>', ()=> {

                                }]
                            ],*/
                            //此处要用箭头函数 this才能正确指向vue实例
                            onClosing:()=>{
                                //隐藏掉a标签
                                txlink.style.visibility="hidden";
                            }
                        })

                        //考虑加个try 不然会报交易失败。

                        try {
                            if (this.$store.state.tokenType=="ETH"){
                                await this.$store.dispatch('refreshBalance');
                                console.log('dispatch action refreshBalance分发完毕');
                            }else{
                                await this.$store.dispatch('refreshERC20Balance');
                                console.log('dispatch action refreshERC20Balance分发完毕');
                            }
                        } catch (err) {
                            console.log('获取余额failed',err);
                        }


                    } catch (err) {
                        //交易失败
                        this.txSending = false;
                        console.log('sendtx failed,err', err);
                        iziToast.info({
                            title:"Error",
                            message: "很遗憾,交易失败 !",
                            color: "red",
                            timeout: 2000
                        });
                    }
                } else {
                    //Toast 金额 gasprice 目标地址缺一不可
                    console.log('三项都要填 金额 gasprice toaddr');
                    iziToast.warning({
                        message: "请正确输入转账金额、目标地址和GasPrice !",
                        timeout: 2000,
                        color: "red"
                    });
                }
            }
        }
    }
</script>

<style scoped lang="scss">





    /**/


    .container {
        padding:0 2rem;
    }

    .tokenField {
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        font-weight: bold;
        input {
            text-transform: uppercase!important;

        }
    }

    .main {
        margin-top: 4rem;
    }

    .gaspriceField, .amountField {
        flex: .49;
    }

    .v-card {
        margin: 4rem auto 2rem;
        padding: 2rem 2rem 3.5rem;
        width: 60%;
    }

    .txcard {
        min-width: 480px !important;
        max-width: 800px !important;
    }

    div.v-text-field__suffix {
        font-weight: bold !important;
    }

    .sendtx-btn {
        height: 3rem;
        font-size: 1.2rem;
    }

    .targetAddr {
        margin-top: 1rem;
    }

    .txtip-card {
        //background: limegreen;
        //padding: 1rem;
        position: relative;
        color: white;
        width: 90%;
        min-width: 650px;
        a{
            position: absolute;
            top: 22px;
            left: 115px;
            color: white;
            text-decoration: none;
        }
    }

    @keyframes running {
        from{
            left:0;
        }
        to {
            left: 90%;
        }
    }

    .wait {
        bottom: 0.25rem;
        font-size: 1.6rem;
        position: absolute;
        animation: running .8s linear infinite;
    }

    .txProgress {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: -.97rem;
    }
    
</style>