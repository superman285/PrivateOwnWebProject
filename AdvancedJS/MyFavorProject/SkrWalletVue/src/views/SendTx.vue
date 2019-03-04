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

            <v-upload></v-upload>
            <!--<form action="http://127.0.0.1:4000/users/upload" class="dropzone">
                <div class="fallback">
                <input name="file" type="file" multiple @change="uploadFile($event)">
            </div>
            </form>-->

            <br>

            <v-text-field
                    class="input-pwd"
                    ref="inputPwd"
                    solo
                    v-model="password"
                    prepend-inner-icon="place"
                    :append-icon="showpwd ? 'visibility' : 'visibility_off'"
                    :type="showpwd ? 'text' : 'password'"
                    name="input-10-1"
                    label="Input password"
                    @click:append="showpwd = !showpwd"
            ></v-text-field>

            <v-btn @click="upToServer" color="grey" class="white--text upbtn">
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
    </div>
</template>

<script>

    /*
    import "dropzone/dist/dropzone.js";
    import "dropzone/dist/dropzone.css";
    import "dropzone/dist/basic.css";
    import "materialize-css/dist/js/materialize.min.js"
    import "materialize-css/dist/css/materialize.min.css"
    */

    import uploadComponent from "@/components/v-upload";

    export default {
        name: "Transfer",
        components:{
            "v-upload":uploadComponent
        },
        data(){
            return {
                unlockMethod: "keystore",
                pkvalue:"",
                showpwd: false,
                password: ""
            }
        },
        methods: {
            look(){
                console.log(this.unlockMethod);
                console.log(this.pkvalue);
            },
            async uploadFile(ev){
                console.log('dongle input');
                let fileObj = ev.target.files[0];
                console.dir(fileObj);

                let fileTip = this.$refs.uploadTip;
                fileTip.value = fileObj.name;

                let formData = new FormData();
                formData.append("file",fileObj);

                let url = "http://127.0.0.1:4000/users/upload"
                /*try {
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
                }*/
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

                    let accAddr = res.data.data.res.address;
                        
                    console.log('解锁成功账户',res.data.data.res.address,res.data.data.res.privateKey);
                    this.$store.commit('setAccountAddr',accAddr);
                    
                    let balUrl = "http://127.0.0.1:4000/users/getbalance";
                    
                    let balRes = await axios({
                        method: "GET",
                        url: balUrl,
                        params: {
                            address:accAddr
                        }
                    })
                    console.log("获取余额",balRes);

                    //1eth 10^18 wei | 10^9 Gwei
                    let {balance} = balRes.data.data;
                    this.$store.commit('setAccountBalance',balance);

                } catch (err) {
                    console.log('出错啦',err);
                }
            },
            upToServer(){
                //获取dom 然后读取上传的文件
                console.log(this.$refs);
                let upFile = this.$store.state.uploadKeystore;
                console.log(upFile.name);
                let formData = new FormData();
                formData.append("file",upFile);

                if (upFile.name) {
                    //let ksPwd = this.$refs.inputPwd.value;
                    let ksPwd = this.password;
                    var reader = new FileReader();
                    reader.readAsText(upFile);
                    reader.onload= async function (){
                        let parseContent = JSON.parse(this.result);
                        console.log(parseContent);

                        let url = "http://127.0.0.1:4000/users/unlockwithkeystore"
                        try {
                            let res = await axios({
                                method: "post",
                                url,
                                data:{
                                    password: ksPwd,
                                    keystore: parseContent
                                }
                            });
                            console.log('file result',res);
                            if (res.code == 0) {
                                //Toast解锁成功
                                console.log('unlock 成功');
                            }else{
                                //Toast失败
                                console.log('unlock失败');
                            }
                        } catch (err) {
                            //Toast提示
                            console.log('出错啦',err);
                        }

                    };
                    console.log('可以传给服务器了');
                }else {
                    //toast提示
                    console.log('未选择文件');
                }

            }
        }
    }
</script>

<style scoped lang="scss">

    .input-pwd {
        margin-top: 3rem;
    }


    .upbtn {
        margin-top: 1rem;
    }

</style>