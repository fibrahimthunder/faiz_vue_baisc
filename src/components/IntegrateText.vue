<template>

<div class="hidingText">
<p>Integrates with and improves other tools</p>


<div class="mainSecondHidingText"> 
<div class="hidingsecondText">
<P>All plans come with integrations for ChatOps tools Slack & Microsoft Teams in order to cut down on pings, limit distractions and make the tools even more powerful. Business and Enterprise customers get access to Jira, GitHub & Okta integrations.</P>
</div>
</div>

<div class="logesIntigrate">
<img class="IntegrateLogoes" :src="integrateLogo">
<img class="IntegrateLogoes1" :src="integrateLogo1">
<img class="IntegrateLogoes2" :src="integrateLogo2">
<img class="IntegrateLogoes3" :src="integrateLogo3">
</div>

<div class="TextPremium">
    <p>Some of the premium features available with paid tiers</p>
</div>


</div>


</template>


<script>
export default {
  name: 'IntegrateText',

  props:{
    integrateLogo:{
        type: String,
      required: true,
    },
    integrateLogo1:{
        type: String,
      required: true,
    },
    integrateLogo2:{
        type: String,
      required: true,
    },
    integrateLogo3:{
        type: String,
      required: true,
    }
  }

};
</script>

<style>
.hidingText{
    color: white;
    font-size: 45px;
    font-weight: bold;
}
.hidingsecondText{
    color: #292C30;
    font-weight: 100;
    font-size: 23px;
    margin-top: 10px;
}
.mainSecondHidingText{
    width: 800px;
    text-align: center;
    padding: 3px;
}
.IntegrateLogoes{
    height: 70px;
    width: 70px;
    border-radius: 8px;
}
.IntegrateLogoes1{
    height: 70px;
    width: 70px;
    border-radius: 8px;
}
.IntegrateLogoes2{
    height: 70px;
    width: 70px;
    border-radius: 8px;
}
.IntegrateLogoes3{
    height: 70px;
    width: 70px;
    border-radius: 8px;
}
.TextPremium{
    margin-top: 130px;
    font-weight: 100;
    font-size: 20px;
    color: #2C3034;
}
.logesIntigrate{
  margin-top: 30px;
}
</style>