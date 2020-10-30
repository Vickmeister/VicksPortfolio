import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

export const Header = () => {
    return (

        <Container>

        <div class="navbar">
    			<li><Link to="/AboutMe">About Me</Link></li>
    			<li><Link to="/ResumeSkills">Resume + Skills </Link></li>
    			<li><Link to="/Portfolio">Portfolio </Link></li>
    			<li><Link to="/ContactMe">Contact Me</Link></li>
    	</div>

        
        <Row>
            <div class="banner-content wow fadeInRight">
                <h2 class="title"> 
                        Welcome To My Portfolio!
            <br/>
                        <span>
                    I'm Vick 
            <br/> 
                    Thank You For Visiting</span>
                </h2>

            </div>
        </Row>
        </Container>
    );
};

export default Header;




// import React, { Component } from 'react'; //always on top of every file
// import { Container, ButtonGroup, Col, Row, Button } from 'reactstrap';
// import { Link } from 'react-router-dom'
// import './Home.css';

// class Header extends Component {
//     render() {
//         return (

               
//         <div>
            // <Container>
            //     <header anchorX="85%" anchorY="20%">
            //         <h1>Welcome to Vick's Portfolio</h1>
            //     </header>

            //     <Row>
            //             <nav>
            //             <ButtonGroup>
            //                 <Col md = {3}><Button color = "danger">Home</Button></Col>
            //                 <Col md = {3}><Button color = "danger">About Me</Button></Col>
            //                 <Col md = {3}><Button color = "danger">Projects</Button></Col>
            //                 <Col md = {3}><Button color = "danger">Contact</Button></Col>
            //             </ButtonGroup>
            //             </nav>
            //     </Row>
            // </Container>
                   
//         </div>        
//         );
//     };
// };

// export default Header;