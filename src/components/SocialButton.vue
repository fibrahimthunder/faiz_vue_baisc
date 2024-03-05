<template>
  <div class="Google-container" >
    <button id="Google-icon" :style="{ backgroundColor: bgColor, height: b_height, width: b_width }">
         <img  id="Google-Logo" :src="logoPath" v-if="!!logoPath" />
      <p id="Google-text" :style="{ color: textColor }">{{ text }}</p>
    </button>
  </div>
</template>
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
    b_width: {
       type: String,
       default: "300px"
    },
    b_height: {
        type: String,
       default: "30px"
    },
  
  },
};
</script>

<style>

#Google-icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  }
#Google-text {
  padding-left: 4px;
  color: black;
}
#Google-Logo {
  height: 20px;
  width: 20px;
}
</style>
