<template>
  <div class="Google-container" >
    <button id="Google-icon" :style="{ backgroundColor: bgColor }">
      <img id="Google-Logo" :src="logoPath" />
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
      default: "black",
    },
    logoPath: {
      type: String,
      required: true,
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
  height: 37px;
  padding-left: 70px;
  padding-right: 70px;
  position: relative;
  cursor: pointer;
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
