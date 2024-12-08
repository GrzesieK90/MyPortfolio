import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import './App.css';
import Technologies from './Components/Technologies/Technologies';
import Projects from './Components/Projects/Projects';
import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import './styles/themes.css';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.body.className = savedTheme === 'dark' ? '' : 'light-theme';
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.className = isDark ? 'light-theme' : '';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  return (
    <div className="App">
      <HashRouter>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <main className="main-content">
          <Routes>
            <Route path='/' element={<Home isDark={isDark} />} />
            <Route path='/tech' element={<Technologies />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
