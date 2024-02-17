<script>
import Logo from './../components/Logo.vue';
import LoginSection from './../components/LoginSection.vue';



export default {
  name: 'SignUpScreen',
  components: {
    Logo,
    LoginSection
  },
}
</script>

<template>
  <div class="Fahad">
    <Logo />
    <p>SIGNUP</p>

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
</style>
