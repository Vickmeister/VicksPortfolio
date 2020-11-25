import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import homestyle from "../Home/homestyle.css";

function Home() {

    return ( 

        <Container>

        <img src="GrandCanyon.jpg" class="img-fluid" max-width="100%" height="auto" alt="Vick in grand canyon">

        {/* <Row> */}
        {/* <Col md={{ span: 6, offset: 3 }}> */}

        {/* <div class="banner-content wow fadeInRight"> */}

        <div class="homeBackground">

               <h2 class="title"> 
                  Welcome To My Portfolio!
                 <br/>
               <span>
                   I'm Vick 
                  <br/>
                    Thank You For Visiting
                </span>
                </h2>
             {/* </div> */}
        </div>
        
        {/* </Col> */}

           {/* <div class="banner-content wow fadeInRight">
               <h2 class="title"> 
                  Welcome To My Portfolio!
                 <br/>
               <span>
                   I'm Vick 
                  <br/> 
                    Thank You For Visiting</span>
                </h2>
             </div> */}

              
         {/* </Row> */}

         </img>
         </Container>

         
    );
};

export default Home;