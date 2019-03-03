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

            <div class="uploadElem">
                <div class="file-field input-field">
                    <div class="btn">
                        <span>File </span>
                        <i class="material-icons uploadi">cloud</i>
                        <input type="file" class="upload-input" ref="uploadInput" @change="uploadFile($event)">
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text" placeholder="click or drag file here">
                    </div>
                </div>
            </div>

            <!--<input type="file" @change="uploadFile($event)">上传文件-->

            <!--<form action="http://127.0.0.1:4000/users/upload" class="dropzone">
                <div class="fallback">
                <input name="file" type="file" multiple @change="uploadFile($event)">
            </div>
            </form>-->
            <v-btn @click="upToServer" color="grey" class="white--text">
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

    /*import "dropzone/dist/dropzone.js";
    import "dropzone/dist/dropzone.css";
    import "dropzone/dist/basic.css";*/

    import "materialize-css/dist/js/materialize.min.js"
    import "materialize-css/dist/css/materialize.min.css"

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
            },
            upToServer(){
                //获取dom 然后读取上传的文件
                let upFile = this.$refs.uploadInput.files[0];

                var reader = new FileReader();
                reader.readAsText(upFile);
                reader.onload= function (){
                    console.log(JSON.parse(this.result));

                }


                console.log(upFile);
                if (upFile) {
                    console.log('可以传给服务器了');
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    form {
        border: 2px dashed #0087F7;
    };
    .uploadi {
        vertical-align: middle;
    }
</style>