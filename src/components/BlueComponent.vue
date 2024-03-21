<template>

    <div>
    <div class="BlueContainer">
        <p class="BlueText1">{{ blueText1 }}</p>
        <p class="BlueText2">{{ blueText2 }}</p>
        <img class="BlueComLogo" :src="blueComLogo">
    </div>
    <p class="BlueText3">{{ blueText3 }}</p>
    <p class="BlueText4"> {{ blueText4 }}</p>
     
    <div class="BlueComBtn">
    <SocialButton dynamicBorderRadius="7px" text="Explore the network"  textColor="black" bgColor="#F1AB00"  b_width="208px" b_height="45px"/>
    </div>


    </div>
</template>


<script>
import SocialButton from './SocialButton.vue';

export default {
name: 'TextComponent',


components:{
    SocialButton
  },

   props:{
    blueText1:{
        type: String,
        required: true,
    },
    blueText2:{
        type: String,
        required: true,
    },
    blueComLogo:{
        type: String,
        required: true,
    },
    blueText3:{
        type: String,
        required: true,
    },
    blueText4:{
        type: String,
        required: true,
    }
   }
};
</script>


<style>
.BlueContainer{
    display: flex;
    justify-content: center;
}
.BlueText1{
    text-align: center;
    color: white;
    margin-top: 140px;
    font-size: 25px;
}
.BlueText2{
    color: white;
    font-weight: bold;
    margin-top: 140px;
    font-size: 25px;
}
.BlueComLogo{
    height: 23px;
    width: 23px;
    margin-top: 127px;
}
.BlueText3{
    margin-top: 70px;
    text-align: center;
    color: white;
    font-size: 40px;    
    font-weight: bold;
    width: 715px;
    
}
.BlueText4{
    color: white;
    text-align: center;
    width: 540px;
    margin-top: 40px;
    margin-left: 90px;
}
.BlueComBtn{
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 90px;
}

</style>