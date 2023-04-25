import React from "react";
import { useNavigate } from "react-router-dom";


// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

// STYLES AND AESSETS
import './Header.css';

function Header(){
    return(
        <div>
            <h1>Soy Header</h1>
        </div>
    )
}

export default Header;