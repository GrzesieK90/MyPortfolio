import React from "react";
import photo from "../../Assets/photo.jpg"

const Home2 = () => {
  return(
    <div>
      <h1 className="text2">
        LET ME <span id="mint">INTRODUCE</span> MYSELF:
      </h1>
      <div className="text-photo-container">
        <p className="text3">
          I have always been dedicated to personal growth throughout my life, 
          which is why I made the decision to learn programming, 
          and I have fallen in love with it.
          <br />
          <br />I have an advanced level of proficiency in classical programming languages such as 
          <i>
            <b id="mint"> HTML, CSS, and JavaScript. </b>
          </i>
          <br />
          <br />
          <i>
          I also apply my passion for developing websites using 
            <b id="mint"> Node.js </b>, as well as 
            <b id="mint"> Modern JavaScript Libraries </b> and 
            <b id="mint"> Frameworks </b> such as 
            <b id="mint"> React.js </b> and 
            <b id="mint"> Next.js. </b>
          </i>
          <br/>
          <br/>
          My area of interest focuses on &nbsp;
          <i>
            <b id="mint">Designing New Websites</b> and 
            <b id="mint"> Online Stores </b> 
            and also improving the functionality of existing
            <b id="mint">Websites</b> and 
            <b id="mint"> Implementing Modern Solutions </b> to them.
          </i>
          <br />
          <br />
          <i>
          In my free time, I expand my skill set by delving into 
            <b id="mint"> Game Design </b> on the 
            <b id="mint"> Unreal Engine 5 </b> and learning the 
            <b id="mint"> C++ </b> programming language.
          </i>
        </p>
        <img src={photo} alt="Profile" id="photo"/>
      </div>
    </div>
  )
}

export default Home2