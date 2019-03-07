<template>
  <div class="grids-box column3">
    <div class="grids-list">
      <cardCom text="back demo" @onClick="gridsClick('backDemoIndex')"></cardCom>
    </div>
  </div>
</template>

<script>
import { cardCom } from '@/Common/Component/index.js'

import mixins from '@/Common/Mixin/router'

export default {
  name: 'pageHome',
  components: {
    cardCom
  },
  mixins: [mixins],
  data () {
    return {
      
    }
  },
  methods: {
    gridsClick (name) {
      // this.$router.push({name: 'second'})
      this.$router.push({name: name})
      // this.routerGoto(name)
      // this.$publicFun.routerGoto(this, name)
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
.grids-box {
  .grids-list {
    padding: 0.1rem;
    width: 25%;
  }
}
.grids-box.column3 {
  .grids-list {
    width: 33.333333%;
  }
}
</style>
