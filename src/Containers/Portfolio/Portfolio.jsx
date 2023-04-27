import React from "react";
import { useNavigate } from "react-router-dom";


// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

// STYLES AND AESSETS
import './Portfolio.css';
import logo from '../../Assets/ALO.png'
import ImageList from "../../Components/List/ImageList/ImageList";

function Portfolio(){
    return(
        <Container fluid className="portfolioDesign">
            <Col className="col1Portfolio">
            {/* <Image src={logo} className="logoHome" alt="logo"></Image> */}
            <h2>SEE ALL MY WORK:</h2>

            </Col>

            <Col className="col2Portfolio">
            <ImageList></ImageList>
            
            </Col>



        </Container>
    )
}

export default Portfolio;