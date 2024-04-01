<script>
import Spacialcard from "../components/Spacialcard.vue";
import BigCard from "../components/BigCard.vue";
import BigStackoverflow from "../components/BigStackoverflow.vue";
import tickComponent from "../components/tickComponent.vue";
import stackdisplay from "../components/stackdisplay.vue";
import fourCards from "../components/fourCards.vue";
import TextComponent from "../components/TextComponent.vue";
import IntegrateText from "../components/IntegrateText.vue";
import Textandlogo from "../components/Textandlogo.vue";
import invertedcomma from "../components/invertedcomma.vue";
import middleDashboard from "../components/middleDashboard.vue";
import SmallMidCards from "../components/SmallMidCards.vue";
import BlueComponent from "../components/BlueComponent.vue";
import lockTextBtn from "../components/lockTextBtn.vue";
import btnAndcolortext from "../components/btnAndcolortext.vue";
import BlackFooter from "../components/BlackFooter.vue";
import contentBlackfooter from "../components/contentBlackfooter.vue";
import InsideComFooter from "../components/InsideComFooter.vue";

export default {
  name: "DashboardScreen",
  components: {
    Spacialcard,
    BigCard,
    BigStackoverflow,
    tickComponent,
    stackdisplay,
    fourCards,
    TextComponent,
    IntegrateText,
    Textandlogo,
    invertedcomma,
    middleDashboard,
    SmallMidCards,
    BlueComponent,
    lockTextBtn,
    btnAndcolortext,
    BlackFooter,
    contentBlackfooter,
    InsideComFooter
  },
  data() {
    return {
      bigImg1: require("./../assets/bigImg1.svg"),
      bigImg2: require("./../assets/bigImg2.svg"),
      tick: require("./../assets/tick.jpg"),
      arrowplain: require("./../assets/arrowplain.jpg"),
      datalogo: require("./../assets/datalogo.jpg"),
      softwarelogo: require("./../assets/softwarelogo.png"),
      handfree: require("./../assets/handfree.png"),
      leadershiplogo: require("./../assets/leadershiplogo.jpg"),
      searchbarIcon: require("./../assets/searchbar-Icon.png"),
      keylogo: require("./../assets/keylogo.jpg"),
      lockLogo: require("./../assets/lockLogo.jpg"),
      commaslogo: require("./../assets/commaslogo.png"),
      stackoverflowicon: require("./../assets/stackoverflow_icon.png"),
    };
  },
};
</script>

<template>
  <div class="mainContainer">
    <div class="Fahad">
      <Spacialcard
        class="Card-1"
        heading="Find the best answer to your technical question, help others answer theirs"
        subheading="or search content"
        bgColor="pink"
        :logoPath="searchbarIcon"
      />
      <Spacialcard
        class="card-2"
        heading="Want a secure, private space for your technical knowledge?"
        bgColor="rgb(62, 62, 237)"
        :logoPath="searchbarIcon"
      />
    </div>

    <div class="afterCardPara">
      <p>Every developer data scientist system adminmobile developer game developer has a
        tab open to Stack Overflow</p>
    </div>

    <div class="maincards">
      <BigCard
        cardtext="stack overflow"
        b_height="950px"
        bgColor="#F6B27A"
        :logoPath="bigImg1"
        cardtext2="A public platform building the definitive collection of coding questions & answers"
        cardtext3="A community-based space to find and contribute answers to technical challenges, and one of the most popular websites in the world."
        cardtext4="or search content"
      />
      <BigCard
        cardtext="FOR TEAMS"
        b_height="950px"
        bgColor="#92C2F2"
        :logoPath="bigImg2"
        cardtext2="A private collaboration & knowledge sharing SaaS platform for companies"
        cardtext3="A web-based platform to increase productivity, decrease cycle times, accelerate time to market, and protect institutional knowledge."
        cardtext5="---------Get started---------"
      />
    </div>

    <div class="overflowCard">
      <BigStackoverflow Text1="stackoverflow" />

      <div class="TickCompParent">
        <div class="TickComponent">
          <tickComponent
            Mainhiding="Increase productivity"
            subhiding="If somebody somewhere has the right answer, suddenly you have it too. Collaborate better in a remote-first world."
            :logoPath="tick"
          />
          <tickComponent
            Mainhiding="Accelerate time to market"
            subhiding="Shorten the time between initial idea and complete product. Take delays and misinformation out of the equation."
            :logoPath="tick"
          />
          <tickComponent
            Mainhiding="Protect institutional knowledge"
            subhiding="People come and people go, but if you capture their contributions in one central place, that expertise sticks around."
            :logoPath="tick"
          />
        </div>
      </div>

      <div class="MainHrlineParent">
        <div class="hr-line">
          <hr />
        </div>
      </div>

      <div class="part2Text">
        <p>Ensure your company stays on course</p>
      </div>

      <div class="part3Text">
        <p>Here are just a few types of technologists that we help.</p>
      </div>

      <div class="optionsSectionParent">
        <div class="secondNumCards">
          <stackdisplay
            heading1="DevOps engineers"
            :lastPath="arrowplain"
            marginTop="50px"
          />
          <stackdisplay
            heading1="Data scientists"
            :lastPath="datalogo"
            marginTop="50px"
          />
          <div class="insideComp">
            <stackdisplay
              heading1="Software engineers"
              subhiding1="Help engineers be more efficient and streamline knowledge sharing using a tool they already love and trust. "
              :lastPath="softwarelogo"
            />
          </div>
          <stackdisplay
            heading1="Support teams"
            :lastPath="handfree"
            marginTop="50px"
          />
          <stackdisplay
            heading1="Engineers leaders"
            :lastPath="leadershiplogo"
            marginTop="50px"
          />
        </div>
      </div>

      <div class="sixComp">
        <p style="color: white">Annual billing discount</p>
      </div>

      <div class="fordisplaycards">
        <fourCards
          text="Free"
          bgColor2="red"
          text2="No credit card required"
          text1="Free"
          bgColor="#E7700D"
          textColor="white"
          b_height="26px"
          b_width="45px"
          dynamicPadding="3px"
          :logoIcon="searchbarIcon"
          :logoIcon2="searchbarIcon"
          :logoIcon3="searchbarIcon"
          text3="ChatOps integrations - Slack & Microsoft Teams"
          text4="Your own private space hosted on stackoverflowteams.com"
          text5="Structured and searchable knowledge base"
          buttonBgColor="#C45F0E"
          btntext="Create a free Teams"
          btnTextColor="white"
          text8="Always free up to 50 teammates"
          dynamicColor="blue"
        />
        <fourCards
          text="Basic"
          bgColor2="grey"
          text2="per teammate / month"
          text1="$6.50 USD"
          bgColor="#C8CCD0"
          textColor="black"
          b_width="54px"
          dynamicPadding="4px"
          :logoIcon="searchbarIcon"
          :logoIcon2="searchbarIcon"
          :logoIcon3="searchbarIcon"
          :logoIcon4="searchbarIcon"
          text6="Structured and searchable knowledge base"
          text3="Single sign-on (SSO) with SAML + Okta integration"
          text4="ChatOps integrations - Slack & Microsoft Teams"
          text5="Your own private space hosted on stackoverflowteams.com"
          buttonBgColor="#C8CCD0"
          btntext="Get started"
          btnTextColor="blue"
          text8="Up to 250 teammates"
          dynamicColor="orange"
        />
        <fourCards
          text="Business"
          bgColor2="grey"
          text2="per teammate / month"
          text1="$13.50 USD"
          bgColor="#3B4045"
          textColor="white"
          b_width="80px"
          dynamicPadding="5px"
          :logoIcon="searchbarIcon"
          :logoIcon2="searchbarIcon"
          :logoIcon3="searchbarIcon"
          :logoIcon4="searchbarIcon"
          text6="Usage and adoption metrics"
          text3="All the features of Basic plus…"
          text4="Long-form knowledge with Articles"
          text5="Group content together into Collections"
          :logoIcon5="searchbarIcon"
          text7="Priority customer support"
          buttonBgColor="#3B4045"
          btntext="Get started"
          btnTextColor="white"
          text8="Unlimited teammates"
          dynamicColor="red"
          texttop="RECOMMENDED"
          :logoIcon6="searchbarIcon"
        />
        <fourCards
          text="Enterprise"
          bgColor2="grey"
          text2="Let’s talk about what you need"
          text1="Custom pricing"
          bgColor="#2B2D6E"
          textColor="white"
          b_width="80px"
          dynamicPadding="6px"
          :logoIcon="searchbarIcon"
          :logoIcon2="searchbarIcon"
          :logoIcon3="searchbarIcon"
          :logoIcon4="searchbarIcon"
          text6="Your own customer success and community building representative"
          text3="Premium features of Business plus…"
          text4="Unlimited Teams within your instance"
          :logoIcon5="searchbarIcon"
          text5="Robust read and write API"
          text7="Your own customer success and community building representative"
          buttonBgColor="#181A47"
          btntext="Request a demo"
          btnTextColor="white"
          text8="Unlimited teammates"
          dynamicColor="pink"
        />
      </div>

      <div class="parentTextCom">
        <div class="MainTextComp">
          <TextComponent
            maintext="A Forrester Consulting study shows 191% return on investment with Stack Overflow for."
            bgColor3="#272B2E"
          />
          <TextComponent
            maintext="The world’s largest telecom firm saved $10M in deflected support cases with our centralized knowledge base."
            bgColor3="#272B2E"
          />
          <TextComponent
            maintext="Subject-matter experts at software platform Unqork had 27% more time to work on projects after using Teams."
            bgColor3="#272B2E"
          />
          <TextComponent
            maintext="you can save time and money with Stack Overflow for Teams"
            bgColor3="#272B2E"
            dynmicbtn1="RECOMMENDED"
          />
        </div>
      </div>

      <div class="integrateText">
        <IntegrateText
          :integrateLogo="handfree"
          :integrateLogo1="arrowplain"
          :integrateLogo2="softwarelogo"
          :integrateLogo3="tick"
        />
      </div>

      <div class="parentTextIcons">
        <div class="mainTextandlogo">
          <Textandlogo
            :keylogo="keylogo"
            bgColor4="#D6D9DC"
            keyText="Robust read and write API"
          />
          <Textandlogo
            :keylogo="lockLogo"
            bgColor4="#D6D9DC"
            keyText="Single sign-on with AD or SAML"
          />
          <Textandlogo
            :keylogo="leadershiplogo"
            bgColor4="#D6D9DC"
            keyText="Your own customer success representative"
          />
          <Textandlogo
            :keylogo="handfree"
            bgColor4="#D6D9DC"
            keyText="99.5% uptime SLA and priority support"
          />
        </div>
      </div>

      <div class="commasclass">
        <invertedcomma
          :Commalogo="commaslogo"
          CommaText="Stack Overflow for Teams has been a resource for our entire company. Not only for developers to solve problems, it’s also enabled our sales field to answer technical questions that help them close deals."
          subhidingAfterComma="Microsoft"
          hidingAftercomma="Director of Product Management"
          b_width="283px"
        />
        <invertedcomma
          :Commalogo="commaslogo"
          CommaText="Engineers should help solve the hardest questions, the unknowns, where being familiar with how the product was built is essential. But we don’t want to keep answering solved problems over and over again. That’s where Stack Overflow for Teams really helps."
          hidingAftercomma="Director of Engineering"
          subhidingAfterComma="Elastic Cloud"
          b_width="200px"
        />
        <invertedcomma
          :Commalogo="commaslogo"
          CommaText="As we started to use [Stack Overflow for Teams] and saw how nice it was to have a repository of information, we started to see it spread to other teams. Our customer support team started using it, our people success team started using it, next thing we knew, we had [Slack] integrations all over the place."
          hidingAftercomma="Engineering"
          subhidingAfterComma="Expensify"
          b_width="104px"
        />
        <invertedcomma
          :Commalogo="commaslogo"
          CommaText="What we love about Stack Overflow for Teams is that it’s a very dynamic tool…there’s just so many ways to use this as a liaison between different teams and different knowledge bases."
          hidingAftercomma="Software Engineer"
          subhidingAfterComma="Box"
          b_width="159px"
        />
      </div>

      <div>
        <middleDashboard
          :MiddleLogo="stackoverflowicon"
          middleText="stack"
          middleText1="overflow"
        />
      </div>

      <div class="MiddleText2">
        <p>
          Additional products that reach and engage developers & technologists…
        </p>
      </div>

      <div class="MainSmallcards">
        <div class="SmallCardsComp">
          <SmallMidCards
            :smallMidLogo="stackoverflowicon"
            SmallMidtext="ADVERTISING"
            SmallMidtext1="Reach the world,s largest audience of developers and technologists"
            bgColor5="grey"
          />
          <SmallMidCards
            :smallMidLogo="stackoverflowicon"
            SmallMidtext="COLLECTIVES"
            SmallMidtext1="Connecting communities with the spacific technologies they use the most"
            bgColor5="grey"
          />
        </div>
        <SmallMidCards
          :smallMidLogo="stackoverflowicon"
          SmallMidtext="ADVERTISING"
          SmallMidtext1="Reach the world,s largest audience of developers and technologists"
          bgColor5="grey"
        />
      </div>

      <btnAndcolortext />

      <div class="blueContainerDiv">
        <div class="mainblueComponent">
          <BlueComponent
            blueText1="Stack"
            blueText2="Exchange"
            :blueComLogo="stackoverflowicon"
            blueText3="Explore technical topics and other disciplines across 170+ Q&A communities"
            blueText4="From Server Fault to Super User, much of the Stack Exchange network continues our mission to empower the world to develop technology through collective knowledge. Other sites on the Stack Exchange network further encourage knowledge sharing across topics such as cooking and medicine."
          />
        </div>
      </div>

      <div>
        <lockTextBtn
          :locklogoes="lockLogo"
          textofLock="Build a private community to share technical or non-technical knowledge."
        />
      </div>

      <div class="parent-BlackCon">
      <div class="mainBlackCon">
        <contentBlackfooter
          :footerLogo2="stackoverflowicon"
          TextFooter1="Questions"
          TextFooter2="Help"
          TextFooter0="STACK OVERFLOW"
        />
        <contentBlackfooter
          TextFooter1="Teams"
          TextFooter3="Collectives"
          TextFooter4="Talent"
          TextFooter2="Advertising"
          TextFooter0="PRODUCTS"
        />
        <contentBlackfooter
          TextFooter1="About"
          TextFooter2="Press"
          TextFooter3="Work Here"
          TextFooter4="Legal"
          TextFooter5="Privacy Policy"
          TextFooter6="Teams of Service"
          TextFooter7="Contact us"
          TextFooter8="Cookie Settings"
          TextFooter9="Cookie Policy"
          TextFooter0="CONPANY"
        />
        <contentBlackfooter
          TextFooter1="Technology"
          TextFooter2="Culture & recreation"
          TextFooter0="STACK EXCAHNGE NETWORK"
          TextFooter3="Life & arts"
          TextFooter4="Science"
          TextFooter5="Professional"
          TextFooter6="Bussines"
          TextFooter7="Api"
          TextFooter8="Data"
        />

        <div class="parentInsideCom">
          <InsideComFooter insidetext1="Blog" insidetext2="Facebook" insidetext3="Twitter" insidetext4="Linkdin" insidetext5="Instagram" />
        </div>

      </div>


    </div>


    </div>
  </div>
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
}
.mainContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.Fahad {
  width: 42%;
  display: flex;
  flex-direction: row;
  justify-content: "center";
  align-items: center;
}
.afterCardPara{
  margin-top: 90px;
  font-weight: bold;
  font-size: 40px;
  width: 800px;
  text-align: center;
  margin-bottom: 90px;
}

.maincards {
  display: flex;
  width: 80%;
  justify-content: center;
}
.overflowCard {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: black;
  margin-top: 100px;
  height: 2900px;
  border-radius: 10px;
  
}

.TickCompParent {
  justify-content: center;
  display: flex;
}
.TickComponent {
  margin-top: 90px;
  display: flex;
  justify-content: space-around;
}
.insideComp {
  background-color: rgb(100, 97, 97);
  width: 200%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
}
.MainHrlineParent {
  display: flex;
  justify-content: center;
  margin-top: 90px;
}
.hr-line {
  color: rgb(100, 97, 97);
}
.part2Text {
  font-weight: bold;
  font-size: 40px;
  color: white;
  margin-top: 70px;
  text-align: center;
}
.part3Text {
  color: white;
  margin-top: 10px;
  text-align: center;
  font-size: 19px;
}
.optionsSectionParent {
  display: flex;
  width: 100%;
  margin-top: 70px;
  justify-content: center;
}
.secondNumCards {
  display: flex;
  justify-content: space-around;
  width: 70%;
}
.secondNumCards:hover {
  color: rgb(70, 69, 69);
}
.sixComp {
  margin-top: 150px;
}
.fordisplaycards {
  display: flex;
  justify-content: space-around;
  width: 88%;
}
.parentTextCom {
  width: 80%;
}
.MainTextComp {
  margin-top: 70px;
  display: flex;
  justify-content: center;
  justify-content: space-around;
}
.integrateText {
  margin-top: 220px;
  text-align: center;
}
.parentTextIcons {
  width: 63%;
}
.mainTextandlogo {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  justify-content: space-around;
}
.commasclass {
  display: flex;
  justify-content: space-around;
  margin-top: 120px;
  width: 90%;
}
.MiddleText2 {
  text-align: center;
  margin-top: 30px;
  font-size: 35px;
  width: 700px;
}
.MainSmallcards {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
}
.SmallCardsComp {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
}
.blueContainerDiv {
  background-color: blue;
  width: 100%;
  height: 680px;
  margin-top: 90px;
  border-radius: 10px;
}
.mainblueComponent {
  display: flex;
  justify-content: center;
}
.parent-BlackCon{
  margin-top: 70px;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: hsl(0, 0%, 0%); 
}
.mainBlackCon{
  color: #b1b2b3;
  display: flex;
  flex-direction: row;
  width: 85%;
  margin-right: 10px;
  justify-content: space-around;
  margin-top: 30px;
  height: 340px;
}
</style>