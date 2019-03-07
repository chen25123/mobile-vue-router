<template>
  <div class="back-demo">
    <div class="text-tips">aaaaaaaaaaaaaaa</div>
    <div class="text-tips">您需要输入一些信息才可展示内容</div>
    <div class="goto-input">
      <buttonCom text="去输入" @on-click="gotoInput"></buttonCom>
    </div>
    <div class="goto-next">
      <buttonCom text="返回" @on-click="onBack"></buttonCom>
    </div>
  </div>
</template>

<script>
import { buttonCom, inputCom } from '@/Common/Component/index.js'

// import mixins from '@/Common/Mixin/router'

export default {
  name: 'tableDemo',
  components: {
    buttonCom, inputCom
  },
  // mixins: [mixins],
  data () {
    return {
      
    }
  },
  methods: {
    gotoInput () {
      this.$router.push({name: 'backBPage'})
      // this.routerGoto('backBPage')
      // this.$publicFun.routerGoto(this, 'backBPage')
    },
    onBack () {
      this.$router.back()
      // this.routerBack()
      // this.$publicFun.routerBack(this)
    }
  },
  mounted () {
    // this.$publicFun.isGotoStart(this)
  }
}
</script>

<style lang="scss" scoped>
.back-demo {
  .text-tips {
    margin-top: 15vh;
    text-align: center;
    color: #333;
    font-size: 0.16rem;
  }
  .goto-input {
    margin: 0.2rem auto 0;
    width: 1rem;
  }
  .goto-next {
    margin: 0.2rem auto 0;
    width: 1rem;
  }
}
</style>
