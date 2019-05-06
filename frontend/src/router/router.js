import { subRouter } from './subRouter'
import Content from '@/pages/Content'
//login page
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: resolve => {
        require(['@/pages/login.vue'], resolve)
    }
};

//error page
export const errorRouter = {
    path: '/error',
    name: 'error',
    meta: {
        title: 'Error - 错误页'
    },
    component: resolve => {
        require(['@/pages/error.vue'], resolve)
    }
};

//home page
export const homeRouter = {
    path: '/',
    name: 'home',
    title: '首页',
    component: Content,
    children: [
        {
            path: '/home',
            name: 'homePage',
            title: '首页',
            component: resolve => {
                require(['@/pages/home/homePage.vue'], resolve)
            }
        }
    ]
};

export const routers = [
    loginRouter,
    errorRouter,
    homeRouter,
    ...subRouter
];
