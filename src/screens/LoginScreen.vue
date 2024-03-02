<script>
import Navbar from './../components/Navbar.vue';
import Logo from './../components/Logo.vue';
import LoginSection from './../components/LoginSection.vue';
import Facebook from './../components/Facebook.vue';
import Text from './../components/Text.vue';
import SocialButton from './../components/SocialButton.vue';


export default {
  name: 'Login',
  components: {
    Navbar,
    Logo,
    LoginSection,
    Facebook,
    Text,
    SocialButton
  },
    data () {
    return {
      gitLogo: require('./../assets/github-Logo.png'),
      googleLogo: require('./../assets/google-Logo.jpg'),
      facebooklogo: require('./../assets/facebook-logo.jpg'),
    }
  }
}
</script>

<template>
  <div class="Fahad">
  <div class="NavbarContainer">
  <Navbar />
  </div>

  <div class="Teams-logo">
    <Logo />
    </div>

    <SocialButton class="Google-button" text="Login With Google" textColor="black" bgColor="white" :logoPath=googleLogo textcolor="white" />
    <SocialButton class="Github-button" text="Log in With Github" textColor="white" bgColor="black" :logoPath=gitLogo textcolor="white" />
    <SocialButton class="Github-button" text="Log in With Facebook"  bgColor="#2a4074" :logoPath=facebooklogo textcolor="white" />

    <LoginSection  class="login-section" />
   
    <div class="text-container">
      <p class="text-p1">Don,t have an account? Sign up</p>
      <p class="text-p2">Are you an employer? Sign up on Talent</p>
      </div>
  </div>
  
</template>

<style>
.NavbarContainer{
  width: 100%
}
.Fahad{
    display: flex;
    flex-direction: column;
    justify-content: "center";
    align-items: center;
}
.Teams-logo{
  height: 155px;
}
.login-section{
  margin-top: 10px;
}
.Google-button{
  margin-bottom: 11px;
}
.Github-button{
  margin-bottom: 11px;
}
.Facebook-button{
  margin-bottom: 11px;
}
.text-p1{
  text-align: center;
  margin-top: 40px;
}
.text-p2{
  text-align: center; 
}
</style>