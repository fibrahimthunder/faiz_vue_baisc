<script>

export default {
  name: 'Navbar',
 
}
</script>

<template>
  <div>

  <div class="faizcontainerOrange" />
    <div id="Navbar">
      <img id="LogoStyle" src="./../assets/stackover flowWhite.png">
      <p id="text">FOR TEAMS</p>
    </div>

  </div>
</template>


<style>

.faizcontainerOrange{
  background-color: orange;
  height: 5px
}
#Navbar{
    background-color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    width: 100%;
}
#LogoStyle{
  height: 30px;
  width: 30px;
  margin-left: 10%;
  margin-bottom: 27px;
  padding: 10px;
}
#text{
    color: white;
    margin-left: 5px;
    margin-top: 15px;
}
</style>
