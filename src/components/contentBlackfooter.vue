<template>
        <div class="black-container1">
            <div class="row2">
            <div style="display: flex; flex-direction: row;">
                <img class="FooterLogo2" v-if="footerLogo2" :src="footerLogo2" />
                <div class="footer-col2">
                  <ul>
                    <p style="font-weight: bold; margin-bottom: 20px; " >{{ TextFooter0 }}</p>
                    <li><a href="#">{{ TextFooter1 }}</a></li>
                    <li><a href="#">{{ TextFooter2 }}</a></li>
                    <li><a href="#">{{ TextFooter3 }}</a></li>
                    <li><a href="#">{{ TextFooter4 }}</a></li>
                    <li><a href="#">{{ TextFooter5 }}</a></li>
                    <li><a href="#">{{ TextFooter6 }}</a></li>
                    <li><a href="#">{{ TextFooter7 }}</a></li>
                    <li><a href="#">{{ TextFooter8 }}</a></li>
                    <li><a href="#">{{ TextFooter9 }}</a></li>
                    <li><a href="#">{{ TextFooter10 }}</a></li>
                  </ul>
                </div>
              </div>
        </div>


    </div>
</template>


<script>
export default {
  name: "contentBlackfooter",

  
  props:{
    footerLogo2:{
        type: String,
        required: true,
    },
    TextFooter1:{
        type: String,
        required: true,
    },
    TextFooter2:{
        type: String,
        required: true,
    },
    TextFooter0:{
        type: String,
        rquired: true,
    },
    TextFooter3:{
        type: String,
        required: true,
    },
    TextFooter4:{
        type: String,
        required: true,
    },
    TextFooter5:{
        type: String,
        required: true,
    },
    TextFooter6:{
        type: String,
        required: true,
    },
    TextFooter7:{
        type: String,
        required: true,
    },
    TextFooter8:{
        type: String,
        required: true,
    },
    TextFooter9:{
        type: String,
        required: true,
    },
    TextFooter10:{
        type: String,
        required: true,
    }
  }
};
</script>

<style>
.FooterLogo2{
    height: 30px;
    width: 40px;
    margin-bottom: 50px;
}
.black-container1{
    height: 340px;
    margin-top: 30px;
    width: 20%
}
.footer-col2{
    margin-left: 50px;
}
.footer-col2 ul li a {
    text-decoration: none;
    color: #767979;
}
.footer-col2 ul li{
    margin-bottom: 10px;
}
ul{
    list-style: none;
}       

</style>