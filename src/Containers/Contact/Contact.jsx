import React from "react";
// import { useNavigate } from "react-router-dom";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

// STYLES AND AESSETS
import "./Contact.css";
import logoGithub from "../../Assets/github-logo.png";
import logoLinkedin from "../../Assets/linkedin-logo.png";
import logoMail from "../../Assets/mail-logo.png";
import logoPhone from "../../Assets/phone-logo.png";
import Button from "../../Components/Button/Button";

function Contact() {
  return (
    <Container fluid className="contactDesign">
      <Col className="col1Contact">
        <h1>Contact with me:</h1>
      </Col>
      <Col className="col2Contact">
        <a href="https://github.com/alopezbelles">
          <Image className="logoDesign" src={logoGithub}></Image>
        </a>
        <a href="https://www.linkedin.com/in/alopezbelles/">
          <Image className="logoDesign" src={logoLinkedin}></Image>
        </a>
        <a href="mailto:alopezbelles@gmail.com">
          <Image className="logoDesign" src={logoMail}></Image>
        </a>
        {/* <a href="tel:+34662583482">
          <Image className="logoDesign" src={logoPhone}></Image>
        </a> */}
      </Col>
      <Col className="col3DesignContact">
        <p className="dataContact">alopezbelles@gmail.com</p>
        {/* <p className="dataContact">+34 662 583 482</p> */}
      </Col>
      <Col className="col4Design">
        <h2>MY PORTFOLIO:</h2>
        <a href="https://drive.google.com/file/d/123kNstp4182gKEPwn4s3qUTtuotBedHN/view?usp=sharing">
          <Button text="Download"></Button>
        </a>
      </Col>
    </Container>
  );
}

export default Contact;
