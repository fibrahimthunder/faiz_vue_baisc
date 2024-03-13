<template>
    <div class="tickParentDiv">


    <div class="MainTickLogoParent">
    <img class="tick-logo" :src="logoPath">
    </div>


    <div class="ParentText">
    <p class="Mainhiding">{{ Mainhiding }}</p>
    </div>
    
    <div class="Main-text">
    <p class="Subhiding">{{ subhiding }}</p>
    </div>


</div>

</template>

<script>
export default {
  name: 'tickComponent',

  props:{
    Mainhiding:{
      type: String,
      required: true,
    },
    logoPath:{
        type: String,
      required: true,
    },
    subhiding:{
      type: String,
      required: true,
    }
  }

};
</script>


<style>
.tickParentDiv{
width: 300px;
}
.MainTickLogoParent{
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
}
.tick-logo{
    height: 17px;
    width: 17px;
    border-radius: 10px;
}
.ParentText{
  display: flex;
  justify-content: center;
}
.Mainhiding{
    color: white;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
}
.Subhiding{
    color: rgb(100, 97, 97);
    text-align: center;
}

.Main-text{
    margin-top: 14px;
    text-align: center;
}


</style>