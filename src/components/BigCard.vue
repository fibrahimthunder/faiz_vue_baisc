
<template>
    <div class="big-container" :style="{ backgroundColor: bgColor, height: b_height, }">
        <div class="small-container">
            <img class="Card-Logo" src="./../assets/stackoverflow_icon.png">
            <p class="card-text">{{ cardtext }}</p>
        </div>
        <div style="display: flex;
        justify-content: center;">
            <img class="bigimg-Card" :src="logoPath">
        </div>
        
        <p class="card-text2">{{ cardtext2 }}</p>
        <p class="card-text3">{{ cardtext3 }}</p>
        <p class="card-text5">{{ cardtext5 }}</p>
        <div style="display: flex;margin-top: 60px;justify-content: center;        ">
        <SocialButton class="Community-button" dynamicBorderRadius="7px" text="Join the community"  textColor="white" bgColor="orange"  b_width="200px" b_height="40px"/>
    </div>
        <p class="card-text4">{{ cardtext4 }}</p>
    </div>
</template>


<script>
import SocialButton from './SocialButton.vue';

export default {
  name: "BigCard",

  components:{
        SocialButton
    },

  props:{

    cardtext:{
      type: String,
      required: true,
    },
    cardtext2:{
        type: String,
      required: true,
    },
    logoPath: {
      type: String,
      required: true,
    },
    cardtext3:{
      type: String,
      required: true,
    },
    cardtext4:{
        type: String,
      required: false,
    },
    bgColor: {
      type: String,
      default: "transparent",
    },
    b_height:{
        type: String,
       default: ""
    },
    cardtext5:{
        type: String,
      required: false,
    }
  }

};
</script>

<style>
*{
    margin: 0px;
    padding: 0px;
    font-family: sons-serif;
}
.big-container{
    width: 500px;
    margin: auto;
    margin-top: 20px;
    border-radius: 12px;
    justify-content: center;
    padding: 20px;
    align-items: center;
    padding-left: 40px;
}
.Card-Logo{
    height: 36px;
    width: 36px;
    margin-top: 1%;
    padding: 10px;
    
}
.card-text{
    font-size: 26px;
    margin-top: 20px;
    text-align: center;
}
.small-container{
     display: flex;
    flex-direction: row;
    justify-content: center;
}
.card-text2{
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    margin-top: 40px;
}
.card-text3{
    text-align: center;
    margin-top: 20px;
    font-weight: lighter;
    font-size: 20px;
}
.cardbtn{
    margin-top: 20px;
}
.card-text4{
    text-align: center;
    margin-top: 10px;
}
.bigimg-Card{
    margin-top: 30px;
    height: 300px;
}
.card-text5{
    text-align: center;
    margin-top: 30px;
}
</style>