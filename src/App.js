import React from 'react';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { ContactMe } from './components/ContactMe';
import { ResumeSkills } from './components/ResumeSkills';
import { Portfolio } from './components/Portfolio';
import { BrowserRouter as Router, Route } from "react-router-dom"
// import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={AboutMe} exact />;
      <Route path="/" component={ContactMe} exact />;
      <Route path="/" component={Portfolio} exact />;
      <Route path="/" component={ResumeSkills} exact/>;                     
    </Router>
  );
};

export default App;

//THE FOLLOWING CODE IS FOR EMAIL CODE: <a href="mailto:vick.manjarrez@gmail.com" class="btn"><button id="emailbtnhome">Email Me</button></a>
