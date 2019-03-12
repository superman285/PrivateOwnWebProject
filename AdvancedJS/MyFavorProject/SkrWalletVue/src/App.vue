<template>
    <div id="app">
        <v-app>

            <myheader></myheader>

            <!--keepalive 切换前端路由保留页面上次的数据-->
            <keep-alive>
                <router-view/>
            </keep-alive>

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
        created: function(){
            this.$router.push("/");
            if (this.$store.state.accountAddr=="0x00") {
                iziToast.show({
                    title: 'Tips',
                    titleColor: "#26c6da",
                    message: '请先创建或载入钱包 !',
                    messageColor: "#fff",
                    theme: 'dark',
                    timeout: 7500,
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
