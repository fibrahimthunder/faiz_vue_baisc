<template>
<div>
<button id="Github-icon">
<img id="Github-Logo" src="./../assets/github-Logo.png">
<span id="Github-text" class="buttonText">Log in with Github</span>
</button>
</div>
</template>
<script>
export default {
  name: 'Github'
}
</script>
<style>

#Github-icon{
  justify-content: center;
  background-color: white;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 70px;
  padding-right: 70px;
  border-radius: 6px;
  background-color: black;
}
#Github-text{
    color: white;
    padding: 2px;
}
#Github-Logo{
  height: 20px;
  width: 30px;
  margin-top: 2px;
}
</style>
