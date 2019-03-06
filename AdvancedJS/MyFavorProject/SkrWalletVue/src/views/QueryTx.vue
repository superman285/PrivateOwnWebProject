<template>
    <div>

        <v-card>

            <v-layout justify-space-between align-center>
            <v-text-field
                    class="tokenField"
                    label="Token"
                    single-line
                    solo
                    readonly
                    :value="tokenType"
            ></v-text-field>

            <v-text-field
                    class="amountField"
                    label="金额"
                    single-line
                    solo
                    @input="changeAmount($event)"
            ></v-text-field>
            </v-layout>

            <v-text-field
                    label="目标地址"
                    single-line
                    box
                    @input="changeAddr($event)"
            ></v-text-field>

            <v-btn
                    block
                    color="blue lighten-2"
                    class="white--text"
                    @click = "sendTx"
            >发送<v-icon right color="white">present_to_all</v-icon></v-btn>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "QueryTx",
        data(){
            return {
                tokenType: "ETH",
                txAmount: "",
                txToAddr: ""
            }
        },
        methods: {
            changeAmount(ev){
                console.log(ev);
                this.txAmount = ev;
                console.log('txamount',this.txAmount);
            },
            changeAddr(ev){
                console.log(ev);
                this.txToAddr = ev;
                console.log('txtoaddr',this.txToAddr);
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
                    }
                });
                console.log('sendtxresult',res);

            }
        }
    }
</script>

<style scoped lang="scss">
    .tokenField,.amountField {
        flex: .49;
    }
    .v-card {
        margin: 2rem auto;
        padding: 2rem;
        width: 60%;
    }
</style>