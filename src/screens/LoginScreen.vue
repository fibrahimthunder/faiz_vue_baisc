<script>
import Logo from './../components/Logo.vue';
import Button from './../components/Button.vue';
import LoginSection from './../components/LoginSection.vue';
import Facebook from './../components/Facebook.vue';


export default {
  name: 'Login',
  components: {
    Logo,
    Button,
    LoginSection,
    Facebook
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

  <div class="faiz">
    <Logo />
    </div>

    <div class="faiz2">
    <Button text="Login With Google" bgColor="white" :logoPath=googleLogo textcolor="white" />
    <Button text="Login With GitHUB" bgColor="black" :logoPath=gitLogo textcolor="white" />
    <Button text="Login With Facebook" bgColor="#2a4074" :logoPath=gitLogo textcolor="white" />

    </div>

    <LoginSection />

  </div>
</template>


<style>
.Fahad{
    display: flex;
    flex-direction: column;
    justify-content: "center";
     align-items: center;
}
.faiz{
    padding-top: 20px;
    padding-bottom: 20px;
}
.faiz2{
    padding-top: 20px;
    padding-bottom: 20px;
}

</style>
