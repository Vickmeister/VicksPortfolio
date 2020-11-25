import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Navbar() {

    return (

    <div class="navbar">

    {/* <Nav className="justify-content-center"> */}

         <Nav.Item class="navhome">
           <Link to="/Home">Home</Link>
         </Nav.Item>
        
         <Nav.Item>
           <Link to="/AboutMe">AboutMe</Link>
         </Nav.Item>

         <Nav.Item>
           <Link to="/Portfolio">Portfolio</Link>
         </Nav.Item>

         <Nav.Item>
           <Link to="/Resume">Resume</Link>
         </Nav.Item>

         <Nav.Item>
           <Link to="/ContactMe">Contact</Link>
         </Nav.Item>

    {/* </Nav> */}

    </div>

    );
};

export default Navbar;




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