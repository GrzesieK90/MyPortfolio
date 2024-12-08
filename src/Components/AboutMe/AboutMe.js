import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h1 className="about-title">About <span className="highlight">Me:</span></h1>
        <br />
        <div className="about-grid">
          <div className="about-text-container">
            <div className="about-text">
            <h1>Hello!</h1> 
            <br/>
              <p className="description">
                I’m <span className="highlight">Gregory</span> – a passionate and driven programmer with a strong interest in <span className="highlight">web development, AI, and deep learning.</span> <br /> 
                My journey into coding began with a desire to create, innovate, and solve real-world problems through technology. <br />
                I specialize in building interactive, user-friendly applications using modern frameworks like <span className="highlight">React, Vue.js,</span> and <span className="highlight">Angular.</span> <br /> <br />
                My experience spans from developing <span className="highlight">e-commerce platforms</span> and <span className="highlight">task management</span> tools to crafting <span className="highlight">AI-powered</span> applications, like <span className="highlight">face recognition systems</span> and <span className="highlight">cryptocurrency trackers.</span> <br />
                What sets me apart is my commitment to continuous <span className="highlight">learning</span>. <br /> 
                I’m always exploring the latest <span className="highlight">industry</span> trends and enhancing my <span className="highlight">skills</span> to stay ahead in the <span className="highlight">fast-evolving</span> tech landscape. <br />
                I have a growing passion for <span className="highlight">deep learning</span> and <span className="highlight">QA automation</span>, and I’m actively pursuing opportunities to apply these skills in real-world <span className="highlight">projects.</span> <br /> <br />
                When I’m not <span className="highlight">coding</span>, I’m likely researching <span className="highlight">AI innovations</span> or refining my <span className="highlight">problem-solving</span> abilities. <br />
                I’m currently seeking a role where I can <span className="highlight">contribute, grow,</span> and <span className="highlight">make an impact</span> as a <span className="highlight">developer</span>. <br /> 
                If you’re looking for a <span className="highlight">creative thinker</span> with a <span className="highlight">passion</span> for <span className="highlight">technology</span>, I’d love to <span className="highlight">connect</span>.<br /> <br />
                Let’s <span className="highlight">build</span> something amazing <span className="highlight">together</span>!
              </p>
            </div>
          </div>

          <div className="about-highlights">
            <div className="highlight-box">
              <h3>Experience</h3>
              <div className="highlight-content">
                <span className="highlight-number">3+</span>
                <span className="highlight-text">Years of<br/>Coding</span>
              </div>
            </div>

            <div className="highlight-box">
              <h3>Education</h3>
              <div className="highlight-content">
                <span className="highlight-text">Self-Taught Developer <br /> with completed Udemy courses and certifications</span>
              </div>
            </div>

            <div className="highlight-box">
              <h3>Projects</h3>
              <div className="highlight-content">
                <span className="highlight-number">10+</span>
                <span className="highlight-text">Completed Personal<br/>Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
