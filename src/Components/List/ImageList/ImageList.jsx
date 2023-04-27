import React from "react";
import './ImageList.css';
import jsonData from "../../../Assets/projects.json";
import { Link } from "react-router-dom";

function ImageList() {
  
  return (
    <div className="image-list-container">
      {jsonData.map((item, index) => (
        <Link key={index} className="image-container" to={`/projects/${index}`}>
          <img src={item.path_image} alt={item.name} />
          <p className="nameProject">{item.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default ImageList;

