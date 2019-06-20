import Vue from 'vue'
import Router from 'vue-router';

const NotFound = () => import('./../page/404.vue')
const Login = () => import('./../page/LoginPage.vue')
const Home = () => import('./../page/HomePage.vue')
const Register = () => import('./../page/RegisterPage.vue')
const Index = () => import('./../page/Index.vue')
const Add =() =>import('./../page/blockchain/add.vue')
const List =() =>import('./../page/blockchain/list.vue')
//
// const Foo = { template: '<div>foo</div>' }

Vue.use(Router);

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
// const Foo = { template: '<div>foo</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    {
        path:"/home",
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/register",
        component: Register
    },
    {
        path: "*",
        component: NotFound,
        meta: { requiresAuth: true }

    },
    {
        path:"/index",
        component: Index,
        meta: { requiresAuth: true }
    },
    {
        path:"/blockchain/add",
        component: Add,
        meta: { requiresAuth: true }
    },
    {
        path:"/blockchain/list",
        component: List,
        meta: { requiresAuth: true }
    },
    // 重定向
    // {
    //     path: '/',
    //     redirect: '/home'
    // }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new Router({
    routes // (缩写) 相当于 routes: routes
})


// // 生成路由配置
// const routes = [
//     {
//         path: '/',
//         name: 'login',
//         components: Login
//     },
//     {
//         path: '/home',
//         name: 'home',
//         components: Home
//     },
//     {
//       path: '*',
//       name: 'not-found',
//       components: Foo
//     }
// ]
//
// // 生成路由实体
// const router = new Router({
//     // mode: 'history',
//     routes: routes
//
// })
//
// router.beforeEach(async (to, from, next) => {
//     if (to.path !== '/login' && !localStorage.token) {
//         return next('/login')
//     }
//     next()
// })
//
// /**
//  * 路由前置守卫
//  * 权限检测
//  */
// router.beforeResolve(({ matched, path }, from, next) => {
//
// })
//
// /**
//  * 路由后置守卫
//  * 布局检测
//  */
// router.afterEach((to, from) => {
// })

export default router
