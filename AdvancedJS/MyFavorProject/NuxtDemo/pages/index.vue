<template>
    <v-card>
        <p>helloworld index</p>
        <Logo></Logo>
        <vuetifyLogo></vuetifyLogo>

        <button @click="test1">测试按钮1</button>
    </v-card>
</template>

<script>
    import Logo from '~/components/Logo.vue'
    import VuetifyLogo from '~/components/VuetifyLogo.vue'

    import axios from "axios";

    export default {
        //默认为布局default
        //layout: "origin_default",
        async asyncData() {
            let res = await axios.post('/createaccount',{
                username: 'superman',
                password: 123456,
            });
            console.log('渲染前',res);
            return res;
        },

        components: {
            Logo,
            VuetifyLogo
        },
        methods: {
            test1() {



                axios.post('/createaccount',{
                    username: 'superman',
                    password: 123456,
                }).then(res=>{
                    console.log(res);
                })


            }

        },


    }
</script>
