<template>
<div>
<button id="Facebook-icon">
<img id="Facebook-Logo" src="./../assets/facebook-logo.jpg">
<span id="Facebook-text" class="buttonText">Log in with Google</span>
</button>
</div>
</template>
<script>
export default {
  name: 'Facebook'
}
</script>
<style>
#Facebook-icon{
  justify-content: center;
  background-color: blue;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 70px;
  padding-right: 70px;
  border-radius: 6px;
  border-color: none;
  height: 40px;
}
#Facebook-text{
    color: white;
    padding: 2px;
}
#Facebook-Logo{
  height: 20px;
  width: 22px;
  margin-top: 2px;
  border-radius: 4px;
  color: white;
  padding: 2px
}
</style>
