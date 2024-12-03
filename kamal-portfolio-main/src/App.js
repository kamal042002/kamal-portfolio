
import './App.css';

import Hero from "./comp/Hero";
import About from "./comp/About";
import Skills from "./comp/Skills";
import Project from "./comp/Project";
// import Hireme from "./comp/Hireme";
import Contact from "./comp/Contact";
import Foot from "./comp/Foot";
import Navbar from "./comp/Navbar";
// import Bot from "./comp/Bot";





const App=() =>{

  
  return (
    <div className='bg-gray-900'>
    <Navbar/>
    {/* <Bot /> */}
    <Hero />

    <About/>
    <Skills/>
    {/* <Hireme/> */}
    <Project/>
    <Contact/>
    <Foot/>
  </div>
  );
};

export default App;


