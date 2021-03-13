import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './About';
import StudyCases from './StudyCases';
import Contact from './Contact';
import Blog from './Blog';
import Home from './Home';
import Navbar from '../components/Navbar';


function App() {
  return (
    <Router> 
        <Navbar/>                   
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About} />
        <Route exact path="/studyCases" component={StudyCases} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
          
    </Router>
  );
}

export default App;




