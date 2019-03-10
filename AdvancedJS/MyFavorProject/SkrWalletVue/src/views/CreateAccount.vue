<template>
    <div>

        <h1>创建你的钱包</h1>

        <v-layout align-start justify-space-between>
        <v-text-field
                outline
                :append-icon="showpwd ? 'visibility' : 'visibility_off'"
                :type="showpwd ? 'text' : 'password'"
                label="input password"
                class="input-password"
                v-model="password"
                @click:append="showpwd = !showpwd"
        ></v-text-field>
        <v-btn fab dark color="indigo" @click="createAccount">
            <v-icon dark>add</v-icon>
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
            >
                <v-icon>cloud_download</v-icon>
                &nbsp;&nbsp;下载keystore
            </v-btn>
        </a>

    </div>
</template>

<script>
    export default {
        name: "CreateAccount",
        data(){
            return {
                showpwd: false,
                password: '',
                downUrl: "",
                downable: false
            }
        },
        methods: {
            async createAccount(){
                let url = "http://127.0.0.1:4000/users/createaccount"
                try {
                    let successInfo = await axios({
                        method: "POST",
                        url:url,
                        data: {
                            password: this.password,
                        }
                    });
                    //Toast创建成功
                    console.log('createAccountSuccess',successInfo.data.info.fileName);
                    console.log(this.$refs.downlink);
                    let ksfile = successInfo.data.info.fileName
                    this.$refs.downlink.href = `keystore/${ksfile}`;
                    this.downable = true;


                } catch (err) {
                    //Toast创建失败
                    console.log(err);
                }
                
            }
        }
    }
</script>

<style scoped lang="scss">

    .downlink {
        text-decoration: none;
        button {
            height: 3rem;
        }
    }

    .v-text-field {
        font-size: 1.36rem!important;
    }

    h1 {
        margin-top: 2rem;
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