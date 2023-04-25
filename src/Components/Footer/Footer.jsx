import React from "react";
import { useNavigate } from "react-router-dom";


// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

// STYLES AND AESSETS
import './Footer.css';

function Footer(){
    return(
        <Container fluid className="containerFooter">
      <Col>
        <p>
          All rights reserved © 2023 Share Security. The content of this website
          is protected by copyright and other intellectual property laws.
        </p>
      </Col>
      <Col>
        <p>sharesecurity@sharesecurity.com</p>
      </Col>
    </Container>
    )
}

export default Footer;