<script>
import Spacialcard from '../components/Spacialcard.vue';
import BigCard from '../components/BigCard.vue';
import BigStackoverflow from '../components/BigStackoverflow.vue';
import tickComponent from '../components/tickComponent.vue';

export default {
  name: 'DashboardScreen',
  components: {
    Spacialcard,
    BigCard,
    BigStackoverflow,
    tickComponent
  },
  data(){
    return{
      searchbarIcon: require('./../assets/searchbar-Icon.png'),
      bigImg1: require('./../assets/bigImg1.svg'),
      bigImg2: require('./../assets/bigImg2.svg'),
    }
  }
}
</script>

<template>
  <div class="mainContainer">
  <div class="Fahad">
    <Spacialcard class="Card-1"  heading="Find the best answer to your technical question, help others answer theirs" subheading="or search content" bgColor="pink"  :logoPath="searchbarIcon" />
    <Spacialcard class="card-2" heading="Want a secure, private space for your technical knowledge?"  bgColor="rgb(62, 62, 237)" :logoPath="searchbarIcon" />
    <Spacialcard class="card-2" heading="Want a secure, private space for your technical knowledge?"  bgColor="rgb(62, 62, 237)" :logoPath="searchbarIcon" />
  </div>

  <div class="maincards">
  <BigCard cardtext="stack overflow" b_height="950px" bgColor="#F6B27A" :logoPath=bigImg1 cardtext2="A public platform building the definitive collection of coding questions & answers" cardtext3="A community-based space to find and contribute answers to technical challenges, and one of the most popular websites in the world." cardtext4="or search content" />
  <BigCard cardtext="FOR TEAMS" b_height="950px" bgColor="#92C2F2" :logoPath=bigImg2 cardtext2="A private collaboration & knowledge sharing SaaS platform for companies" cardtext3="A web-based platform to increase productivity, decrease cycle times, accelerate time to market, and protect institutional knowledge." cardtext5="---------Get started---------"  />
  </div>

  <div class="overflowCard">
    <BigStackoverflow Text1="stackoverflow" />

    
  <div>
    <tickComponent />
  </div>

  </div>


</div>
</template>

<style>
*{
  margin: 0px;
  padding: 0px;
}
.mainContainer {
  display: flex;
    flex-direction: column;
    align-items: center;
}
.Fahad{
  width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: "center";
    align-items: center;
    background-color: chartreuse;
}

.maincards{
  display: flex;
  width: 80%;
  justify-content: center;
}
.overflowCard{
  width: 93%;
  background-color: black;
  margin-top: 10px;
  height: 700px;
  border-radius: 10px;
}
.overflowCard{
  padding: 50px;
  width: 85%;
}
</style>