<template>
    <div id="app">
        <v-app>

            <myheader></myheader>

            <!--keepalive 切换前端路由保留页面上次的数据 可通过路由元信息meta灵活配置部分路由-->
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <!--必须补上这个 否则元信息配为false的就不会渲染出来 看不到了-->
            <router-view v-if="!$route.meta.keepAlive"></router-view>


            <myfooter></myfooter>
        </v-app>
    </div>
</template>

<script>
    import './assets/reset.css';
    import myheader from "./components/header";
    import myfooter from "./components/footer";

    import iziToast from "izitoast/dist/js/iziToast.min.js";
    import "izitoast/dist/css/iziToast.min.css";




    export default {
        name: 'app',
        components: {
            myheader,
            myfooter
        },
        mounted: function(){
            this.$router.push("/");
            if (this.$store.state.accountAddr=="0x00") {
                iziToast.show({
                    title: 'Tips',
                    titleColor: "#26c6da",
                    message: '请先创建或载入钱包 !',
                    messageColor: "#fff",
                    theme: 'dark',
                    timeout: 3000,
                });
            }
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        min-width: 480px;
    }

    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
