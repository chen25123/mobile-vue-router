import Vue from 'vue'
import Router from 'vue-router'
import myRouter from '../Common/Mixin/routerG'
import Index from '../page/index'

import home from './modules/home'
import backDemo from './modules/backDemo'

// Router.prototype.isBack = false
// Router.prototype.goto = function (name, ...angle) {
//   console.log(this)
// }
myRouter._initRouter(Router)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Index,
    meta: { depth: 0 },
    children: [
      ...home,
      ...backDemo
    ]
  }]
})
