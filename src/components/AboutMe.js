import React from 'react';
import Navbar from "../components/Navbar";
import VickBJJ from "../assets/VickBJJ.jpg"
import "../style.css"
import { Container } from 'react-bootstrap';

function AboutMe() {
    return (
     
        // <section id="section-profile" class="section-padding"></section>
            // <div class="profile-bg visible-md visible-lg" img className="Vick" src={VickBJJ} alt="Vick in BJJ training"></div>
	    <Container>

                <div class="profile-bg visible-md visible-lg"> <img className="Vick" src={VickBJJ} alt="Vick in BJJ training"/></div>
		        <div className="row">

			        <div class="col-md-7 col-sm-12 pull-right">

				        <div class="profile-desc wow fadeInRight">

					        <h1 class="title">My Journey</h1>

                            <p class="biotext">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                            enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                            </p>
    
                            <p class="biotext">
                            Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                            exerci tation ullamcorper suscipit lobortis.
                            </p>

                            <br/>
                                        
                            <p class="biotext">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                            </p>
                        
                        </div>
                          
                    </div>
                </div>
        </Container>
    );
};

export default AboutMe;