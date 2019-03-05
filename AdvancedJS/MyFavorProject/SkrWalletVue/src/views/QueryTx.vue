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
                tokenAmount: ""
            }
        },
        methods: {
            changeAmount(ev){
                this.tokenAmount = ev.target.value;
            },


            sendTx(){

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