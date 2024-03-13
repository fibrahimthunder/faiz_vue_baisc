<template>
  <div  >
    <button id="Google-icon" :style="{ backgroundColor: bgColor, height: b_height, width: b_width, borderRadius: dynamicBorderRadius, marginTop: computedMarginTop }">
      <div style="display: flex;
      flex-direction: row;">
        <img  id="Google-Logo" :src="logoPath" v-if="!!logoPath" />
        <p id="Google-text" :style="{ color: textColor }">{{ text }}</p>
       
      </div>      
    </button>

  </div>
</template>x
<script>
export default {
  name: "SocialButton",

  props: {
    text: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      default: "transparent",
    },
    textColor: {
      type: String,
       default:'white'
    },
    logoPath: {
      type: String,
      required: false,
    },
    rightlogoPath: {
      type: String,
      required: false,
    },
    b_width: {
       type: String,
       default: "300px"
    },
    b_height: {
        type: String,
       default: "30px"
    },
    dynamicBorderRadius:{
      type: String,
      default: ""
    },
    computedMarginTop:{
      type: String,
      default: ""
    }
  },
};
</script>

<style>

#Google-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  }
#Google-text {
  padding-left: 4px;
  color: black;
  font-size: medium;
  font-weight: bold;
}
#Google-Logo {
  margin-top: 14px;
  height: 20px;
  width: 20px;
}
</style>
