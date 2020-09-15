import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Routes from "./Routes";
//import Navigation from './Components/Navigation';
import PageWrapper from './Components/PageWrapper';

import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Calculator from './Components/Calculator/Calculator';
import Projects from './Components/Pages/Projects';
import Contact from './Components/Pages/Contact';
import Skills from './Components/Pages/Skills';



function App() {
  return (

    <div>
      <Router>
        <PageWrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects/calculator" component={Calculator} />
        </PageWrapper>
      </Router>
    </div>
  );
}

export default App;
