<template>
    <div class="home">
        <myheader></myheader>
        <img alt="Vue logo" src="../assets/logo.png">
        <button @click="test">点我点我</button>
        <myfooter></myfooter>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import myheader from "@/components/header";
    import myfooter from "@/components/footer";

    import axios from "axios";

    export default {
        name: 'home',
        components: {
            HelloWorld,
            myheader,
            myfooter
        },
        methods: {
            test() {


                let url = "http://127.0.0.1:4000/users/createaccount"

                axios.post(url,{
                    username: 'superman',
                    password: 123456,
                }).then(res=>{
                    console.log(res);
                })

                /*let res = await axios.post("/users/createaccount",{
                    username: "superman",
                    password: 123456,
                });*/
                //console.log('axios获得res',res);
            }
        }
    }
</script>
