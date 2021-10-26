/*
 * @Date: 2021-10-25 17:53:20
 * @LastEditors: LiJinGang
 * @LastEditTime: 2021-10-26 10:04:28
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes:  [{
        path: '/',
        component: () => import('@/examples/index'),
        meta: {
            title: '基础功能'
        }
    },{
        path: '/edit',
        component: () => import('@/examples/edit'),
        meta: {
            title: '基础功能'
        }
    }]
})

export default router
