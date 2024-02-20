<template>
<div>
<button id="Button-icon" :style="{ backgroundColor: bgColor }" >
<img id="google-Logo" :src="logoPath" />
<p id="google-text" class="buttonText"></p>
</button>
</div>
</template>
<script>
export default {
  name: 'Button',
}
</script>
<style>
#Button-icon{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-color: grey;
  
}
#google-text{
  padding-left: 10px;
  padding-right: 10px;
}
#google-Logo{
  height: 20px;
  width: 30px;
  padding-left: 10px;
}
</style>
