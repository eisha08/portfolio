import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Experience/>
    </div>
  );
}

export default App;
