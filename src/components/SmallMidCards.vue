<template>

<div class="MainMidcompClass" :style="{ backgroundColor: bgColor5  }">
    <img class="SmallMidlogo" :src="smallMidLogo">
    <p class="smallmidtext">{{ SmallMidtext }}</p> 
    
    <div class="smallMidText1">
    <p>{{ SmallMidtext1 }}</p>
    </div>


</div>


</template>


<script>
export default {
  name: 'SmallMidCards',

  props:{
    smallMidLogo:{
        type: String,
        required: true,
    },
    SmallMidtext:{
        type: String,
        required: true,
    },
    bgColor5:{
        type: String,
        default: "",
    },
    SmallMidtext1:{
        type: String,
        required: true,
    }
  }
};
</script>

<style>
.MainMidcompClass{
    display: flex;
}
.SmallMidlogo{
    height: 30px;
    width: 40px;
}
.smallmidtext{
    font-weight: bold;
    font-size: 20px;
    margin-top: 8px;
    margin-left: 10px;
}
.smallMidText1{
    
}
</style>