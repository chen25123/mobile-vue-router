<template>
  <div class="table-demo" @click="onClick">
    
  </div>
</template>

<script>
export default {
  name: 'tableDemo',
  data () {
    return {
      
    }
  },
  methods: {
    onClick () {
      // this.$router.push({name: 'second'})
      // this.routerGoto('second')
      this.onBack()
    }
  },
  mounted () {
    
  }
}
</script>

<style lang="scss" scoped>
.table-demo {
  background: #8eeeff;
}
</style>
