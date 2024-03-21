<template>

    <div>
    <div class="btnAndcolor"> 
    <SocialButton dynamicBorderRadius="7px" text="About the company"  textColor="white" bgColor="#C45F0E"  b_width="200px" b_height="45px"/>
</div>
    <div class="btnAndcolor1">
    <SocialButton dynamicBorderRadius="7px" text="Want to work here?Current job openings"  textColor="black" bgColor="transparent"  b_width="350px" b_height="45px"/>
    </div>


</div>
</template>


<script>
import SocialButton from './SocialButton.vue';
export default {
  name: 'btnAndcolortext',


  components:{
        SocialButton
    }


};
</script>



<style>
.btnAndcolor{
    margin-top: 40px;
    margin-left: 80px;
}
.btnAndcolor1{
    margin-top: 30px;
}
</style>