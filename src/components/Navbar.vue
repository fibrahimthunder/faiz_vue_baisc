<script>
import Logo from './Logo.vue';
import Button from './Button.vue';
import Github from './Github.vue';
import Facebook from './Facebook.vue';
import LoginSection from './LoginSection.vue';


export default {
  name: 'Navbar',
  components: {
    Logo,
    Button,
    Github,
    Facebook,
    LoginSection
  },
}
</script>

<template>
  <div>
    <div id="Navbar">
      <img id="LogoStyle" src="./../assets/stackover flowWhite.png">
      <p id="text">FOR TEAMS</p>
    </div>
    <Logo />
    <Button />
    <Github />
    <Facebook />

    <LoginSection />


  </div>
</template>


<style>
#Navbar{
    background-color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    width: 100%;
}
#LogoStyle{
  height: 30px;
  width: 30px;
  margin-left: 10%;
  margin-bottom: 27px;
  padding: 10px;
}
#text{
    color: white;
    margin-left: 5px;
    margin-top: 15px;
}
</style>
