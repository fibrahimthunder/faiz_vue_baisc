<template>
        <div class="card-container" :style="{ backgroundColor: bgColor}">
            <div class="training-items">
                <img class="spacial-logo" :src="logoPath" >
                <p class="heading">{{heading}}</p>
                <SocialButton class="Community-button" dynamicBorderRadius="7px" text="Join the community"  textColor="white" bgColor="orange"  b_width="200px" b_height="40px"/>
                <p class="Search-para" v-if="!!subheading" > {{subheading}}</p>
            </div>
        </div>
</template>

<script>
import SocialButton from './SocialButton.vue';

export default {
    name: 'Spacial',
    components:{
        SocialButton
    },
    props:{
        heading: {
      type: String,
      required: true,
    },
    subheading: {
      type: String,
      required: false,
      default: ""
    },
    bgColor: {
        type: String,
      default: "black",
    },
    logoPath:{
      type: String,
      required: false,
    }
}
}
</script>

<style>
*{
    margin: 0px;
    padding: 0px;
    font-family: sons-serif;
}

.card-container{
    width: 200px;
    margin: auto;
    margin-top: 20px;
    border-radius: 12px;
    padding-left: 70px;
    padding-right: 70px;
    height: 198px;
    background-color: rgb(241, 188, 197);
    
}
.spacial-logo{
        height: 30px;
        width: 30px;
        margin-top: 10px; 
        align-items: center;  
        margin-bottom: 10px;
}
.training-items{
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
    justify-content: center;
    align-items: center;
}
.Community-button{
    margin-top: 18px;
}
.Search-para{
    text-align: center;
    margin-top: 10px;
}
.heading{
    font-size: 15px;
    text-align: center;
    font-weight: bold;
}
</style>