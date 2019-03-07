import Vue from 'vue'
import Vuex from 'vuex'
import demo from './modules/demo'
import routerState from './modules/router'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    demo, routerState
  }
})
