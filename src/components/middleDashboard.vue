<template>

    <div class="MainMiddleClass">
        <img class="middleLogo" :src="MiddleLogo">
        <p class="MiddleText">{{ middleText }}</p>
        <p class="MiddleText1">{{ middleText1 }}</p>
    </div>

    

</template>


<script>
export default {
  name: 'middleDashboard',

  props:{
    MiddleLogo:{
        type: String,
        required: true,
    },
    middleText:{
        type: String,
        required: true,
    },
    middleText1:{
        type: String,
        required: true,
    },
  }
};
</script>


<style>
.MainMiddleClass{
    margin-top: 150px;
    display: flex;
    justify-content: center;
}
.middleLogo{
    height: 30px;
    width: 40px;
}
.MiddleText{
    color: black;
    font-size: 30px;
}
.MiddleText1{
    color: black;
    font-size: 30px;
    font-weight: bold;
}
</style>