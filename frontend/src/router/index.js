import Vue from 'vue'
import VueRouter from 'vue-router'
import { routers } from './router'

Vue.use(VueRouter);

// 路由配置
/* eslint-disable */
const RouterConfig = {
    mode: 'history',
    routes: routers
};

export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    routers.forEach((item) => {
        if (item.name === to.name && item.children) {
            router.replace({
                name: item.children[0].name
            });
        }
        next()
    })
});
/* eslint-enable */
