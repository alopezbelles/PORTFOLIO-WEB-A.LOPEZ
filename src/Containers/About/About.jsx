import React from "react";
import { useNavigate } from "react-router-dom";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import alexPhoto from "../../Assets/alex-photo.png";

// STYLES AND AESSETS
import "./About.css";

function About() {
  return (
    <Container className="aboutDesign" fluid>
      <Col className="col1Design">
        <Image
          className="profileImage"
          src={alexPhoto}
          alt="Descripción de la imagen"
        ></Image>
        <div className="description">
        <h1>Alejandro López</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, architecto tenetur quas ipsa iusto expedita corrupti, aut earum alias dicta voluptas laboriosam doloribus quasi possimus eius nulla. Quo, dolores natus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, architecto tenetur quas ipsa iusto expedita corrupti, aut earum alias dicta voluptas laboriosam doloribus quasi possimus eius nulla. Quo, dolores natus.</p>


        </div>
      </Col>
      <Col className="col2Design">
        <h1>Work Experience & Education</h1>
      </Col>
    </Container>
  );
}

export default About;
