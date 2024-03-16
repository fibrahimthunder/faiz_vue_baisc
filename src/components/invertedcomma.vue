<template>
    <div class="parentComma">
        <img class="logoComma" :src="Commalogo">
        <p class="textofcomma">{{ CommaText }}</p>

        <div class="line" :style="{ width: b_width }">
        </div>

        <p class="hidingCommaText">{{ hidingAftercomma }}</p>
        <p class="subhidingCommaText">{{ subhidingAfterComma }}</p>
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
    },
    hidingAftercomma:{
        type: String,
        required: true,
    },
    subhidingAfterComma:{
        type: String,
        required: true,
    },
    b_width:{
        type: String,
        default: "",
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
.line{
    background-color: black;
}
.subhidingCommaText{
    margin-top: 7px;
    font-size: 20px;
}
.hidingCommaText{
    margin-top: 15px;
    color: black;
    font-weight: bold;
    font-size: 20px;
}
</style>