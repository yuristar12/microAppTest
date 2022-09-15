import Vue, { ref } from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 公共路由
export const constantRoutes = [
  // 仪表盘
  {
    path: '/',
    redirect: '/index',

    isShow: 1,
  },

  {
    path: '/index',
    name: 'index',
    component: (resolve) => require(['@/pages/index.vue'], resolve),
  },
  {
    path: '/children',
    name: 'children',
    component: (resolve) => require(['@/pages/children.vue'], resolve),
  },

  //   {
  //     name: 'oaadmin',
  //     path: '/oaadmin',
  //     component: oaadmin,
  //     id: '1554743634638614529',

  //     // children: [
  //     //   {
  //     //     name: 'adminmanage',
  //     //     path: 'adminmanage',
  //     //     children: [{ name: 'menuconfig', path: 'menuconfig' }],
  //     //   },
  //     // ],
  //   },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes,
})

export default router
