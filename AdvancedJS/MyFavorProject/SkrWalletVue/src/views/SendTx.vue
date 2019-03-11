<template>
    <div>

        <v-card class="txcard">

            <v-text-field
                    class="tokenField"
                    label="Token"
                    single-line
                    solo
                    dark
                    readonly
                    :value="tokenType"
                    background-color="blue darken-4"
            ></v-text-field>

            <v-layout justify-space-between align-center>
                <v-text-field
                        class="amountField"
                        label="金额"
                        suffix="ether"
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
                    color="blue lighten-2"
                    class="white--text sendtx-btn"
                    @click="sendTx"
            >发送
                <v-icon right color="white">present_to_all</v-icon>
            </v-btn>
        </v-card>

        <v-card class="txtip-card" v-show="txHash!=''">
            <h5>点击可跳转查询</h5>
            <span>交易hash:</span><br>
            <a target="_blank" :href="`https://rinkeby.etherscan.io/tx/${txHash}`">{{txHash}}</a>
        </v-card>
    </div>
</template>

<script>

    import 'vuetify/dist/vuetify.min.css'

    export default {
        name: "SendTx",
        data() {
            return {
                tokenType: "ETH",
                txAmount: "",
                txToAddr: "",
                txGasPrice: "20",
                txHash: "",
                rules: {
                    counter: val => val >= 20 || "GasPrice过小可能导致交易失败！",
                    type: val => {
                        const pattern = /^[1-9]+.?[0-9]*$/
                        return pattern.test(val) || "请输入有效数字！"
                    },
                    addrFormat: val => {
                        const addrPattern = /^0x[0-9a-fA-F]{40}$/;
                        return addrPattern.test(val) || "请输入正确格式的地址!"
                    }
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

                    if (Object.is(Number(this.txAmount), NaN) || Object.is(Number(this.txGasPrice), NaN)) {
                        //toast提示 金额和gasprice必须为数字
                        console.log('金额和gasprice必须为数字');
                        return;
                    }

                    var utils = require('../../utils/myUtils');
                    var web3 = utils.getweb3();
                    if (!web3.utils.isAddress(this.txToAddr)) {
                        //Toast地址应为16进制数，以0x开头
                        console.log('地址格式错误');
                        return;
                    }

                    //正式交易前的一些判断
                    //1.登录
                    if (this.$store.state.accountAddr == "0x00" || this.$store.state.globalPrivatekey == "") {
                        //Toast 账户未登录
                        console.log('Please access your Wallet first!');
                        return;
                    }
                    //2.余额足够
                    if (this.$store.state.accountBalance <= this.txAmount) {
                        //Toast余额不足
                        console.log('Your wallet balance is Not Enough!');
                        return;
                    }

                    let url = "http://127.0.0.1:4000/users/sendtx";
                    try {
                        let result = await axios({
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
                        console.log('sendtxresult', result);
                        this.txHash = result.data.info.transactionHash;
                        console.log(this.txHash);


                        await this.$store.dispatch('refreshBalance');
                        console.log('dispatch action refreshBalance分发完毕');

                    } catch (err) {
                        //交易失败
                        console.log('sendtx failed,err', err);
                    }


                } else {
                    //Toast 金额 gasprice 目标地址缺一不可
                    console.log('三项都要填 金额 gasprice toaddr');
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .tokenField {
        font-weight: bold;
    }

    .gaspriceField, .amountField {
        flex: .49;
    }

    .v-card {
        margin: 4rem auto;
        padding: 2rem;
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
        background: limegreen;
        padding: 1rem;
        color: white;
        width: 95%;
    }
</style>