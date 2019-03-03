import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
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
            path: '/keystore',
            name: 'keystore',
            component: ()=>import('./views/Keystore'),
        },
        {
            path: '/createaccount',
            name: 'createaccount',
            component: ()=>import('./views/CreateAccount')
        },
        {
            path: '/sendtx',
            name: 'sendtx',
            component: ()=>import('./views/SendTx')
        },
        {
            path: '/querytx',
            name: 'querytx',
            component: ()=>import('./views/QueryTx')
        },
    ]
})
