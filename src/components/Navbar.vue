<script>
import Searchbar from './../components/Searchbar.vue';
import SignupButton from './../components/SignupButton.vue';
import SocialButton from './SocialButton.vue';


export default {
  name: 'Navbar',
  components:{
    Searchbar,
    SignupButton,
    SocialButton
  }
}
</script>

<template>
  <div>

  <div class="faizcontainerOrange" />
    <div id="Navbar">
      <img id="LogoStyle" src="./../assets/stackover flowWhite.png">
      <p id="text">FOR TEAMS</p>
      <Searchbar class="SearchLx" />
      <Loginbutton class="Loginbnt" />
      
      <SocialButton text="Log in" textColor="blue" bgColor="white"  b_width="90px"/>
      <SocialButton text="Sign up" textColor="white" bgColor="blue"  b_width="90px"/>
      
    </div>
  </div>
</template>

<style>
.faizcontainerOrange{
  background-color: #E56F0D;
  height: 3px
}
#Navbar{
    background-color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    width: 100%;
}
#Navbar:hover{
  background-color: rgb(60, 58, 58);
}
#LogoStyle{
  height: 30px;
  width: 30px;
  margin-left: 10%;
  margin-bottom: 30px;
  padding: 10px;
  margin-top: 22px;
  cursor: pointer;
}
#text{
    color: white;
    margin-left: 5px;
    margin-top: 15px;
    font-weight: bold;
    width: 143px;
    cursor: pointer;
}
.SearchLx{
  
}
.Loginbnt{
  margin-left: 200px;
}
.signupbtn{
  margin-left: 5px;
}
</style>
