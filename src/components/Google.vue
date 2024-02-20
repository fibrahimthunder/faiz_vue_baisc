<template>
<div id="Google-container">
<button id="Google-icon">
<img id="Google-Logo" src="./../assets/google-Logo.jpg">
<p id="Google-text" class="buttonText">Log in with Google</p>
</button>
</div>
</template>
<script>
export default {
  name: 'Google'
}
</script>
<style>

#Google-container{
    margin: 100px;
}
#Google-icon{
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    height: 40px;
    padding-left: 70px;
    padding-right: 70px;
    color: white;
}
#Google-text{
    padding-left: 4px;
    color: black;
}
#Google-Logo{
  height: 20px;
  width: 20px;
}
</style>