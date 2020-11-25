import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Portfolio from './components/Portfolio';
import ResumeSkills from './components/Resume';

function App() {
  return (

      <Router>
      <Switch>
      <div> 
      <Navbar />
      <Route exact path="/" component={Home}/>
      <Route exact path="/Home" component={Home}/>
      <Route exact path="/AboutMe" component={AboutMe}/>
      <Route exact path="/ContactMe" component={ContactMe}/>
      <Route exact path="/Portfolio" component={Portfolio}/>
      <Route exact path="/ResumeSkills" component={ResumeSkills}/>
      </div> 
      </Switch>
      </Router>  
           
  );
};

export default App;

//THE FOLLOWING CODE IS FOR EMAIL CODE: <a href="mailto:vick.manjarrez@gmail.com" class="btn"><button id="emailbtnhome">Email Me</button></a>
