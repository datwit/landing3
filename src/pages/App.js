import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import About from './About'
import StudyCases from './StudyCases'
import Contact from './Contact'
import Blog from './Blog'
import Home from './Home'
import Team from './Team'
import Partner from './Partner'




function App() {
  return (
    <Router> 
                          
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About} />
        <Route exact path="/studyCases" component={StudyCases} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/partner" component={Partner} />
          
    </Router>
  );
}

export default App;




