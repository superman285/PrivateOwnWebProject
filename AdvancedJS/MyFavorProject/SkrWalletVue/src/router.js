import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/createaccount',
            name: 'createaccount',
            component: ()=>import('./views/CreateAccount')
        },
        {
            path: '/accesswallet',
            name: 'accesswallet',
            component: ()=>import('./views/AccessWallet')
        },
        {
            path: '/sendtx',
            name: 'sendtx',
            component: ()=>import('./views/SendTx')
        },
    ],
});

/*router.beforeEach((to, from,next) => {
    window.addEventListener('load',function () {
        console.log(from.path)
        console.log(to.path)
        next();
    });
});*/

export default router;
