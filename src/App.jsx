import React from "react"
import Sidebar from "./component/Sidebar"
import Mainn from "./component/Mainn"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
function App() {
  

  return (
  <Router>
    
     
     
     <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
        <Route path="/services" component={Services} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Routes>
      <div className="flex">
      <Sidebar />
      <Mainn/>
      </div>
      </Router>
     
     
     
  )
}

export default App
