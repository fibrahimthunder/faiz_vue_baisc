<template>
  <div class="footer">
    <div class="BLack-container">
      <div class="row">
        <div style="display: flex; flex-direction: row;">
        <img class="FooterLogo" :src="footerLogo" />
        <div class="footer-col">
          <ul>
            <p style="font-weight: bold">Stackoverflow</p>
            <li><a href="#">Questions</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </div>

        <div class="footer-col">
          <ul>
            <p style="font-weight: bold">Products</p>
            <li><a href="#">Teams</a></li>
            <li><a href="#">advertising</a></li>
            <li><a href="#">collectives</a></li>
            <li><a href="#">Talent</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <ul>
            <p style="font-weight: bold">Company</p>
            <li><a href="#">About</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Work Here</a></li>
            <li><a href="#">Legal</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Teams of service</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Cookie Settings</a></li>
            <li><a href="#">Cookie policy</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <p style="font-weight: bold">STACK EXCHANGE NETWORK</p>
          <ul>
            <li><a href="#">Technology</a></li>
            <li><a href="#">Culture & recreation</a></li>
            <li><a href="#">Life and arts</a></li>
            <li><a href="#">Science</a></li>
            <li><a href="#">Professional</a></li>
            <li><a href="#">Bussines</a></li>
            <li><a href="#">Api</a></li>
            <li><a href="#">Data</a></li>
          </ul>
        </div>

        
          <div class="mainFooter">
          <ul class="fiveMainblogs">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Linkdin</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
          <p style="width: 472px;">Site design / logo © 2024 Stack Exchange Inc; user contributions licensed under CC BY-SA. rev 2024.3.22.6753</p>
        
      </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlackFooter",

  props: {
    BlackComLogo: {
      type: String,
      required: true,
    },
    footerLogo: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.footer {
  margin-top: 20px;
}
.FooterLogo {
  height: 30px;
  width: 40px;
  margin-right: 40px;
}
ul {
  list-style: none;
}
.BLack-container {
  display: flex;
  justify-content: center;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
}
.fiveMainblogs {
  display: flex;
  flex-direction: row;
  
}
.footer-col p {
  margin-bottom: 20px;
}
.footer-col ul li a {
  text-decoration: none;
  color: #767979;
}
.footer-col ul li {
  margin-bottom: 10px;
}
.mainFooter{
  display: flex;
  flex-direction: column;
  height: 265px;
  justify-content: space-between;
}
</style>
