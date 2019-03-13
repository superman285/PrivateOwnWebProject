<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div id="myheader">
        <div class="topbar">
            <img src="../assets/logo.png" alt="" class="logo">

            <div class="githublogo">
            <v-tooltip left>
                <template v-slot:activator="{ on }">
                    <a target="_blank" href="https://github.com/superman285/PrivateOwnWebProject/tree/master/AdvancedJS/MyFavorProject/SkrWalletVue">
                        <img v-on="on" src="../assets/github.png" alt="" class="githublogo">
                    </a>
                </template>
                <span>View Source on GitHub!</span>
            </v-tooltip>
            </div>


        </div>
        <div class="divide"></div>
        <div class="topmenu" @click="showev($event)">
            <v-tabs
                    color="cyan"
                    dark
                    slider-color="yellow"

            >
                <router-link tag="v-tab" ref="tab1" :to="{name:'home'}">My Account</router-link>
                <router-link tag="v-tab" ref="tab2" :to="{name:'createaccount'}">Create Wallet</router-link>
                <router-link tag="v-tab" ref="tab3" :to="{name:'accesswallet'}">Access Wallet</router-link>
                <router-link tag="v-tab" ref="tab4" :to="{name:'sendtx'}">Transaction</router-link>
            </v-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: "myheader",
        mounted: function(){
            console.log('header创建');
            console.dir(this.$refs.tab2);
            let headerTabs = document.querySelectorAll(".v-tabs__item");
            this.$store.state.headerTabs = headerTabs;



        },
        methods: {
            showev(ev){
                console.log('点击了');
                console.log(ev.target);
            }
        }
    }
</script>

<style scoped lang="scss">

    .v-tabs__div {
        font-size: 1.3rem;
        text-transform: capitalize!important;
    }
    .router-link-exact-active {
        font-weight: 700;
    }

    #myheader {

        .topbar{
            display: flex;
            align-items: center;
            height: 4.5rem;
            background: linear-gradient(to right, rgba(179,220,237,1) 0%,rgba(41,184,229,1) 100%);
            .logo {
                height: 3.2rem;
                margin-left: 1rem;
            }
            .githublogo {
                margin-left: auto;
                margin-right: 1rem;
                height: 3.3rem;
            }

        }
        .divide {
            height: 3px;
            background: linear-gradient(to left, rgba(179,220,237,1) 0%,rgba(41,184,229,1) 100%);
        }

        .v-tabs {
            min-width: 600px;
            .v-tabs__div {
                max-width: 480px!important;
            }
            div {
                width: 100%;
                justify-content: center!important;
            }

        }

    }
</style>