<template>
  <div class="back-demo">
    <div class="input-box">
      <inputCom v-model="name" text="请输入名称 :"></inputCom>
    </div>
    <div class="goto-next">
      <buttonCom text="下一步" @on-click="gotoInput"></buttonCom>
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
      name: ''
    }
  },
  methods: {
    gotoInput () {
      this.$router.push({name: 'backCPage', query: {name: this.name}})
      // this.routerGoto('backCPage')
      // this.$publicFun.routerGoto(this, 'backCPage')
    },
    onBack () {
      this.$router.back()
      // this.$publicFun.routerBack(this)
    }
  },
  mounted () {
    console.log('asdasdas')
    // this.$router.onPageLoad()
  }
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
