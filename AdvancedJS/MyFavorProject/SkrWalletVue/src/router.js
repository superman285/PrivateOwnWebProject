import Vue from 'vue'
//const Vue = require("Vue");
import Router from 'vue-router'
//const Router = require("VueRouter");
import Home from './views/Home.vue'

Vue.use(Router)

let router = new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                keepAlive: true // 需要缓存
            }
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
            path: '/createwallet',
            name: 'createwallet',
            component: ()=>import('./views/CreateAccount'),
            meta: {
                keepAlive: false // 不需要缓存
            }
        },
        {
            path: '/accesswallet',
            name: 'accesswallet',
            component: ()=>import('./views/AccessWallet'),
            meta: {
                keepAlive: false // 不需要缓存
            }
        },
        {
            path: '/sendtx',
            name: 'sendtx',
            component: ()=>import('./views/SendTx'),
            meta: {
                keepAlive: true // 需要缓存
            }
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
