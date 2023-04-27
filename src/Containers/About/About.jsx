import React from "react";
import { useNavigate } from "react-router-dom";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import alexPhoto from "../../Assets/alex-photo.png";

// STYLES AND AESSETS
import "./About.css";
// import bgVideo from '../../Assets/bg-color.mp4';



function About() {
  return (
    <Container className="aboutDesign" fluid>
      {/* <video autoPlay muted loop playsInline className="video-background">
        <source src={bgVideo} />
      </video> */}
      <Col className="col1Design">
        <Image
          className="profileImage"
          src={alexPhoto}
          alt="Descripción de la imagen"
        ></Image>
        <div className="description">
          <h1>Alejandro López</h1>
          <p>
            {" "}
            Me llamo <b>Alejandro López</b>y soy{" "}
            <b>Diseñador gráfico + Full Stack Developer. </b>En constante
            formación en ambos sectores, y titulado en el Bootcamp presencial de
            Full Stack Developer en <b>GEEKHUBS ACADEMY (Valencia)</b>. Mi
            objetivo actual es la especialización en el{" "}
            <b> desarrolloFRONTEND</b> de webs y aplicaciones.
          </p>
          <p>
            Diseñador de Interiores graduado en 2016, de forma orgánica fui
            ampliando mi formación hacia el{" "}
            <b>diseño gráfico y la producción y postproducción digital.</b> Me
            considero una persona creativa, dinámica y curiosa. Siempre en
            constante formación, dispuesto a aprender cosas nuevas y a compartir
            experiencias con la gente que me rodea.
          </p>
        </div>
      </Col>
      <Col className="col2Design">
        <h1>Work Experience & Education</h1>
      </Col>
    </Container>
  );
}

export default About;
