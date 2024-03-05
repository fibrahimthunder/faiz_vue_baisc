<script>
import Spacialcard from '../components/Spacialcard.vue';

export default {
  name: 'DashboardScreen',
  components: {
    Spacialcard
  },
}
</script>

<template>
  <div class="Fahad">
    <Spacialcard heading="Find the best answer to your technical question, help others answer theirs" bgColor="pink"/>
    <Spacialcard heading="Want a secure, private space for your technical knowledge?" bgColor="rgb(62, 62, 237)"/>

  </div>
</template>

<style>
.Fahad{
    display: flex;
    flex-direction: row;
    justify-content: "center";
     align-items: center;
}
</style>
