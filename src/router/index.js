import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import(/* webpackChunkName: "login" */ '../components/rootGlobal/login.vue')
const Home = () => import(/* webpackChunkName: "home" */ '../components/Home/home.vue')
const Workbench = () => import(/* webpackChunkName: "Workbench" */ '../components/Workbench/index.vue')  //工作台
const Matter = () => import(/* webpackChunkName: "Matter" */ '../components/Matter/index.vue')  //事项
const Information = () => import(/* webpackChunkName: "Information" */ '../components/Information/index.vue')  //消息
const Organization = () => import(/* webpackChunkName: "Organization" */ '../components/Organization/index.vue')  //组织

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
        redirect: '/workbench',
        children: [
            {
                path: '/workbench',
                name: 'Workbench',
                component: Workbench,
                meta: {}
            },
            {
                path: '/matter',
                name: 'Matter',
                component: Matter,
                meta: {}
            },
            {
                path: '/information',
                name: 'Information',
                component: Information,
                meta: {}
            },
            {
                path: '/organization',
                name: 'Organization',
                component: Organization,
                meta: {}
            },
        ]
    },
    {
        path: '/',
        name: 'Login',
        component: Login,
        meta: {}
    },
    
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
