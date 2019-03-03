<template>

    <div>

        <div class="save-keystore">

            <h1>保存你的keystore</h1>
            <v-btn @click="downkeystore">下载keystore</v-btn>
            <a :href=downloadurl>下载keystore</a>
            <v-btn @click="saveKeystoreNext">
                下一步
            </v-btn>

        </div>

        <div class="save-privatekey">

            <h1>保存你的私钥</h1>

            <div>{{privatekey}}</div>

        </div>

    </div>

</template>

<script>

    //import axios from "axios";

    export default {
        name: "Keystore",
        data(){
            return {
                downloadurl: "/",
                privatekey: this.getPrivateKey(),
            }
        },
        
        methods: {
            saveKeystoreNext(){
                console.log('saveKeystoreNext');

            },
            getPrivateKey(){
                console.log('privateKey');
                return 'privateKey';
            },
            downkeystore(){

                let url = "http://127.0.0.1:4000/users/createaccount"

                axios.post(url,{
                    username: 'superman',
                    password: 123456,
                }).then(res=>{
                    console.log(res);
                })
            }
        }
        
    }
</script>

<style scoped lang="scss">

</style>