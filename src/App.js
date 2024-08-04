import './App.css';
import Navbar from "./components/Navbar";
import React, { useState } from 'react';
import Home from "./components/Home";
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
  return (
    <div className={`App ${theme}`}>
    <Navbar theme={theme} toggleTheme={toggleTheme} />
    <Home theme={theme} toggleTheme={toggleTheme}/>
    <About theme={theme} toggleTheme={toggleTheme}/>
    <Skills theme={theme} toggleTheme={toggleTheme}/>
    <Experience theme={theme} toggleTheme={toggleTheme}/>
    <Projects theme={theme} toggleTheme={toggleTheme}/>
    <Contact theme={theme} toggleTheme={toggleTheme}/>
    <Footer theme={theme} toggleTheme={toggleTheme}/>
    </div>
  );
}

export default App;
