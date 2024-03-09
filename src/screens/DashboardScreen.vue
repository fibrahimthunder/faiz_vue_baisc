<script>
import Spacialcard from '../components/Spacialcard.vue';
import BigCard from '../components/BigCard.vue';
import BigStackoverflow from '../components/BigStackoverflow.vue';
import tickComponent from '../components/tickComponent.vue';
import stackdisplay from '../components/stackdisplay.vue';

export default {
  name: 'DashboardScreen',
  components: {
    Spacialcard,
    BigCard,
    BigStackoverflow,
    tickComponent,
    stackdisplay
  },
  data(){
    return{
      searchbarIcon: require('./../assets/searchbar-Icon.png'),
      bigImg1: require('./../assets/bigImg1.svg'),
      bigImg2: require('./../assets/bigImg2.svg'),
      tick: require('./../assets/tick.jpg'),
      arrowplain: require('./../assets/arrowplain.jpg'),
      handfree: require('./../assets/handfree.png'),
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
    
  <div class="TickComponent">
    <tickComponent TextComp1="Increase productivity" TextComp2="If somebody somewhere has the right" TextComp3=" answer, suddenly you have it too." TextComp4="Collaborate better in a remote-first world." :logoPath="tick" />
    <tickComponent TextComp1="Accelerate time to market" TextComp2="Shorten the time between initial idea and" TextComp3="complete product. Take delays and" TextComp4="misinformation out of the equation."  :logoPath="tick" />
    <tickComponent TextComp1="Protect institutional knowledge" TextComp2="People come and people go, but if you" TextComp3="capture their contributions in one central" TextComp4="place, that expertise sticks around." :logoPath="tick" />
  </div>

  <div class="hr-line">
    <hr>
  </div>

  <div class="part2Text">
  <p>Ensure your company stays on course</p>
  </div>

  <div class="part3Text">
    <p>Here are just a few types of technologists that we help.</p>
  </div>

  <div>
    <stackdisplay text1="DevOps" text2="engineers" :lastPath=" arrowplain" />
    <stackdisplay text1="DevOps" text2="engineers" :lastPath=" handfree" />
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
  height: 1000px;
  border-radius: 10px;
}
.overflowCard{
  padding: 50px;
  width: 85%;
}
.TickComponent{
  display: flex;
  justify-content: center;
  margin-top: 90px;
  justify-content: space-around;
}
.hr-line{
  width: 40%;
  margin-top: 90px;
  color: rgb(100, 97, 97);
  justify-content: center;
}
.part2Text{
  font-weight: bold;
  font-size: 40px;
  color: white;
  margin-top: 70px;
  text-align: center;
}
.part3Text{
  color: white;
  margin-top: 10px;
  text-align: center;
  font-size: 19px;
}
</style>