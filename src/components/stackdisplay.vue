<template>
  <div class="maincomponent" :style="{ marginTop: marginTop }">

  <div class="mainlogo">
  <img class="arrowplain-logo" :src="lastPath"> 
  </div>


  <div class="maintext">
  <p class="Heading1">{{ heading1 }}</p>
  <p class="Subhiding1">{{ subhiding1 }}</p>
  </div>

  </div>
</template>

<script>
export default {
  name: 'stackdisplay',

  props:{
    lastPath:{
      type: String,
      required: true,
    },
    heading1:{
      type: String,
      required: true,
    },
    subhiding1:{
      type: String,
      required: false,
    },
    marginTop: {
      type: String,
      required: false,
    }
  }
};

</script>


<style>
.maincomponent{
  display: flex;
flex-direction: column;
align-items: center;
  width: 100%;
}
.mainlogo{
  justify-content: center;
  display: flex;
}
.arrowplain-logo{
  width: 110px;
  height: 110px;
  border-radius: 29px;
}
.maintext{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
}
.Heading1{
  display: flex;
  color: white;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
}
.Subhiding1{
  display: flex;
  color: white;
  margin-top: 17px;
  text-align: center;
  width: 90%;
}
</style>