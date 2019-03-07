<template>
  <div class="table-demo" @click="onClick">
    5456122135
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
      this.$router.push({name: 'mainPage'})
      // this.routerGoto('mainPage')
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.table-demo {
  width: 100%; height: 100%;
  background: #8effe3;
}
</style>
