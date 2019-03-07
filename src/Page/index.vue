<template>
  <div class="wapper">
    <transition :name="transition">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'tableDemo',
  data () {
    return {
      transition: 'slide-left'
    }
  },
  methods: {
    doSomething (e) {
      this.$router.delLastRouter() // 页面回退时，路由做对应的处理
    }
  },
  created () {
    window.addEventListener('popstate', this.doSomething, false) // 监听回退事件
  },
  beforeRouteUpdate (to, from, next) {
    window.document.title = to.meta.title
    let isBack = this.$router.isBack
    if (isBack) {
      this.transition = 'slide-right'
      next()
    } else {
      // 进入页面之前判断是否是进入流程页
      if (from.meta.isStartPage) {
        this.$router.setProcessStatus(to.meta.group, false)
      }
      this.transition = 'slide-left'
      next()
    }
  }
}
</script>

<style lang="scss">
.wapper { position: relative; width: 100%; height: 100%;}
.child-view { position: absolute; width:100%; height: 100%;}
.slide-left-leave { -webkit-transform: translate(0, 0); transform: translate(0, 0);}
.slide-left-leave-active { transition: all .4s cubic-bezier(.55,0,.1,1);}
.slide-left-leave-to { -webkit-transform: translate(100%, 0); transform: translate(100%, 0);}
.slide-left-enter { -webkit-transform: translate(-100%, 0); transform: translate(-100%, 0);}
.slide-left-enter-active { transition: all .4s cubic-bezier(.55,0,.1,1);}
.slide-left-enter-to { -webkit-transform: translate(0, 0); transform: translate(0, 0);}

.slide-right-leave { -webkit-transform: translate(0, 0); transform: translate(0, 0);}
.slide-right-leave-active { transition: all .4s cubic-bezier(.55,0,.1,1);}
.slide-right-leave-to { -webkit-transform: translate(-100%, 0); transform: translate(-100%, 0);}
.slide-right-enter { -webkit-transform: translate(100%, 0); transform: translate(100%, 0);}
.slide-right-enter-active { transition: all .4s cubic-bezier(.55,0,.1,1);}
.slide-right-enter-to { -webkit-transform: translate(0, 0); transform: translate(0, 0);}

</style>
