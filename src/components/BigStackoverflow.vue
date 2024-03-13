<template>
    <div class="stackContainer">
        <div class="text-container">
      <img class="stack-logo" src="./../assets/stackoverflow_icon.png">
      <p class="text1">{{ Text1 }}</p>
    </div>
    <p class="text2">FOR TEAMS</p>
    <div class="text3">
    <p>Capture your company,s knowledge and context in a</p>
    <p>discoverable format to unblock your team</p>
    </div>
    <div class="stackbtn">
    <SocialButton dynamicBorderRadius="7px" text="Take a tour of Teams"  textColor="white" bgColor="blue"  b_width="208px" b_height="45px"/>
    </div>
</div>
</template>


<script>
import SocialButton from './SocialButton.vue';
export default {
  name: 'BigStackoverflow',

  components:{
    SocialButton
  },

  props:{
    Text1:{
      type: String,
      required: true,
    }
  }
};
</script>


<style>
*{
  margin: 0px;
  padding: 0px;
}
.text1{
  color: white;
  margin-top: 17px;
  font-size: 28px;
}
.text2{
  color: orange;
  text-align: center;
  margin-right: 45px;
  font-size: small;
  font-weight: bold;
}
.text3{
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  margin-top: 35px;
}
.stack-logo{
  height: 36px;
  width: 36px;
  margin-top: 1%;
}                          
.text-container{
  display: flex;
  justify-content: center;
  margin-top: 100px;                                         
}
.stackbtn{
  margin-top: 40px;
  justify-content: center;
  display: flex;
}
</style>