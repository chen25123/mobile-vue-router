<template>
  <div class="back-demo">
    <div class="text-tips">完成之后跳转的页面</div>
    <div class="goto-next">
      <buttonCom text="返回" @on-click="onBack"></buttonCom>
    </div>
  </div>
</template>

<script>
import { buttonCom, inputCom } from '@/Common/Component/index.js'


export default {
  name: 'tableDemo',
  components: {
    buttonCom, inputCom
  },
  data () {
    return {
    }
  },
  methods: {
    onBack () {
      this.$router.back()
      // this.routerBack()
      // this.$publicFun.routerBack(this)
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
.back-demo {
  .input-box {
    padding: 0.2rem;
  }
  .goto-next {
    margin: 0.2rem auto 0;
    width: 1rem;
  }
}
</style>
