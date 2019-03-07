/**
 * 路由的前进后退的判断
 * 直接全局注册此mixin
 */
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('routerState', ['routerHistory', 'routerLength', 'groupStatus']),
  },
  methods: {
    ...mapMutations('routerState', ['updateRouterHistory']),
    getBackCount (name) {
      // 如果数组中存在name，则应该回退
      // 返回要回退多少页
      // 这里不使用 indexOf 函数来获取存在的位置，数组的indexOf并不是特别好使（貌似数组中只有数组或者字符串的时候可以用）
      for (let i = 0; i < this.routerLength; i++) {
        if (this.routerHistory[i].name === name) {
          return i - this.routerLength + 1
        }
      }
      return 0 // 不存在则返回0，因为存在必然返回小于负整数
    },
    getCurrentStartPageName () {
      for (let i = this.routerLength - 2; i >= 0; i--) {
        if (this.routerHistory[i].meta.isStartPage) {
          return this.routerHistory[i].name
        }
      }
      return false
    },
    routerGoto (name, query) {
      // 页面内跳转使用
      if (this.routerLength > 0) {
        // let lName = this.routerHistory[this.routerLength - 1]
        let lCount = this.getBackCount(name)
        if (lCount < 0) {
          this.updateRouterHistory({type: 'back', router: name, count: lCount})
          this.$router.isBack = true
          this.$router.go(lCount)
        } else {
          // 前进
          // this.updateRouterHistory({type: 'to', router: name})
          this.$router.isBack = false
          this.$router.push({name: name, query: query})
        }
      } else {
        // this.updateRouterHistory({type: 'to', router: name})
        this.$router.isBack = false
        this.$router.push({name: name, query: query})
      }
    },
    routerBack () {
      // debugger
      if (this.routerLength > 0) {
        if (this.$router.history.current.meta.group) {
          // 如果该页面属于一个事务
          if (this.groupStatus[this.$router.history.current.meta.group]) {
            // 为true 则事务已经完成，应该返回事务的起始页面
            let lName = this.getCurrentStartPageName()
            if (lName) {
              this.routerGoto(lName)
            }
          } else {
            // 事务未完成，回退一步
            this.updateRouterHistory({type: 'back', router: name, count: -1})
            this.$router.isBack = true
            this.$router.go(-1)
          }
        } else {
          this.updateRouterHistory({type: 'back', router: name, count: -1})
          this.$router.isBack = true
          this.$router.go(-1)
        }
      }
    }
  },
  mounted () {
    // console.log(this.$router.history.current.name)
    if (this.$router.history.current.meta.group) {
      // 如果该页面属于一个事务
      if (this.groupStatus[this.$router.history.current.meta.group]) {
        // 并且该事务已经完成，则应该回到事务的起始页面
        let lName = this.getCurrentStartPageName()
        if (lName) {
          this.routerGoto(lName)
        }
      }
    }
  }
}
