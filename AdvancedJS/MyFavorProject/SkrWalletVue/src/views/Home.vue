<template>
    <div class="home">

        <v-card
                class="mx-auto addr-card"
                color="#26c6da"
                dark
                max-width="400"
        >
            <div class="addr-avatar">
                <img src="../assets/avatar.png" alt="">
            </div>
            <h2>地址</h2>

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
            <div class="addr-avatar">
                <img src="../assets/wallet.png" alt="">
            </div>
            <h2>余额</h2>

            <div class="addr-text">

                <span>
                    {{this.$store.state.accountBalance}}
                </span>
                <span class="unit">
                    eth
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


    export default {
        name: 'Home',
        components: {
            HelloWorld,
            MyHeader,
            MyFooter
        },
        data() {
            return {
                addr: localStorage.getItem('accountAddr') ? localStorage.getItem('accountAddr') : "0x666"

            }
        },
        methods: {
            async refreshBalance() {
                //将这个封装到了action中
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
                await this.$store.dispatch('refreshBalance');
                console.log('dispatch action refreshBalance分发完毕');
                //await等到结果之后还会转2s再停
                setTimeout(()=>{
                    this.$refs.refreshBtn.classList.add('refresh-pause');
                },2000);
            }
        }
    }
</script>

<style scoped lang="scss">
    .addr-card {
        margin-top: 3rem;
        padding: 2rem;
    }

    .addr-avatar {
        width: 5rem;
        height: 5rem;

        img {
            width: 100%;
            height: 100%;
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
        font-size: 2rem;
        color: palevioletred;
    }

    .refresh-btn {
        position: absolute;
        width: 2rem;
        height: 2rem;
        right: 1rem;
        top: 1rem;
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

</style>
