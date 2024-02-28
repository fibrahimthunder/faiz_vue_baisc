<template>
<div class="input_container">
<input class="search-input" type="text" v-model="input" placeholder="Search"/>
<img src="./../assets/searchbar-icon.png" alt="Logo" class="logo"> 
</div>
</template>

<script>
export default {
  name: "Searchbar",
}
</script>

<style>
.input_container{
  margin: 50px;
  position: relative;
}
.search-input{
  padding-left: 35px; /* Adjust as per your logo size */
  width: 600px; /* Adjust width as needed */
  height: 30px; /* Adjust height as needed */
  border: 1px solid #ccc;
  border-radius: 7px;
}
.logo{
  position: absolute;
  margin-top: 17px;
  left: 10px; /* Adjust left position as needed */
  transform: translateY(-50%);
  width: 20px; /* Adjust width as needed */
  color: rgb(153, 146, 146);
}
</style>