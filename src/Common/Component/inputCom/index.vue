<template>
  <div class="input-common">
    <div class="text-tips">{{ text }}</div>
    <div class="input-box flex1">
      <input type="text" :placeholder="placeholder" v-model="inputVal" />
      <div class="border-box"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'inputCom',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: String
    },
    text: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      inputVal: ''
    }
  },
  methods: {
  },
  mounted () {
    
  },
  watch: {
    inputVal (newVal, oldVal) {
      this.$emit('change', newVal)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-common {
  padding: 0.14rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #fff;
  height: 0.54rem;
  .flex1 {
    flex: 1;
  }
  .input-box {
    margin-left: 0.15rem;
    width: 100%;
    height: 100%;
    >input {
      width: 100%;
      height: 100%;
      border:none;
    }
    .border-box {
      width: 100%;
      height: 1px;
      background-image: linear-gradient(to top, #ccc 50%, transparent 50%);
    }
  }
}
</style>
