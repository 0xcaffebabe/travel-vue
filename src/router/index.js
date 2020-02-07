import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/Home.vue')
    },
    {
        path: '/city',
        name: 'city',
        component: () => import('../views/city/City.vue')
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('../views/detail/Detail.vue')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savePosition) {
        return {x: 0, y: 0}
    }
})

export default router
