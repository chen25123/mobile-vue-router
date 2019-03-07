const routerState = {
  namespaced : true,
  state: {
    routerHistory: [],
    routerLength: 0,
    groupStatus: {}
  },
  getters: {
    getRouterHistory (state) {
      return state.routerHistory
    },
    getRouterHistoryLength (state) {
      return state.routerLength
    },
    getGroupStatus (state) {
      return state.groupStatus
    }
  },
  mutations: {
    updateRouterHistory (state, obj) {
      if (obj.type === 'to') {
        state.routerHistory.push(obj.router)
        state.routerLength++
      } else {
        state.routerLength = state.routerLength + obj.count
        state.routerHistory.splice(state.routerLength, -obj.count)
      }
    },
    updateGroupStatus (state, obj) {
      state.groupStatus[obj.group] = obj.status
    }
  }
}
export default routerState
