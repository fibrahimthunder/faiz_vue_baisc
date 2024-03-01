<template>
 <div class="Logocontainer">
  <img class="Logo" src="./../assets/stackoverflow_icon.png">
  <p id="Text-ForTeams">For Teams</p>
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
  padding: 90px;
}
.Logo{
  height: 30px;
  width: 30px;
  margin-top: 1%;
  padding: 10px;
}
#Text-ForTeams{
  margin-top: 15px;
  font-weight: bold;
  font-size: 22px;
  height: 100px;
}
</style>