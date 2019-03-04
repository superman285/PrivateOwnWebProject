<template>
    <div class="home">

        <v-card
                class="mx-auto addr-card"
                color="#26c6da"
                dark
                max-width="400"
        >
            <div class="addr-avatar">
            <v-img
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>

            </div>
            <h2>地址</h2>

            <div class="addr-text">
                <span>
                    {{addr}}
                </span>
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
            <div class="addr-avatar">
                <v-img
                        src="https://i.loli.net/2019/03/04/5c7cc379215cc.png"
                ></v-img>

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
        name: 'home',
        components: {
            HelloWorld,
            MyHeader,
            MyFooter
        },
        data(){
          return {
              addr: localStorage.getItem('accountAddr')?localStorage.getItem('accountAddr'):"0x666"
          }
        },
        methods: {
           async test() {


                let url = "http://127.0.0.1:4000/users/createaccount"

                /*axios.post(url,{
                    username: 'superman',
                    password: 123456,
                }).then(res=>{
                    console.log(res);
                })*/
                let res = await axios({
                    method: "POST",
                    url:url,
                    data: {
                        username: "superman285",
                        password: 123456,
                    }
                });
               console.log(res);
            }
        }
    }
</script>

<style scoped lang="scss">
    .addr-card {
        margin-top: 2rem;
        padding: 2rem;
    }
    .addr-avatar {
        width: 50px;
        height: 50px;
        background: #dddddd;
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
</style>
