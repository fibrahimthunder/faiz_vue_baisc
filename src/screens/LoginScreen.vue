<script>
import Navbar from './../components/Navbar.vue';
import Logo from './../components/Logo.vue';
import Button from './../components/Button.vue';
import LoginSection from './../components/LoginSection.vue';
import Facebook from './../components/Facebook.vue';
import Text from './../components/Text.vue';
import Google from './../components/Google.vue';


export default {
  name: 'Login',
  components: {
    Navbar,
    Logo,
    Button,
    LoginSection,
    Facebook,
    Text,
    Google
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

    <Google class="Google-button" text="Login With Google" bgColor="white" :logoPath=googleLogo textcolor="white" />
    <Google class="Github-button" text="Log in With GitHUB" bgColor="black" :logoPath=gitLogo textcolor="white" />
    <Google class="Facebook-button" text="Log in With Facebook" />

    <LoginSection  class="login-section" />

    <Text />
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
</style>