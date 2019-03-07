<template>
  <div class="card-box" @click="onClick">
    <div v-if="showImg" class="card-img"></div>
    <div v-if="showText" class="card-text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'cardCom',
  props: {
    imgUrl: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    showImg () {
      return this.imgUrl !== ''
    },
    showText () {
      return this.text !== ''
    }
  },
  data () {
    return {
      
    }
  },
  methods: {
    onClick () {
      this.$emit('onClick')
    }
  },
  mounted () {
    
  }
}
</script>

<style lang="scss" scoped>
.card-box {
  width: 100%;
  height: 100%;
  .card-text {
    text-align: center;
  }
}
</style>
