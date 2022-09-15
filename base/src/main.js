import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './registerServiceWorker'
import microApp from '@micro-zoe/micro-app'
// 导入meixioa组件
import meixioacomponent from 'meixioacomponent'

microApp.start({
  'disable-memory-router': true, // 关闭虚拟路由系统
  'disable-patch-request': false, // 关闭对子应用请求的拦截
})
meixioacomponent.componentConfig.initConfig(store, router)
//使用meixioa组件
Vue.use(meixioacomponent)
// 使用meixicss样式
import 'meixioacomponent/lib/style/index.less'
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
