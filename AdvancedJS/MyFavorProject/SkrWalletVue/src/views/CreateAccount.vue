<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>

        <h1>{{createtitle}}</h1>

        <v-layout align-start justify-space-around class="create_wrapper">
        <div @click="kscreate()" v-if="kscard" class="kscard">
            <img src="../assets/kspng.png" alt="">
            <h2>By Keystore</h2>
        </div>

        <div @click="pkcreate()" v-if="pkcard" class="pkcard">
            <img src="../assets/pkpng.png" alt="">
            <h2>By Privatekey</h2>
        </div>
        </v-layout>

        <!--keystore ui part-->

        <div class="kslayout" v-if="kslayout">
        <v-layout align-start justify-space-between >
        <v-text-field
                outline
                single-line
                clearable
                :append-icon="showpwd ? 'visibility' : 'visibility_off'"
                :type="showpwd ? 'text' : 'password'"
                label="input password"
                class="input-password"
                v-model="password"
                @click:append="showpwd = !showpwd"
        ></v-text-field>
        <v-btn dark fab color="indigo" @click="createAccountByKeystore">
            <i class="mdi mdi-account-arrow-right ibig"></i>
        </v-btn>
        </v-layout>

        <a class="downlink animated fadeInUpBig"
           ref="downlink"
           v-show="downable"
           href=""
           target="_blank"
           download="keystore">
            <v-btn
                    color="blue-grey"
                    class="white--text"
                    ref="downbtn"
            >
                <v-icon>cloud_download</v-icon>
                &nbsp;&nbsp;下载keystore
            </v-btn>
        </a>

        <div class="backbtn">
            <v-btn outline fab color="indigo" @click="back">
                <v-icon>arrow_back</v-icon>
            </v-btn>
        </div>
        </div>

        <!--privatekey ui part-->
        <div class="pklayout" v-if="pklayout">

            <v-tooltip top>
                <template v-slot:activator="{ on }">
                    <img v-on="on" src="../assets/dice.png" alt="" ref="ani" class="dice" @click="randompk">
                </template>
                <span>Click to throw the Dice!</span>
            </v-tooltip>


            <v-layout align-start justify-space-between >
                <v-text-field
                        outline
                        single-line
                        :append-icon="showpwd ? 'visibility' : 'visibility_off'"
                        :type="showpwd ? 'text' : 'password'"
                        label="Throw the Dice for a random Privatekey"
                        readonly
                        v-model="privatekey"
                        @click:append="showpwd = !showpwd"
                ></v-text-field>
                <v-btn dark fab color="indigo" @click="createAccountByPrivatekey">
                    <i class="mdi mdi-account-arrow-right ibig"></i>
                </v-btn>
            </v-layout>

            <div class="backbtn">
                <v-btn outline fab color="indigo" @click="back">
                    <v-icon>arrow_back</v-icon>
                </v-btn>
            </div>
        </div>

    </div>
</template>

<script>


    import "animate.css/animate.css";


    export default {
        name: "CreateAccount",
        data(){
            return {
                showpwd: false,
                password: '',
                privatekey: '',
                downUrl: "",
                downable: false,
                pkcard: true,
                kscard: true,
                pklayout: false,
                kslayout: false,
                createtitle: "Create A New Wallet"
            }
        },
        methods: {

            pkcreate(){
                console.log('改pk');
                this.createtitle = "Create Wallet By Privatekey"
                this.pkcard = false;
                this.kscard = false;
                this.pklayout = true;
            },
            kscreate(){
                console.log('改ks');
                this.createtitle = "Create Wallet By Keystore"
                this.kscard = false;
                this.pkcard = false;
                this.kslayout = true;
            },
            back(){
                console.log('back');
                this.createtitle = "Create A New Wallet";
                this.password = "";
                this.privatekey = "";
                this.pkcard = true;
                this.kscard = true;
                this.pklayout =false;
                this.kslayout = false;
                this.downable = false;
            },
            
            randompk(){
                console.dir(this.$refs.ani);
                this.$refs.ani.classList.add('animated', 'wobble')
                setTimeout(()=>{
                    this.$refs.ani.classList.remove('animated', 'wobble')
                },500);

                var utils = require('../../utils/myUtils');
                var web3 = utils.getweb3();
                let rand_privatekey = web3.utils.randomHex(32);
                this.privatekey = rand_privatekey;

                //Toast 妥善保存好私钥！

            },
            
            async createAccountByKeystore(){

                if (this.password==="") {
                    //Toast请输入密码
                    console.log('请输入密码');
                    return;
                }
                
                let url = "http://127.0.0.1:4000/users/createaccountbyks"
                try {
                    let result = await axios({
                        method: "POST",
                        url:url,
                        data: {
                            password: this.password,
                        }
                    });
                    //Toast创建成功 用第三方库
                    console.log('createAccountSuccess',result.data.info.fileName);
                    console.log(result);
                    console.log(this.$refs.downlink);
                    let ksfile = result.data.info.fileName
                    this.$refs.downlink.href = `keystore/${ksfile}`;
                    this.downable = true;

                    //创建完顺便帮你加载好钱包
                    let accAddr = result.data.info.account.address;
                    this.$store.commit('setAccountAddr',accAddr);

                    let accPrivatekey = result.data.info.account.privateKey;
                    this.$store.state.globalPrivatekey = accPrivatekey;
                    console.log('全局私钥',this.$store.state.globalPrivatekey);


                    //Toast 加载钱包成功 然后提供个链接点击跳到首页

                } catch (err) {
                    //Toast创建失败
                    console.log(err);
                }
            },

            async createAccountByPrivatekey(){
                let url = "http://127.0.0.1:4000/users/createaccountbypk"
                try {
                    let result = await axios({
                        method: "POST",
                        url:url,
                        data: {
                            privatekey: this.privatekey,
                        }
                    });
                    //Toast创建成功 用第三方库
                    console.log('createAccountSuccess',result.data.info);

                    //创建完顺便帮你加载好钱包
                    let accAddr = result.data.info.account.address;
                    this.$store.commit('setAccountAddr',accAddr);

                    let accPrivatekey = result.data.info.account.privateKey;
                    this.$store.state.globalPrivatekey = accPrivatekey;
                    console.log('全局私钥',this.$store.state.globalPrivatekey);
                    //Toast 加载钱包成功 然后提供个链接点击跳到首页

                } catch (err) {
                    //Toast创建失败
                    console.log(err);
                }
            }
        }
    }
</script>

<style scoped lang="scss">


    .dice {
        width: 5rem;
        height: 5rem;
    }

    .kscard,.pkcard {
        flex: .4;
        max-width: 380px;
        max-height: 445px;
        padding: 2rem 1.5rem;
        background: white;
        color: #6EC3A8;
        box-shadow:2px 4px 8px 0 rgba(46,61,73,.2);
        transform: translate(0,0);
        transition: background .3s linear,
                    box-shadow .15s linear,
                    transform .3s linear;
        cursor: pointer;

        img {
            width: 100%;
        }
        h2 {
            margin-top: 1rem;
        }
        &:hover {
            background: #6EC3A8;
            box-shadow:10px 10px 14px 0 rgba(46,61,73,.15);
            transform: translate(-1px,-1px);
        }
        &:hover h2{
            color: white;
        }
    }

    .downlink {
        text-decoration: none;
        button {
            height: 3rem;
        }
    }

    .backbtn {
        position: absolute;
        left: 10%;
        margin-top: 2rem;
    }

    .v-text-field {
        font-size: 1.4rem!important;
    }
    .ibig {
        font-size: 2rem;
    }

    h1 {
        margin-top: 3rem;
    }
    .layout {
        margin: 2rem auto;
        width: 80%;
    }
    .v-btn {
        margin-top: -1px;
    }
    input {
        border-bottom: none!important;
    }
</style>