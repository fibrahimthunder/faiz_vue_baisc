<template>


    <div class="mianAllText">
        <img class="blackComLogo" :src="BlackComLogo">
    <div class="logoAndtxtdiv">


    <div>
    <p class="TextStack">STACK OVERFLOW</p>
    <p class="textofquestion">Question</p>
    <p class="textofhelp">help</p>
    </div>
    </div>

    <div>
        <p class="TextProduct">PRODUCTS</p>
        <p class="textofTeams">Teams</p>
        <p class="textifadvertising">Advertising</p>
        <p class="textofcollections">Collectives</p>
        <p class="textoftalent">Talent</p>
    </div>



    <div>
        <p class="TextCompany">COMPANY</p>
        <p class="textofabout">About</p>
        <p class="textofpress">Press</p>
        <p class="textofwork">Work Here</p>
        <p class="textoflegal">Legal</p>
        <p class="textofpolicy">Privacy Policy</p>
        <p class="textofservice">Teams of service</p>
        <p class="textofcontact">Contact Us</p>
        <p class="textofCookie">Cookie Settings</p>
        <p class="textofCp">Cookie Policy</p>        
    </div>

    <div>
        <p class="textofExhange">STACK EXCHANGE NETWORK</p>
        <p class="textoftech">Technology</p>
        <p class="textofculure">Culture & recreation</p>
        <p class="textoflife">Life & arts</p>
        <p class="textofSer">Science</p>
        <p class="textofprofession">professional</p>
        <p class="textofbussines">Bussines</p>
        <p class="textofApi" >Api</p>
        <p class="textofdata" >data</p>
    </div>

</div>

</template>


<script>
export default {
  name: 'BlackFooter',


  props:{
    BlackComLogo:{
        type: String,
        required: true,
    }
  }
};
</script>


<style>
*{
    margin: 0px;
    padding: 0px;
}

.mianAllText{
    display: flex;
    margin-top: 30px;
    justify-content: space-around;
    width: 70%;
    margin-bottom: 50px;
}
.blackComLogo{
    height: 35px;
    width: 40px;
    margin-left: 180px;
}
.TextStack{
   font-weight: bold;    
}
.TextProduct{
    font-weight: bold;
}
.textofExhange{
    font-weight: bold;
}
.TextCompany{
    font-weight: bold;
}
.logoAndtxtdiv{
    display: flex;
    margin-left: 30px;
}
.textofquestion{
    margin-top: 20px;
}
.textofhelp{
    margin-top: 10px;
}
.textofTeams{
    margin-top: 20px;
}
.textifadvertising{
    margin-top: 10px;
}
.textofcollections{
    margin-top: 10px;
}
.textoftalent{
    margin-top: 10px;
}
.textofabout{
    margin-top: 20px;
}
.textofpress{
    margin-top: 10px;
}
.textofwork{
    margin-top: 10px;
}
.textoflegal{
    margin-top: 10px;
}
.textofpolicy{
    margin-top: 10px;
}
.textofservice{
    margin-top: 10px;
}
.textofcontact{
    margin-top: 10px;
}
.textofCookie{
    margin-top: 10px;
}
.textofCp{
    margin-top: 10px;
}
.textoftech{
    margin-top: 20px;
}
.textofculure{
    margin-top: 10px;
}
.textoflife{
    margin-top: 10px;
}
.textofSer{
    margin-top: 10px;
}
.textofprofession{
    margin-top: 10px;
}
.textofprofession{
    margin-top: 10px;
}
.textofbussines{
    margin-top: 10px;
}
.textofApi{
    margin-top: 10px;
}
.textofdata{
    margin-top: 10px;
}
</style>