<template>
    <div class="home">

        <v-card
                class="mx-auto addr-card"
                color="#26c6da"
                dark
                max-width="400"
        >
            <img src="../assets/pkpng.png"
                 alt="privatekey"
                 class="showpk-btn"
                 ref="showpkBtn"
                 v-if="$store.state.accountAddr!='0x00'"
                 @click="showPrivatekey"
            >
            <div class="addr-avatar">
                <img src="../assets/avatar.png" alt="" @click="etherscan">
            </div>
            <h2>Address</h2>

            <div class="addr-text">
                <p>
                    {{this.$store.state.accountAddr}}
                </p>
            </div>
        </v-card>

        <v-card
                class="mx-auto addr-card"
                color="indigo"
                dark
                max-width="400"
        >
            <img src="../assets/refresh.png"
                 alt="refresh"
                 class="refresh-btn"
                 ref="refreshBtn"
                 v-if="$store.state.accountAddr!='0x00'"
                 @click="refreshBalance"
            >

            <v-tooltip right dark color="primary">
                <template v-slot:activator="{ on }">
                    <img src="../assets/loadtoken.png" alt="loadtoken"
                         class="loadtoken-btn" ref="loadtokenBtn"
                         v-if="$store.state.accountAddr=='0x00'"
                         v-on:click="loadToken"
                         v-on="on"
                    >
                </template>
                <span>{{loadTokenDesc}}</span>
            </v-tooltip>


            <transition name="fade">
            <div class="tokeninput-wrap" v-show="start">
                <v-text-field
                        v-show="start"
                        class="tokeninput"
                        solo
                        label="输入erc20合约地址"
                        ref="tokeninput"
                        @input="tokenInput"
                        append-icon="send"
                        @click:append="tokenInput($event)"
                >
                </v-text-field>
            </div>
            </transition>


            <div class="addr-avatar">
                <img src="../assets/wallet.png" alt="">
                <p>{{this.$store.state.tokenType}}</p>
            </div>
            <h2>Balance</h2>

            <div class="addr-text">
                <span>
                    {{this.$store.state.accountBalance}}
                </span>
                <span class="unit">
                    {{this.$store.state.tokenType}}
                </span>
            </div>
        </v-card>

    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import MyHeader from "@/components/header";
    import MyFooter from "@/components/footer";

    //加了全局webpack配置axios
    //import axios from "axios";

    import iziToast from "izitoast/dist/js/iziToast.min.js";
    import "izitoast/dist/css/iziToast.min.css";


    export default {
        name: 'Home',
        components: {
            HelloWorld,
            MyHeader,
            MyFooter
        },
        data() {
            return {
                addr: localStorage.getItem('accountAddr') ? localStorage.getItem('accountAddr') : "0x00",
                start: false,
            }
        },
        computed: {
            loadTokenDesc(){
                if (this.$store.state.tokenType=="eth") {
                    return "加载ERC20Token"
                }else {
                    return "加载ETH"
                }
            }
        },
        methods: {

            async etherscan() {
                await this.$store.dispatch('etherscan');
                console.log('dispatch action etherscan分发完毕');
            },

            showPrivatekey() {
                let privatekey = this.$store.state.globalPrivatekey;
                iziToast.warning({
                    timeout: 10000,
                    overlay: true,
                    displayMode: 'once',
                    title: 'PrivateKey',
                    //message: 'Examples',
                    position: 'center',
                    layout: 1,
                    drag: false,
                    inputs: [
                        [`<input type="text" value=${privatekey} readonly style="border:none!important;outline:none;">`, function (instance, toast, input, e) {
                        }, true],
                    ]
                });
            },

            async refreshBalance() {
                //将这个封装到了action中 不然报错
                /*let url = "http://127.0.0.1:4000/users/getbalance";
                let address = this.$store.state.accountAddr;
                let result = await axios({
                    method: "get",
                    url,
                    params:{
                        address,
                    }
                });
                console.log("serverBal",result);
                this.$store.commit("setAccountBalance",result.data.info.balance);*/

                console.log(this.$refs);
                this.$refs.refreshBtn.classList.remove('refresh-pause');
                this.$refs.refreshBtn.classList.add('refresh-play');
                //判token类型调不同的获取余额方法
                if (this.$store.state.tokenType=="eth") {
                    await this.$store.dispatch('refreshBalance');
                }else{
                    await this.$store.dispatch('refreshERC20Balance');
                }
                console.log('dispatch action refreshBalance分发完毕');
                //await等到结果之后还会转2s再停
                setTimeout(() => {
                    this.$refs.refreshBtn.classList.add('refresh-pause');
                }, 2000);
            },

            async loadToken(){
                console.log('加载token');
                if (this.$store.state.tokenType=="eth") {
                    this.start = !this.start;
                }else{
                    this.$store.state.tokenType = "eth";
                    this.$store.dispatch('refreshBalance');
                    console.log('不加await');
                }
            },

            tokenInput(ev){

                console.log(ev);
                /*var utils = require('../../utils/myUtils');
                var web3 = utils.getweb3();
                if (!web3.utils.isAddress(this.txToAddr)) {
                    //Toast地址应为16进制数，以0x开头
                    console.log('地址格式错误');
                    iziToast.warning({
                        title:"Error",
                        message: "地址格式错误 !",
                        color: "red",
                        timeout: 2000
                    });
                    return;
                }*/
            }

        }
    }
</script>

<style scoped lang="scss">
    .addr-card {
        margin-top: 3rem;
        padding: 2rem;
        &:nth-of-type(1) {
            padding-bottom: .25rem;
        }
        position: relative;
    }

    .addr-avatar {
        width: 5rem;
        height: 5rem;
        img {
            width: 100%;
            height: 100%;
        }
        p {
            text-transform: uppercase;
            font-weight: 700;
            color: lightskyblue;
            font-size: 1.2rem;
            font-family: Georgia,'New Century Schoolbook',Times, TimesNR,
             'New York', serif;

        }
    }

    h2 {
        margin-top: -2rem;
    }

    .addr-text {
        margin-top: 1.2rem;
        span {
            font-size: 1.5rem;
            font-weight: bold;
        }
        p {
            font-size: 1.4rem;
            word-break: break-all;
        }
    }

    span.unit {
        font-weight: bold;
        font-size: 1.8rem;
        text-transform: lowercase;
        color: palevioletred;
    }

    .showpk-btn {
        position: absolute;
        width: 2rem;
        height: 2rem;
        right: 1rem;
        top: 1rem;
        cursor: pointer;
    }

    .refresh-btn {
        position: absolute;
        width: 2rem;
        height: 2rem;
        right: 1rem;
        top: 1rem;
        cursor: pointer;
    }

    .loadtoken-btn {
        position: absolute;
        width: 2rem;
        height: 2rem;
        right: 1rem;
        bottom: .5rem;
        cursor: pointer;
    }

    .refresh-play {
        animation: refresh-rotate 2s infinite ease-in-out;
    }
    .refresh-pause {
        animation-play-state: paused;
    }
    .refresh-run {
        animation-play-state: running;
    }
    //refresh动画
    @keyframes refresh-rotate {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .tokeninput-wrap {
        height: 4rem;
        position: absolute;
        right: 0;
        bottom: -4rem;

        /*.v-input__slot {
            padding: 2rem;
        }*/


    }




    //过渡动画
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

</style>
