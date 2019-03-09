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

    export default {
        name: 'app',
        components: {
            myheader,
            myfooter
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
