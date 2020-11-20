import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import ResumeSkills from './components/Resume';
import Portfolio from './components/Portfolio';
// import './App.css';

function App() {
  return (

      <Router>
      <Switch>
      <div> 
      <Navbar />
      <Route exact path="/AboutMe" component={AboutMe}/>;
      <Route exact path="/ContactMe" component={ContactMe}/>;
      <Route exact path="/Portfolio" component={Portfolio}/>;
      <Route exact path="/ResumeSkills" component={ResumeSkills}/>;
      </div> 
      </Switch>
      </Router>  
           
  );
};

export default App;

//THE FOLLOWING CODE IS FOR EMAIL CODE: <a href="mailto:vick.manjarrez@gmail.com" class="btn"><button id="emailbtnhome">Email Me</button></a>
