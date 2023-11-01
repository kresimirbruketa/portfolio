import React from "react";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";

import Header from "./Header"
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";


function App (){
    return(
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/education" element={<Education />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            
        </Router>
            )
}


export default App;

