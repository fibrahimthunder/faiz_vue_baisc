<template>
 <div class="Logocontainer">
  <img class="Logo" src="./../assets/stackoverflow_icon.png">
  <h1>For Teams</h1>
 </div>
</template>
<script>
export default {
  name: 'Logo'
}
</script>
<style>
.Logocontainer{
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
}
.Logo{
  height: 50px;
  width: 50px;
  margin-top: 1%;
}
</style>
