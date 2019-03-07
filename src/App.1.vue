<template>
  <transition :name="transitionName">
    <router-view class="view">
    </router-view>
  </transition>
</template>

<script>

export default {
  data () {
    return {
      transitionName: 'slideLeft'
    }
  },
  watch: {
    $route: function (to, from) {
      let toDepth, fromDepth
      toDepth = 0
      fromDepth = 0
      if (to.meta) {
        toDepth = to.meta.depth || 0
      }
      if (from.meta) {
        fromDepth = from.meta.depth || 0
      }
      if (toDepth < fromDepth) {
        this.transitionName = 'slideRight'
      } else {
        this.transitionName = 'slideLeft'
      }
    }
  }
}
</script>

<style lang="scss">
  // @import "../Style/publicStyle.scss";

  @keyframes slideLeft {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(0);
    }
  }

  @keyframes slideRight {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(0);
    }
  }

  .slideLeft-enter-active {
    animation: slideLeft 0.35s ease;
  }

  .slideLeft-leave-active {
    animation: slideLeft 0.35s ease reverse;
  }

  .slideRight-enter-active {
    animation: slideRight 0.35s ease;
  }

  .slideRight-leave-active {
    animation: slideRight 0.35s ease reverse;
  }

  .view {
    height: 100%;
    min-height: 100%;
  }
</style>
