<template>
    <div>
    <div class="annelText">
    <p>Annual billing discount</p>    
    <div>
    <SocialButton  dynamicBorderRadius="7px" :text="btntext"  :textColor="btnTextColor" :bgColor="red"  b_width="300px" b_height="45px"  />
</div>
    </div>

</div>

</template>

<script>
import SocialButton from "../components/SocialButton.vue";
export default {
  name: "sixComponent",
};
</script>


<style>
.annelText{
    color: white;
}
</style>