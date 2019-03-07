/**
 * 引用js页面
 */
import Vue from 'vue'
import router from './Function/router'

Vue.prototype.$publicFun = Object.assign(router) // 将 公共方法挂载到Vue
