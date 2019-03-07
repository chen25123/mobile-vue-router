<template>
  <div class="back-demo">
    <div class="text-tips">姓名：{{ name }}</div>
    <div class="input-box">
      <inputCom v-model="tel" text="请输入电话 :"></inputCom>
    </div>
    <div class="goto-next">
      <buttonCom text="确认" @on-click="gotoInput"></buttonCom>
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
      name: '',
      tel: ''
    }
  },
  methods: {
    gotoInput () {
      this.$router.push({name: 'backDPage', query: {name: this.name, tel: this.tel}})
      // this.$publicFun.routerGoto(this, 'backDPage')
    },
    onBack () {
      this.$router.back()
      // this.routerBack()
      // this.$publicFun.routerBack(this)
    }
  },
  mounted () {
    this.$router.onPageLoad()
    // console.log(this.$route, 'asdasd')
    if (this.$route.query) {
      this.name = this.$route.query.name
    }
    // this.$publicFun.isGotoStart(this)
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
