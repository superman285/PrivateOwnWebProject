import Vue from 'vue'
import Router from 'vue-router'
import Preview from './views/Preview.vue'
import Normal from './views/Normal.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Normal
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
            path: '/preview',
            name: 'preview',
            component: Preview
        }

    ]
})
