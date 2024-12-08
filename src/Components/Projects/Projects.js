import React from "react";
import Pokedex from "../../Assets/pokedexApp.png";
import KittyF from "../../Assets/KittyF.png";
import WeatherApp from "../../Assets/WeatherApp.png"
import iShoppy from "../../Assets/iShoppy.png"
import Clotify from "../../Assets/Clotify.png"
import TaskFlow from "../../Assets/TaskFlow.png"
import CryptoChecker from "../../Assets/CryptoChecker.png"
import Face from "../../Assets/Face.png"
import "./Projects.css"

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: KittyF,
      title: "Kitten Friends",
      description: "A dynamic Cat Cards application that allows users to explore a collection of cat profiles. Each card displays key details about a cat, such as its name and image. The application features a search functionality.",
      link: "https://grzesiek90.github.io/kittenfriends/",
      technologies: ["React", "JavaScript", "CSS"]
    },
    {
      id: 2,
      image: Pokedex,
      title: "Pokedex App",
      description: "An interactive Pokédex application that provides detailed information about Pokémon. The app features a user-friendly search bar, allowing users to quickly find their favorite Pokémon by name or ID. It utilizes the Pokémon API to fetch data in real-time.",
      link: "https://grzesiek90.github.io/pokedex/",
      technologies: ["React", "JavaScript", "API"]
    },
    {
      id: 3,
      image: Face,
      title: "Face Recognition",
      description: "SmartBrain is an advanced face recognition application. The app allows users to upload images, which are then analyzed to detect and highlight faces. This process is powered by the Clarifai API, ensuring high accuracy and reliability.",
      link: "https://grzesiek90.github.io/smartbrainfacerecognition/",
      technologies: ["React", "JavaScript", "API"]
    },
    {
      id: 4,
      image: WeatherApp,
      title: "Weather App",
      description: "A dynamic real-time weather application that provides up-to-date weather forecasts and conditions for any location worldwide. It displays essential weather details such as temperature, humidity, wind speed, and atmospheric pressure, as well as short-term and long-term forecasts.",
      link: "https://grzesiek90.github.io/WeatherApp/",
      technologies: ["React", "JavaScript", "API"]
    },
    {
      id: 5,
      image: iShoppy,
      title: "iShoppy",
      description: "A fully functional e-commerce application built entirely on the frontend, eliminating the need for a traditional backend server. The app provides users with a smooth and responsive shopping experience, allowing them to browse products, view detailed descriptions, check prices, and add items to their cart.",
      link: "https://grzesiek90.github.io/iShoppy_Frontend/",
      technologies: ["React", "JavaScript", "CSS"]
    },
    {
      id: 6,
      image: Clotify,
      title: "Clotify",
      description: "A sleek and interactive music streaming application interface built entirely on the frontend. This app allows users to explore, play, and control their favorite music tracks with ease. The user-friendly design includes essential features like a playlist view, media player controls (play, pause, next, previous), and real-time song progress tracking.",
      link: "https://grzesiek90.github.io/Clotify/",
      technologies: ["React", "JavaScript", "CSS"]
    },
    {
      id: 7,
      image: CryptoChecker,
      title: "Crypto Checker",
      description: "A modern cryptocurrency tracking application developed using the Angular framework. This powerful app allows users to monitor real-time prices, market trends, and key statistics of various cryptocurrencies. With a sleek, responsive design, users can easily track popular coins like Bitcoin, Ethereum, and many others.",
      link: "https://grzesiek90.github.io/CryptoChecker/",
      technologies: ["Angular", "JavaScript", "API"]
    },
    {
      id: 8,
      image: TaskFlow,
      title: "Task Flow",
      description: "A powerful and intuitive task management application developed using the Vue.js framework. This app allows users to efficiently organize, track, and prioritize their daily tasks and projects. With a clean, modern interface, users can easily create, edit, and delete tasks, as well as mark them as complete.",
      link: "https://grzesiek90.github.io/TaskFlow/",
      technologies: ["Vue.js", "JavaScript", "CSS"]
    }
  ];

  return(
    <section className="container-projects">
      <div className='projects'>
      <br />
        <h1 id="projects-title">Check out some of my <span className="highlight">Projects!</span></h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects