<template>
    
     <div class="MainText" :style="{ backgroundColor: bgColor3  }">
      <p>{{ maintext }}</p>

      <div class="dynmicbtn" v-if="dynmicbtn1" > 
      <SocialButton class="dynmicbtn1" dynamicBorderRadius="7px" text="Calculate your ROI"  textColor="blue" bgColor="transparent" b_borderColor="blue"   b_width="200px" b_height="40px"/>
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
    maintext:{
      type: String,
    required: true,
    },
    bgColor3:{
      type: String,
      default: "transparent",
    },
    dynmicbtn1:{
      type: String,
      required: true,
    }
  }
};
</script>


<style>
.MainText{
color: white;
text-align: center;
border-radius: 10px;
font-size: 20px;
}

.dynmicbtn{
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

</style>