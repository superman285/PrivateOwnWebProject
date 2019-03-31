<template>
    <v-app light>
        <!--<header>我是头</header>-->
        <!--<footer>我是脚</footer>-->

        <Logo></Logo>
        <myheader></myheader>

        <myfooter></myfooter>

        <nuxt></nuxt>

    </v-app>
</template>

<script>


    import myheader from "~/components/header.vue";
    import myfooter from "~/components/footer.vue";
    import Logo from '~/components/Logo.vue'
    import VuetifyLogo from '~/components/VuetifyLogo.vue'

    export default {
        components: {
            myheader,
            myfooter,
            Logo
        },
        data() {
            return {
                clipped: false,
                drawer: false,
                fixed: false,
                items: [
                    {
                        icon: 'apps',
                        title: 'Welcome',
                        to: '/'
                    },
                    {
                        icon: 'bubble_chart',
                        title: 'Inspire',
                        to: '/inspire'
                    }
                ],
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: 'Vuetify.js',

            }
        }
    }
</script>

<style scoped lang="scss">
    footer {
        position: fixed;
        bottom: 0;
    }
</style>