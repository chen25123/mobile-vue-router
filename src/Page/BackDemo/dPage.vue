<template>
  <div class="back-demo">
    <div class="text-tips">姓名：{{ name }}</div>
    <div class="text-tips">电话：{{ tel }}</div>
    <div class="text-tips">完成页面</div>
    <div class="goto-input">
      <buttonCom text="执行流程" @on-click="onDo"></buttonCom>
    </div>
    <div class="goto-input">
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
    onDo () {
      // 执行成功 设置状态 并且跳到指定页面
      this.$router.setProcessStatus(this.$route.meta.group, true)
      this.$router.push({name: 'other'})
    },
    onBack () {
      this.$router.back()
      // this.$publicFun.routerBack(this)
    }
  },
  mounted () {
    this.$router.onPageLoad()
    if (this.$route.query) {
      this.name = this.$route.query.name
      this.tel = this.$route.query.tel
    }
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
}
</style>
