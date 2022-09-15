import store from '../store'
import router from '.'
import appMain from '../config/appMain/AppMain'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({
  showSpinner: false,
}) // NProgress Configuration

const whiteList = ['/login', '/404'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()
  const { token, roles } = store.getters.user
  const queryToken = to.query.token
  if (token || queryToken) {
    if (to.path === '/login') {
      setTimeout(async () => {
        await store.dispatch('user/logout')
      })
      next()
      return
    }
    if (queryToken) {
      store.commit('user/SET_TOKEN', queryToken)
      // 删除url中的token
      delete to.query.token
    }
    if (roles && roles.length > 0) {
      appMain.microAppManage.hasRouterLoaded(to)
      next({replace:true})
    } else {
      store
        .dispatch('user/getInfo')
        .then((res) => {
          appMain.init()
          next({ ...to, replace: true })
        })
        .catch(async () => {
          await store.dispatch('user/logout')
          NProgress.done()
        })
    }
  } else {
    /* white list router */
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
    NProgress.done()
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
