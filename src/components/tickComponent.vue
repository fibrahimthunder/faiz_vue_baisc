<template>
    <div>
    <img class="tick-logo" :src="logoPath">
    <p class="textComp1">{{ TextComp1 }}</p>
    <div class="Main-text">
    <p class="textComp2">{{ TextComp2 }}</p>
    <p class="textComp3">{{ TextComp3 }}</p>
    <p class="textComp4">{{ TextComp4 }}</p>
</div>
</div>

</template>

<script>
export default {
  name: 'tickComponent',

  props:{
    TextComp1:{
      type: String,
      required: true,
    },
    logoPath:{
        type: String,
      required: true,
    },
    TextComp2:{
      type: String,
      required: true,
    },
    TextComp3:{
      type: String,
      required: true,
    },
    TextComp3:{
      type: String,
      required: true,
    },
    TextComp4:{
        type: String,
      required: true,
    }
  }

};
</script>


<style>
.tick-logo{
    height: 17px;
    width: 17px;
    border-radius: 10px;
    margin-bottom: 10px;
}
.textComp1{
    color: white;
    font-weight: bold;
    font-size: 20px;
}
.textComp2{
    color: rgb(100, 97, 97);
    text-align: center;
}
.textComp3{
  color: rgb(100, 97, 97);
  text-align: center;  
}
.Main-text{
    margin-top: 14px;
    text-align: center;
}
.textComp4{
    color: rgb(100, 97, 97);
    text-align: center;
}

</style>