<template>
    <div >
    <button class="Signup-icon" :style="{ backgroundColor:bgColor }">
        <h4 class="Signup-text" :style="{ color: textColor }">{{ text }}</h4>
    </button>
    </div>
    </template>
    
    <script>
    export default {
      name: 'SignupButton',
      props:{
        text:{
            type: String,
            required: true,
        },
        bgColor: {
            type: String,
            default: "transparent",
        },
        textColor: {
            type: String,
            default: "black",
        },
      }
    }
    </script>
    
    
    <style>
 
    .Signup-icon{
        border-radius: 6px;
        background-color: rgb(67, 67, 234);
    
    }
    .Signup-icon:hover{
        background-color: rgb(17, 17, 147);
     

    }
    .Signup-text{
        color: white;
        margin: 0px;
        padding: 5px;
    }
    </style>