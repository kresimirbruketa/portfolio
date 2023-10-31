import React from "react";

import Header from "./Header"
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";


function App (){
    return(
        <div>
        <Header />        
        <Home />
        <About/>
        <Education />
        <Skills />
        <Projects/>
        <Contact />
        </div>
            )
}


export default App;