import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from './components/AboutMe/AboutMe';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Connect from './components/Connect/Connect';


function App() {
  return (
    <div className="App">
        <Home />
        <AboutMe />
        <Projects />
        <Connect />
    </div>
  );
}

export default App;
