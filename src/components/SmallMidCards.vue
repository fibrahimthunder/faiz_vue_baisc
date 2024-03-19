<template>
<div class="fullcontainer" :style="{ backgroundColor: bgColor5 }"> 
<div class="MainMidcompClass">
    <img class="SmallMidlogo" :src="smallMidLogo">
    <p class="smallmidtext">{{ SmallMidtext }}</p>
</div>

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
    SmallMidtext1:{
        type: String,
        required: true,
    },
    bgColor5:{
        type: String,
        default: "",
    }
  }
};
</script>

<style>
.MainMidcompClass{
    display: flex;
    justify-content: center;
}
.SmallMidlogo{
    height: 30px;
    width: 40px;
}
.smallmidtext{
    font-weight: bold;
    font-size: 20px;
    margin-top: 7px;
    margin-left: 10px;
}
.smallMidText1{
    margin-top: 20px;
    text-align: center;
    font-size: 20px;
    padding-left: 30px;
    padding-right: 30px;
}
.fullcontainer{
    margin: 10px;
    padding: 20px;
    border-radius: 10px;
    width: 400px;
}
</style>