import SocialButton from './../components/SocialButton.vue';
<template>
    <div class="training-section" >
        <div class="card-container" :style="{ backgroundColor: bgColor}">
            <div class="training-items">
                <img class="spacial-logo" :src="logoPath">
                <p>{{heading}}</p>
                <SocialButton class="Community-button" text="Join the community" textColor="white" bgColor="orange" textcolor="white" b_width="160px" b_height="30px"/>
                <p class="Search-para" >{{subheading}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import SocialButton from './SocialButton.vue';

export default {
    name: 'Spacial',
    components: {
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
.training-section{
    width: 100%;
    height: 300px;
}
.training-section h1{
    text-align: center;
}
.card-container{
    width: 280px;
    margin: auto;
    border: 1px solid red;
    margin-top: 20px;
    border-radius: 12px;
    padding-left: 70px;
    padding-right: 70px;
    height: 198px;
    background-color: rgb(241, 188, 197);
    
}
.spacial-logo{
        height: 20px;
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
</style>