import React from "react";
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiNodejs, DiGithub, DiBootstrap, DiNpm,
   DiMysql, DiPostgresql, DiTerminal, DiSass, DiVisualstudio, DiWindows, DiSublime, DiChrome, DiAngularSimple } from "react-icons/di"
import "./Technologies.css"
import Skillbars from "./Skillbars";

const Technologies = () => {
  const technologies = [
    { icon: DiHtml5, name: "HTML5", wiki: "https://en.wikipedia.org/wiki/HTML5" },
    { icon: DiCss3, name: "CSS3", wiki: "https://en.wikipedia.org/wiki/CSS" },
    { icon: DiJavascript, name: "JavaScript", wiki: "https://en.wikipedia.org/wiki/JavaScript" },
    { icon: DiNodejs, name: "Node.js", wiki: "https://en.wikipedia.org/wiki/Node.js" },
    { icon: DiReact, name: "React JS", wiki: "https://en.wikipedia.org/wiki/React_(JavaScript_library)" },
    { icon: DiAngularSimple, name: "Angular", wiki: "https://en.wikipedia.org/wiki/Angular_(web_framework)" },
    { icon: DiGithub, name: "GitHub", wiki: "https://en.wikipedia.org/wiki/GitHub" },
    { icon: DiBootstrap, name: "Bootstrap", wiki: "https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)" },
    { icon: DiNpm, name: "NPM", wiki: "https://en.wikipedia.org/wiki/Npm_(software)" },
    { icon: DiMysql, name: "MySQL", wiki: "https://en.wikipedia.org/wiki/MySQL" },
    { icon: DiPostgresql, name: "PostgreSQL", wiki: "https://en.wikipedia.org/wiki/PostgreSQL" },
    { icon: DiTerminal, name: "Terminal", wiki: "https://en.wikipedia.org/wiki/Terminal_emulator" },
    { icon: DiSass, name: "Sass", wiki: "https://en.wikipedia.org/wiki/Sass_(stylesheet_language)" },
  ];

  const tools = [
    { icon: DiWindows, name: "Windows", wiki: "https://en.wikipedia.org/wiki/Microsoft_Windows" },
    { icon: DiVisualstudio, name: "VS Code", wiki: "https://en.wikipedia.org/wiki/Visual_Studio_Code" },
    { icon: DiSublime, name: "Sublime", wiki: "https://en.wikipedia.org/wiki/Sublime_Text" },
    { icon: DiChrome, name: "Chrome", wiki: "https://en.wikipedia.org/wiki/Google_Chrome" },
    
  ];

  return(
    <div>
      <br />
      <br />
      <h1 className="ttext">My professional &nbsp;<b id="mint"> SkillSet:</b></h1>
      <br />
      <br />
      <div className="general">
        {technologies.map((tech, index) => (
          <a 
            key={index} 
            href={tech.wiki} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="card-link"
          >
            <div className="card">
              <tech.icon />
              <p className="tt">{tech.name}</p>
            </div>
          </a>
        ))}
      </div>
      <h1 className="ttext" id="tools"><b id="mint">Tools </b>&nbsp; I use:</h1>
      <div className="general">
        {tools.map((tool, index) => (
          <a 
            key={index} 
            href={tool.wiki} 
            target="_blank" 
            rel="noopener noreferrer"
            className="card-link"
          >
            <div className="card">
              <tool.icon />
              <p className="tt">{tool.name}</p>
            </div>
          </a>
        ))}
      </div>
      <h1 className="ttext" id="tools">My &nbsp;<b id="mint"> SkillBar:</b></h1>
      <div className="general2"><Skillbars /></div>
    </div>
  )
}

export default Technologies