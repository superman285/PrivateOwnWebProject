<template>
    <div class="home">
        <!--<MyHeader></MyHeader>-->
        <img alt="Vue logo" src="../assets/logo.png">
        <button @click="test">点我点我</button>
        <!--<MyFooter></MyFooter>-->
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
