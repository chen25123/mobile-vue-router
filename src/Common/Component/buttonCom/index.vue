<template>
  <div class="button-box">
    <div class="button" :class="[{'hollow': isHollow}, {'animation-scale': isScale}]" @click="onClick">
      <!-- <span>{{ text }}</span><br v-if="desc !== ''" />{{ desc }} -->
      <div class="main-text" :class="[{only: isOnly}]">{{ text }}</div>
      <div class="desc-text" v-if="!isOnly">{{ desc }}</div>
    </div>
    <div class="button miniabsolute" :class="[{'hollow': isHollow}]" v-if="isGetUserInfo">
      <form @submit="submit" report-submit="true">
        <button open-type="getUserInfo" form-type="submit" class="hide-but" @getuserinfo="gotoContent"></button>
      </form>
    </div>
    <div class="button miniabsolute" :class="[{'hollow': isHollow}]" v-if="isShare">
      <form @submit="submit" report-submit="true">
        <button class="hide-but" form-type="submit" open-type="share" @click="shareMiniProm"></button>
      </form>
    </div>
    <div class="mask" v-if="maskShow"></div>
  </div>
</template>
<script>
export default {
  name: 'buttonCom',
  props: {
    width: {
      type: String
    },
    text: {
      type: String
    },
    desc: {
      type: String,
      default: ''
    },
    type: {
      type: String
    },
    maskShow: {
      type: Boolean
    },
    miniProgram: {
      type: String,
      default: ''
    },
    animationType: {
      type: String
    }
  },
  computed: {
    isOnly () {
      return this.desc === ''
    },
    isHollow () {
      return this.type === 'hollow'
    },
    isGetUserInfo () {
      return this.miniProgram === 'getUserInfo'
    },
    isShare () {
      return this.miniProgram === 'share'
    },
    isScale () {
      return this.animationType === 'scale'
    }
  },
  data () {
    return {
      formId: ''
    }
  },
  methods: {
    onClick () {
      if (this.miniProgram === '') {
        this.$emit('on-click')
      }
    },
    gotoContent (e) {
      this.$emit('on-click', e)
    },
    submit (e) {
      this.formId = e.mp.detail.formId
    },
    shareMiniProm () {
      this.$emit('on-click')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/Style/publicStyle.scss";

$butColor: rgb(82, 104, 165);
.button-box {
  position: relative;
  width: 100%;
}
.button {
  width: 100%;
  height: 40 * $px;
  border-radius: 40 * $px;
  border: 1px solid $butColor;
  background-color: $butColor;
  text-align: center;
  .main-text {
    height: 20 * $px;
    font-size: 14 * $px;
    line-height: 24 * $px;
    color: #fff;
    // padding-top: 4 * $px;
    // font-size: 14 * $px;
    // color: #fff;
  }
  .desc-text {
    height: 16 * $px;
    font-size: 12 * $px;
    color: rgba(255, 255, 255, .7);
    line-height: 18 * $px;
    // padding-top: 4 * $px;
    // font-size: 12 * $px;
    // color: rgba(255, 255, 255, .7);
  }
  .main-text.only {
    height: 100%;
    font-size: 16 * $px;
    line-height: 38 * $px;
  }
}
.animation-scale {
  animation: scaleChange .45s linear infinite;
}
@keyframes scaleChange {
  0% { transform: scale(1);}
  50% { transform: scale(0.95);}
  100% {transform: scale(1);}
}
.button.hollow {
  box-sizing: border-box;
  border: 1px solid $butColor;
  background-color: transparent;
  .main-text {
    color: $butColor;
  }
  .desc-text {
    color: rgba(131, 83, 13, .7);
  }
}
.button.miniabsolute {
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  background-color: transparent;
  opacity: 0;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 40 * $px;
  background-color: rgba(255, 255, 255, .5);
}
.hide-but {
  width: 100%;
  height: 100%;
  border-radius: 40 * $px;
  border: none;
  background-color: transparent;
  font-size: 18 * $px;
  font-weight: bold;
  color: #fff;
  text-align: center;
}
</style>
