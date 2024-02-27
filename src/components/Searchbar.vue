<template>
<div class="input_container">
<input class="custom" type="text" v-model="input" placeholder="Search"/>

</div>
</template>

<script>
export default {
  name: 'Searchbar'
}
</script>

<style>
.input_container{
  margin: 70px;
}
.custom{
  width: 700px;
  height: 27px;
  border-radius: 6px;
  color: 1px solid white;
}
</style>