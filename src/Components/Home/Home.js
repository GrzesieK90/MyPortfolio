import React from "react";
import "./HomeStyle.css"
import hLogoL from "../../Assets/hLogoL.png"
import hLogoD from "../../Assets/hLogoD.png"
import Writer from "./Writer"
import "@fontsource/dancing-script";
import Home2 from "./Home2";

const Home = ({ isDark }) => {
  return (
    <div id="Con">
      <div className="div1">
        <div className="text-content">
          <h1 className="text" id="h1">Welcome to my <span id="mint">Portfolio!</span></h1>
          <h2 className="text">
            I'm <span id="mint">Gregor Kuzera</span>
          </h2>
          <h3 className="text" id="mint"><Writer /></h3>
        </div>
        <div className="image-content">
          <img className="hLogo" src={isDark ? hLogoD : hLogoL} alt="Programming illustration" />
        </div>
      </div>
      <div id="Di"><Home2 /></div>
    </div>
  )
}

export default Home