import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Web Developer",
          "Frontend Web Developer",
          "Backend Web Developer",
          "Freelancer"
        ],
        autoStart: true,
        loop: true,
        delay: 50,
        deleteSpeed: 25,
      }}
    />
  );
}

export default Type;