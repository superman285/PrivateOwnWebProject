<template>
    <div id="myheader">
        <div class="topbar">
            <img src="../assets/logo.png" alt="" class="logo">
            <v-btn color="blue" class="white--text">
                登录
                <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
            <v-btn color="indigo" class="white--text">
                注册
                <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
        </div>
        <div class="divide"></div>
        <div class="topmenu">
            <v-tabs
                    color="cyan"
                    dark
                    slider-color="yellow"
            >
                <router-link tag="v-tab" to="/">Home Index</router-link>
                <router-link tag="v-tab" :to="{name:'createaccount'}">create account</router-link>
                <router-link tag="v-tab" :to="{name:'downkeystore'}">KeyStore</router-link>
                <router-link tag="v-tab" :to="{name:'sendtx'}">Send TX</router-link>
                <router-link tag="v-tab" :to="{name:'querytx'}">Query TX</router-link>
            </v-tabs>
        </div>
    </div>
</template>

<script>



    export default {
        name: "myheader"
    }
</script>

<style scoped lang="scss">

    #myheader {
        .topbar{
            display: flex;
            align-items: center;
            height: 4.5rem;
            background: linear-gradient(to right, rgba(179,220,237,1) 0%,rgba(41,184,229,1) 100%);
            img {
                width: 50px;
                height: 50px;
                margin-left: 2rem;
            }
            button:nth-of-type(1) {
                margin-left: auto;
            }
            button:nth-of-type(2) {
                margin-right: 2rem;
            }
        }
        .divide {
            height: 3px;
            background: linear-gradient(to left, rgba(179,220,237,1) 0%,rgba(41,184,229,1) 100%);
        }

        .v-tabs {
            div {
                width: 100%;
                justify-content: center!important;
            }

        }

    }
</style>