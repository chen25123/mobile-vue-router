
function getBackCount (name, routerLength, routerHistory) {
  // 如果数组中存在name，则应该回退
  // 返回要回退多少页
  // 这里不使用 indexOf 函数来获取存在的位置，数组的indexOf并不是特别好使（貌似数组中只有数组或者字符串的时候可以用）
  for (let i = 0; i < routerLength; i++) {
    if (routerHistory[i].name === name) {
      return i - routerLength + 1
    }
  }
  return 0 // 不存在则返回0，因为存在必然返回小于负整数
}

function getCurrentStartPageName (routerLength, routerHistory) {
  for (let i = routerLength - 2; i >= 0; i--) {
    if (routerHistory[i].meta.isStartPage) {
      return routerHistory[i].name
    }
  }
  return false
}

export default {
  routerGoto ($root, name, query) {
    // console.log($root.$store.getters['routerState/getRouterHistoryLength']) // 奇奇怪怪的写法
    let routerLength = $root.$store.getters['routerState/getRouterHistoryLength']
    let routerHistory = $root.$store.getters['routerState/getRouterHistory']
    if (routerLength > 0) {
      let lCount = getBackCount(name, routerLength, routerHistory)
      if (lCount < 0) {
        // this.updateRouterHistory({type: 'back', router: name, count: lCount})
        $root.$store.commit('routerState/updateRouterHistory', {type: 'back', router: name, count: lCount})
        $root.$router.isBack = true
        $root.$router.go(lCount)
      } else {
        // 前进
        $root.$router.isBack = false
        $root.$router.push({name: name, query: query})
      }
    } else {
      $root.$router.isBack = false
      $root.$router.push({name: name, query: query})
    }
  },
  routerBack ($root) {
    let routerLength = $root.$store.getters['routerState/getRouterHistoryLength']
    let routerHistory = $root.$store.getters['routerState/getRouterHistory']
    let groupStatus = $root.$store.getters['routerState/getGroupStatus']
    if (routerLength > 0) {
      if ($root.$router.history.current.meta.group) {
        // 如果该页面属于一个事务
        if (groupStatus[$root.$router.history.current.meta.group]) {
          // 为true 则事务已经完成，应该返回事务的起始页面
          let lName = getCurrentStartPageName(routerLength, routerHistory)
          if (lName) {
            this.routerGoto($root, lName)
          }
        } else {
          // 事务未完成，回退一步
          $root.$store.commit('routerState/updateRouterHistory', {type: 'back', router: name, count: -1})
          $root.$router.isBack = true
          $root.$router.go(-1)
        }
      } else {
        $root.$store.commit('routerState/updateRouterHistory', {type: 'back', router: name, count: -1})
        $root.$router.isBack = true
        $root.$router.go(-1)
      }
    }
  },
  isGotoStart ($root) {
    let lGroup = $root.$router.history.current.meta.group
    if (lGroup) {
      // 如果该页面属于一个事务
      let groupStatus = $root.$store.getters['routerState/getGroupStatus']
      if (groupStatus[lGroup]) {
        // 并且该事务已经完成，则应该回到事务的起始页面
        let lName = getCurrentStartPageName()
        if (lName) {
          this.routerGoto($root, lName)
        }
      }
    }
  }
}
