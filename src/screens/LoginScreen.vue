<script>
import Navbar from './../components/Navbar.vue';
import Logo from './../components/Logo.vue';
import Button from './../components/Button.vue';
import LoginSection from './../components/LoginSection.vue';
import Facebook from './../components/Facebook.vue';
import Text from './../components/Text.vue';


export default {
  name: 'Login',
  components: {
    Navbar,
    Logo,
    Button,
    LoginSection,
    Facebook,
    Text
  },
    data () {
    return {
      gitLogo: require('./../assets/github-Logo.png'),
      googleLogo: require('./../assets/google-Logo.jpg')
      
    }
  }
}
</script>

<template>
  <div class="Fahad">
  <div class="fahadContainer">
  <Navbar />
  </div>

  <div class="faiz">
    <Logo />
    </div>

    <div class="faiz2">
    <Button class="Google-l" text="Login With Google" bgColor="white" :logoPath=googleLogo textcolor="white" />
    <Button class="Github-g" text="Login With GitHUB" bgColor="black" :logoPath=gitLogo textcolor="white" />
    <Button text="Login With Facebook" bgColor="#2a4074" :logoPath=facebook-Logo textcolor="white" />

    </div>
    <LoginSection />

    <Text />
  </div>
</template>


<style>
.fahadContainer{
  width: 100%
}
.Fahad{
    display: flex;
    flex-direction: column;
    justify-content: "center";
     align-items: center;
}
.faiz{
  height: 160px;
}
.faiz2{
    padding-bottom: 17px;
}

</style>