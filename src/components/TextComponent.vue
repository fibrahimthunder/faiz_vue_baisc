<template>

  
     <div class="MainText" :style="{ backgroundColor: bgColor3 }">
      <p>{{ maintext }}</p>
    </div>

</template>


<script>
export default {
  name: 'TextComponent',

  props:{
    maintext:{
      type: String,
    required: true,
    },
    bgColor3:{
      type: String,
      default: "transparent",
    }
  }
};
</script>


<style>
.MainText{
  color: white;
  display: flex;
  border-radius: 9px;
  width: 205px;
  padding: 20px;
  text-align: center;
  font-size: 20px;
}

</style>