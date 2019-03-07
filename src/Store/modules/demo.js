const state = {
  cssState: {
    bannerIsShow: true,
    tableIsOver: false,
    isminiWindow: false,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    pageLeftWidth: 0
  }
}

const getters = {
  getBannerState (state) {
    return state.cssState.bannerIsShow
  }
}

const actions = {

}

const mutations = {
  cssState (state, cssState) {
    state.cssState[cssState.name] = cssState.keyValue
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
