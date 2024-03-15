<template>

    <div class="mainkey" :style="{ backgroundColor: bgColor4 }">

    <div class="Mainlogo">
    <img class="keyLogo" :src="keylogo">
    </div>

    <p class="robustText">{{ keyText }}</p>
</div>
</template>

<script>
export default {
  name: 'Textandlogo',

  props:{
    keylogo:{
        type: String,
      required: true,
    },
    bgColor4:{
        type: String,
      default: "transparent",
    },
    keyText:{
        type: String,
        required: true,
    }
  }
};
</script>

<style>
.mainkey{
    border-radius: 10px;
    padding: 40px;
}
.Mainlogo{
    display: flex;
    justify-content: center;
}
.keyLogo{
    height: 40px;
    width: 40px;
}
.robustText{
    color: black;
    text-align: center;
    width: 169px;
    margin-top: 20px;
}
</style>