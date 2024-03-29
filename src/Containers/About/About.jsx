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
    <Container fluid className="aboutDesign">
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
          <h1>About Me:</h1>
          <p>
            {" "}
            Me llamo <b>Alejandro López</b>y soy{" "}
            <b>Diseñador gráfico + Full Stack Developer. </b>Mi formación como
            Full Stack Developer culminó con la titulación obtenida tras
            completar el Full Stack Developer en{" "}
            <b>GEEKHUBS ACADEMY (Valencia)</b>, reconocida academia en el ámbito
            tecnológico. Mi objetivo actual es la especialización en el{" "}
            <b> desarrolloFRONTEND</b> de webs y aplicaciones.
          </p>
          <p>
            mi trayectoria en diseño y tecnología me ha proporcionado una{" "}
            <b>perspectiva 360º</b> sobre las necesidades de proyectos y
            clientes al enfrentar cualquier desafío. Soy una persona proactiva,
            independiente y con facilidad para trabajar en equipo,
            características que valoro y aplico en mi día a día profesional..
          </p>
        </div>
      </Col>
      <Col className="col2Design">
        <h1>Work Experience</h1>
        <div className="infoContainer">
          <h2 className="yearsText">2023 - NOW </h2>
          <div className="paragraphs">
            <p>
              SOFTWARE DEVELOPER en FORLOPD - Seguridad y Privacidad de Datos
              S.L.
            </p>
          </div>
        </div>
        <div className="infoContainer">
          <h2 className="yearsText">2017 - 2022</h2>
          <div className="paragraphs">
            <p>
              PROJECT MANAGER De la empresa REFORMIA, distribuidora de
              materiales cerámicos para proyectos de arquitectura e
              interiorismo.
            </p>
            <p>
              DISEÑADOR DE INTERIORES + DISEÑADOR GRÁFICO Y POSTPRODUCCIÓN
              DIGITAL COMO FREELANCE (ALO-CREATIVO) y en colaboración con
              múltiples empresas de caracter interdisciplinar.
            </p>
          </div>
        </div>
      </Col>

      {/* EDUCATION */}

      <Col className="col3Design">
        <div className="infoEducation">
          <h1>Education</h1>
          <div className="infoContainerEducation">
            <h2 className="yearsText">2022-2023</h2>
            <div className="paragraphs">
              <p>
                BOOTCAMP DE PROGRAMADOR FULLSTACK DEVELOPER EN ACADEMIA
                GEEKSHUBS - VALENCIA (Septiembre 2022 - Enero 2023).
              </p>
            </div>
          </div>
          <div className="infoContainerEducation">
            <h2 className="yearsText">2012-2016</h2>
            <div className="paragraphs">
              <p>
                GRADO DISEÑO DE INTERIORES EASD CASTELLÓN (Escola d’Art i
                Superior de Disseny de Castelló).
              </p>
            </div>
          </div>
          <div className="infoContainerEducation">
            <h2 className="yearsText">2009-2011</h2>
            <div className="paragraphs">
              <p>
                CFGS PROYECTOS Y DIRECCIÓN DE OBRAS DE DECORACIÓN (Ciclo
                Formativo de Grado Superior) EASD CASTELLÓN (Escola d’Art i
                Superior de Disseny de Castelló).
              </p>
            </div>
          </div>
          <div className="infoContainerEducation">
            <h2 className="yearsText">Previously</h2>
            <div className="paragraphs">
              <p>EDUCACIÓN OBLIGATORIA + BACHILLERATO EN HUMANIDADES.</p>
            </div>
          </div>
        </div>
      </Col>
    </Container>
  );
}

export default About;
