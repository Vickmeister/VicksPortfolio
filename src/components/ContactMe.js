import React from "react";
import { Container }from "react-bootstrap";
// import { Link, Route } from "react-router-dom";
// import { render } from 'react-dom';

function ContactMe() {
    return (

    <Container className="contact-container">
        <div className="contactpage">
            <h1>Let's Talk!</h1>
            <p>Hit the button below to send any questions or comments you may have. I'll reply as soon as I can!</p>
        </div>
        <div className="emailbtn">
            <a href="mailto:vick.manjarrez@gmail.com" class="btn"><button color="primary" size="xl">
              Send Email   
            </button></a>
        </div>
    </Container>
    )
}

export default ContactMe;