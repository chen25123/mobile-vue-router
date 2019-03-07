// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './Router'
import store from './Store'
// import mixins from './Common/Mixin/router'
import './Common/Utility/index.js'

Vue.config.productionTip = false
// Vue.mixin(mixins)

// router.beforeEach((to, from, next) => {
//   // 记录首次进入的页面，使用到路由守卫
//   store.commit('updateRouterHistory', {type: 'to', router: to.name})
//   next()
// })

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
