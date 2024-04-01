<template>
<div class="parentInsideFooter">        
    <ul>
        <div class="insideFooter">
        <li><a href="#">{{ insidetext1 }}</a></li>
        <li><a href="#">{{ insidetext2 }}</a></li>
        <li><a href="#">{{ insidetext3 }}</a></li>
        <li><a href="#">{{ insidetext4 }}</a></li>
        <li><a href="#">{{ insidetext5 }}</a></li>
    </div>
    </ul>
    <div class="footerPara">
    <p>Site design / logo © 2024 Stack Exchange Inc; user contributions licensed under CC BY-SA. rev 2024.3.27.6959</p>
    </div>
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
.insideFooter{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
    margin-left: 10%;
}
.footerPara{
    width: 345px;
    margin-left: 13%;
    margin-top: 211px;
    font-size: 13px;
    color:   rgb(101, 100, 100);
}
</style>