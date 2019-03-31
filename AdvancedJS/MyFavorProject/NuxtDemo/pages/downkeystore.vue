<template>
    <div id="keystore">

        <div id="savekeystore">
            <h1>保存你的keystore</h1>
            <a :href=downurl>下载keystore</a>
            <button @click="saveKeystoreNext">下一步</button>
        </div>

        <div id="saveprivatekey">
            <h1>保存你的私钥</h1>




        </div>

    </div>
</template>

<script>

    import axios from "@nuxtjs/axios";

    export default {
        name: "downkeystore",
        data: () => (
            {
                //从createAccount.js获取
                //downurl: "keystore/" + fileName,
                downurl: '/'
            }),
        methods: {
            saveKeystoreNext() {
                console.log('saveKeystoreNext');
            },
            test(){
                console.log();
            }
        }
    }
</script>

<style scoped>

</style>