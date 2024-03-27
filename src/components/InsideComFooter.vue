<template>
<div class="parentInsideFooter">
    <ul>
        <li><a href="#">{{ insidetext1 }}</a></li>
        <li><a href="#">{{ insidetext2 }}</a></li>
        <li><a href="#">{{ insidetext3 }}</a></li>
        <li><a href="#">{{ insidetext4 }}</a></li>
        <li><a href="#">{{ insidetext5 }}</a></li>
    </ul>
    <p style="margin-top: 130px; width: 472px">Site design / logo © 2024 Stack Exchange Inc; user contributions licensed under CC BY-SA. rev 2024.3.27.6959</p>
</div>
</template>

<script>
export default {
  name: "contentBlackfooter",

  props:{
    insidetext1:{
        type: String,
        required: true,
    },
    insidetext2:{
        type: String,
        required: true,
    },
    insidetext3:{
        type: String,
        required: true,
    },
    insidetext4:{
        type: String,
        required: true,
    },
    insidetext5:{
        type: String,
        required: true,
    }
  }
};
</script>

<style>
.parentInsideFooter ul li a{
    text-decoration: none;
    color: #767979;
    font-size: 13px;
}
</style>