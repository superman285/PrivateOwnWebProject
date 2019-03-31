<template>
    <v-card>
        hello world inspire
        <button @click="test1">测试按钮1</button>
    </v-card>
</template>
<script>
    //import $axios from "@nuxtjs/axios";



    export default {
        //默认为布局default
        //layout: "origin_default",

        methods: {
            test1(){

                console.log(this.$axios);
            }
        }


    }
</script>