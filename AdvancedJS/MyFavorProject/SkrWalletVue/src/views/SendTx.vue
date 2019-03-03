<template>
    <div>
        <h1>send eth or other token</h1>

        <v-radio-group column v-model="unlockMethod">
            <v-radio
                    label="keystore"
                    color="blue"
                    value="keystore"
            ></v-radio>
            <v-radio
                    label="privatekey"
                    color="green"
                    value="privatekey"
            ></v-radio>
        </v-radio-group>

        <div class="unlock-keystore" v-show="this.unlockMethod=='keystore'">
            <input type="file" @change="uploadFile($event)">上传文件
            <!--<form action="http://127.0.0.1:4000/users/upload" class="dropzone">
                <div class="fallback">
                <input name="file" type="file" multiple @change="uploadFile($event)">
            </div>
            </form>-->
            <v-btn @click="look" color="grey" class="white--text">
                上传
                <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
        </div>

        <div class="unlock-privatekey" v-show="this.unlockMethod=='privatekey'">
            <h3>输入私钥</h3>
            <v-text-field
                    color="pink"
                    label="input-privatekey"
                    @input="changeValue($event)"
            ></v-text-field>
            <v-btn @click="unlock" color="grey" class="white--text">
                解锁
                <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
        </div>

        <div class="accountInfo">

            <div>
                <span>账户地址</span>
                <span class="accAddr"></span>
            </div>
            <v-divider inset></v-divider>

            <div>
                <span>账户余额</span>
                <span class="accBal"></span>
            </div>

        </div>

    </div>
</template>

<script>

    import "dropzone/dist/dropzone.js";
    import "dropzone/dist/dropzone.css";
    import "dropzone/dist/basic.css";

    export default {
        name: "Transfer",
        data(){
            return {
                unlockMethod: "keystore",
                pkvalue:""
            }
        },
        methods: {
            look(){
                console.log(this.unlockMethod);
                console.log(this.pkvalue);
            },
            changeValue(ev){
                this.pkvalue = ev
            },
            async unlock(){
                let url = "http://127.0.0.1:4000/users/unlockwithprivatekey"

                try {
                    let res = await axios({
                        method: "post",
                        url,
                        data:{
                            username: 'iu',
                            privatekey: this.pkvalue
                        }
                    });
                    console.log('result',res);
                } catch (err) {
                    console.log('出错啦',err);
                }
            },
            async uploadFile(ev){
                console.log('dongle input');
                let fileObj = ev.target.files[0];
                console.dir(fileObj);

                let formData = new FormData();
                formData.append("file",fileObj);

                let url = "http://127.0.0.1:4000/users/upload"


                try {
                    let res = await axios({
                        method: "post",
                        url,
                        data:{
                            username: 'iu2',
                            formData
                        }
                    });
                    console.log('file result',res);
                } catch (err) {
                    console.log('出错啦',err);
                }



            }
        }
    }
</script>

<style scoped lang="scss">
    form {
        border: 2px dashed #0087F7;
    }
</style>