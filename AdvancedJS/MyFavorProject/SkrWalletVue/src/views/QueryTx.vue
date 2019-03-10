<template>
    <div>

        <v-card>

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
                        v-model = "txGasPrice"
                        :rules="[rules.type,rules.counter]"
                ></v-text-field>
            </v-layout>



            <v-text-field
                    class="targetAddr"
                    label="目标地址"
                    single-line
                    box
                    clearable
                    @input="changeAddr($event)"
            ></v-text-field>

            <v-btn
                    block
                    color="blue lighten-2"
                    class="white--text sendtx-btn"
                    @click = "sendTx"
            >发送<v-icon right color="white">present_to_all</v-icon></v-btn>
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
        name: "QueryTx",
        data(){
            return {
                tokenType: "ETH",
                txAmount: "",
                txToAddr: "",
                txGasPrice: "20",
                txHash: "",
                rules: {
                    counter: val=> val>=20 || "GasPrice过小可能导致交易失败！",
                    type: val=>{
                        const pattern = /^[1-9]\d*$/
                        return pattern.test(val) || "请输入有效数字！"
                    },
                    addrFormat: val=>{
                        const addrPattern = /^0x[0-9a-fA-F]{40}$/;
                        return addrPattern.test(val) || "请输入正确格式的地址!"
                    }
                }
            }
        },
        methods: {
            changeAmount(ev){
                this.txAmount = ev;
                console.log('txamount',this.txAmount);
            },
            changeAddr(ev){
                this.txToAddr = ev;
                console.log('txtoaddr',this.txToAddr);
            },
            changeGasPrice(ev){
              this.txGasPrice = ev;
            },
            async sendTx(){

                console.log('发起来');
                let url = "http://127.0.0.1:4000/users/sendtx";

                let res = await axios({
                    method: "post",
                    url,
                    data:{
                        privatekey: "93945e79d3fd4d0fdc60cb2c9031b2d8acf3c688f3185c0730ed30d85c66b77f",
                        txAmount: this.txAmount,
                        txFromAddr: "0x2B9579B9eb65DBC6A10a3d27fC8aBA8f615Bb0Be",
                        txToAddr: this.txToAddr,
                        txGasPrice: this.txGasPrice,
                    }
                });

                console.log('sendtxresult',res);
                
                this.txHash = res.data.res.transactionHash;

                console.log(this.txHash);
            }
        }
    }
</script>

<style scoped lang="scss">
    .tokenField {
        font-weight: bold;
    }
    .gaspriceField,.amountField {
        flex: .49;
    }
    .v-card {
        margin: 2rem auto;
        padding: 2rem;
        width: 60%;
    }

    div.v-text-field__suffix {
        font-weight: bold!important;
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