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
}
</script>

<template>
  <div class="Fahad">

  <div class="faiz">
    <Logo />
    </div>

    <div class="faiz2">
    <Button text="Login With Google" bgColor="white" logoPath="./../assets/logo.png" textcolor="white" />
    <Button text="Login With GitHUB" bgColor="black" />
    <Button text="Login With Facebook" bgColor="#2a4074" />

    </div>

    <LoginSection />

  </div>
</template>


<style>
.Fahad{
    display: flex;
    flex-direction: column;
    background-color: red;
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
