<template>
  <div class="all-insert">
    <ul>
      <li @click="goto('backAPage')">入口A</li>
      <li @click="goto('backAPageA')">入口B</li>
      <li @click="goto('backAPageB')">入口C</li>
    </ul>
    <div class="goto-next">
      <buttonCom text="返回" @on-click="onBack"></buttonCom>
    </div>
  </div>
</template>

<script>
import { buttonCom, cardCom } from '@/Common/Component/index.js'

// import mixins from '@/Common/Mixin/router'

export default {
  name: 'pageHome',
  components: {
    buttonCom, cardCom
  },
  // mixins: [mixins],
  data () {
    return {
    }
  },
  methods: {
    goto (name) {
      this.$router.push({name: name})
      // this.routerGoto(name)
      // this.$publicFun.routerGoto(this, name)
    },
    onBack () {
      this.$router.back()
      // this.$publicFun.routerBack(this)
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
.all-insert {
  ul {
    li {
      height: 0.4rem;
      line-height: 0.4rem;
      font-size: .16rem;
    }
  }
  .goto-next {
    margin: 0.2rem auto 0;
    width: 1rem;
  }
}
</style>
