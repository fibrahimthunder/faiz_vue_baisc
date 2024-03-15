<template>
    <div class="parentComma">
        <img class="logoComma" :src="Commalogo">
        <p class="textofcomma">{{ CommaText }}</p>
    </div>
</template>

<script>
export default {
  name: 'invertedcomma',

  props:{
    Commalogo:{
        type: String,
        required: true,
    },
    CommaText:{
        type: String,
        required: true,
    }
  }
};
</script>


<style>
.logoComma{
    height: 60px;
    width: 60px;
}
.textofcomma{
    color: black;
    width: 330px;
    font-size: 20px;
}
</style>