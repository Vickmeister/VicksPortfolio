import React from "react";
import { Container, Row } from "react-bootstrap";

function Portfolio() {
    return (
        <Container className="portfolio-container">
        
        <Row>
            <h1>Welcome To My Portfolio</h1>
        </Row>

        <Row>
            <p>Showcased below are some of the projects that I've worked over the last couple couple of months.</p>
        </Row>

        <div className="project1" class="col-md-4 col-sm-4">    
        <h3>Project 1</h3>
        {/* <img className="project1pic" src={project1pic} alt="project1"></img> */}
        <p>Description of project here</p>
        <p>Languages/frameworks used</p>
        <p>Repo link</p>
        </div>

        <div className="project2" class="col-md-4 col-sm-4">
        <h3>Project 2</h3>
        {/* <img className="project2pic" src={project2pic} alt="project2"></img> */}
        <p>Description of project here</p>
        <p>Languages/frameworks used</p>
        <p>Repo link</p>
        </div>

        <div className="project3" class="col-md-4 col-sm-4">
        <h3>Project 1</h3>
        {/* <img className="project3pic" src={project3pic} alt="project3"></img> */}
        <p>Description of project here</p>
        <p>Languages/frameworks used</p>
        <p>Repo link</p>
        </div>

        <div className="project4" class="col-md-4 col-sm-4">
        <h3>Project 1</h3>
        {/* <img className="project4pic" src={project4pic} alt="project4"></img> */}
        <p>Description of project here</p>
        <p>Languages/frameworks used</p>
        <p>Repo link</p>
        </div>

        <div className="project5" class="col-md-4 col-sm-4">
        <h3>Project 1</h3>
        {/* <img className="project1pic" src={project5pic} alt="project5"></img> */}
        <p>Description of project here</p>
        <p>Languages/frameworks used</p>
        <p>Repo link</p>
        </div>

        <div className="project6" class="col-md-4 col-sm-4">
        <h3>Project 1</h3>
        {/* <img className="project6pic" src={project6pic} alt="project6"></img> */}
        <p>Description of project here</p>
        <p>Languages/frameworks used</p>
        <p>Repo link</p>
        </div>

        <div className="project7" class="col-md-4 col-sm-4">
        <h3>Project 1</h3>
        {/* <img className="project7pic" src={project7pic} alt="project7"></img> */}
        <p>Description of project here</p>
        <p>Languages/frameworks used</p>
        <p>Repo link</p>
        </div>

        <div className="project8" class="col-md-4 col-sm-4">
        <h3>Project 1</h3>
        {/* <img className="project8pic" src={project8pic} alt="project8"></img> */}
        <p>Description of project here</p>
        <p>Languages/frameworks used</p>
        <p>Repo link</p>
        </div>

        <div className="project9" class="col-md-4 col-sm-4">
        <h3>Project 1</h3>
        {/* <img className="project9pic" src={project9pic} alt="project9"></img> */}
        <p>Description of project here</p>
        <p>Languages/frameworks used</p>
        <p>Repo link</p>
        </div>

        </Container>
    );
};

export default Portfolio;
