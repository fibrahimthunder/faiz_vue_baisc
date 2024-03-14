<template>
    <div class="fourCardcontainer">


        <div class="Texttop" v-if="texttop, logoIcon6">
        <p>{{ texttop }}</p>
        <img class="mainlogoes1" :src="logoIcon6">
        </div>
        
        <div class="freetext" :style="{ backgroundColor: bgColor, color: textColor, height: b_height, width: b_width, padding: dynamicPadding }">
        <p>{{ text }}</p>
        </div>
        
        <div class="bigfreetext">
            <p>{{ text1 }}</p>
        </div>


        <div class="noCredit">
            <p>{{ text2 }}</p>
        </div>

        <div class="Main-line">
        <div class="line" :style="{ backgroundColor: bgColor2}">
        </div>
        </div>

        <div class="logoes1">
            <img class="mainlogoes" :src="logoIcon">
            <div class="Icon-text">
                <p>{{ text3 }}</p>
            </div>       
        </div>


        <div class="logoes2">
            <img class="mainlogoes" :src="logoIcon2">
            <div class="Icon-text2">
                <p>{{ text4 }}</p>
            </div>          
        </div>


        <div class="logoes3">
            <img class="mainlogoes" :src="logoIcon3">
            <div class="Icon-text3">
                <p>{{ text5 }}</p>
            </div>          
        </div>


        <div class="logoes4" v-if="text6">
            <img class="mainlogoes" :src="logoIcon4">
            <div class="Icon-text4">
                <p>{{ text6 }}</p>
            </div>          
        </div>

        <div class="logoes5" v-if="text7">
            <img class="mainlogoes" :src="logoIcon5">
            <div class="Icon-text5">
                <p>{{ text7 }}</p>
            </div>          
        </div>

         <div class="btnfour">
        <SocialButton  dynamicBorderRadius="7px" :text="btntext"  :textColor="btnTextColor" :bgColor="buttonBgColor"  b_width="300px" b_height="45px"  />
        </div>
          

        <div class="endOfbtnText" :style="{ color: dynamicColor }" >
          <p>{{ text8 }}</p>
        </div>

    </div>
</template>


<script>
import SocialButton from './SocialButton.vue';
export default {
  name: 'fourCards',

  components:{
    SocialButton
  },

  props:{
    text:{
    type: String,
    required: true,
    },
    bgColor:{
    type: String,
    default: "transparent",
    },
    textColor:{
    type: String,
    default: "transparent",
    },
    b_height:{
        type: String,
       default: "",
    },
    b_width:{
        type: String,
       default: "",
    },
    dynamicPadding:{
        type: String,
       default: "",
    },
    text1:{
        type: String,
       default: "",
    },
    text2:{
        type: String,
       default: "",
    },
    bgColor2:{
        type: String,
    default: "transparent",
    },
    logoIcon:{
        type: String,
      required: true,
    },
    logoIcon2:{
        type: String,
      required: true,
    },
    logoIcon6:{
        type: String,
      required: true,
    },
    logoIcon3:{
        type: String,
      required: true,
    },
    logoIcon4:{
        type: String,
      required: true,
    },
    logoIcon5:{
        type: String,
      required: true,
    },
    text3:{
        type: String,
    required: true,
    },
    text4:{
        type: String,
    required: true,
    },
    text5:{
        type: String,
    required: true,
    },
    text6:{
        type: String,
    required: true,
    },
    text7:{
        type: String,
    required: true,
    },
    buttonBgColor:{
    type: String,
    default: "red",
    },
   btntext:{
    type: String,
    required: true,
   },
   btnTextColor:{
    type: String,
    default: "",
   },
   btnmargintop:{
    type: String,
    default: "",
   },
   text8:{
    type: String,
    required: true,
   },
   dynamicColor:{
    type: String,
    default: "",
   },
   texttop:{
    type: String,
    required: true,
   }
  }
};
</script>


<style>
.fourCardcontainer{
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 360px;
    height: 600px;
    margin-top: 19px;
    border-radius: 10px;
}
.freetext{
    margin-top: 30px;
    margin-left: 20px;
    font-size: 20px;
    border-radius: 4px;
    
    justify-content: center;
    display: flex;
}
.bigfreetext{
    margin-top: 25px;
    margin-left: 20px;
    font-size: 30px;
    font-weight: bold;
}
.noCredit{
    margin-top: 7px;
    margin-left: 20px;
    color: grey;
}
.line {
    margin-top: 30px;
    width: 318px;
    height: 1px; /* Adjust thickness as needed */
    /* Adjust color as needed */
  }
  .Main-line{
    justify-content: center;
    display: flex;
  }
  .mainlogoes{
    height: 20px;
    width: 20px;
    margin-left: 20px;
    margin-top: 24px;
  }
  .Icon-text{
    margin-top: 25px;
    margin-left: 10px;
  }
  .Icon-text2{
    margin-top: 25px;
    margin-left: 10px;
  }
  .Icon-text3{
    margin-top: 25px;
    margin-left: 10px;
  }
  .Icon-text4{
    margin-left: 10px;
    margin-top: 25px;
  }
  .Icon-text5{
    margin-left: 10px;
    margin-top: 25px;
  }
  .logoes1{
    display: flex;
  }

  .logoes2{
    display: flex;
  }
  .logoes3{
    display: flex;
  }
  .logoes4{
    display: flex;
  }
  .logoes5{
    display: flex;
  }
  .btnfour{
    justify-content: center;
    align-items: end;
    display: flex;
    padding-bottom: 20px;
    flex: 1;

  }
  .endOfbtnText{
    text-align: center;
    margin-bottom: 20px;
  }
  .Texttop{
    margin-left: 20px;
    display: flex;
  }
  .mainlogoes1{
    height: 20px;
    width: 20px;
    margin-left: 180px;
  }

</style>