<template>
<div>
  <img class="arrowplain-logo" :src="lastPath">
  <p class="Text1">{{ text1 }}</p>
  <p class="Text2">{{ text2 }}</p>

</div>
</template>

<script>
export default {
  name: 'stackdisplay',

  props:{
    lastPath:{
      type: String,
      required: true,
    },
    text1:{
      type: String,
      required: true,
    },
    text2:{
      type: String,
      required: true,
    },
  }
};

</script>


<style>
.arrowplain-logo{
  width: 110px;
  height: 110px;
}
.Text1{
  color: white;
}
.Text2{
  color:  white;
}
</style>