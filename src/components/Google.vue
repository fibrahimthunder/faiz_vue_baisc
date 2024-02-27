<template>
  <div id="Google-container">
    <button id="Google-icon">
      <img id="Google-Logo" src="./../assets/google-Logo.jpg" />
      <p id="Google-text" class="buttonText">{{ text }}</p>
    </button>
  </div>
</template>
<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      default: "transparent",
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
