import React from "react";
import './ImageList.css';
import jsonData from "../../../Assets/projects.json";
import { useNavigate } from "react-router-dom";

function ImageList() {
  const navigate = useNavigate();

  const handleImageClick = (url) => {
    window.open(url, "_blank");
  }

  return (
    <div className="image-list-container">
      {jsonData.map((item, index) => (
        <div key={index} className="image-container" onClick={() => handleImageClick(item.github)}>
          <img src={item.path_image} alt={item.name} />
          <p className="nameProject">{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default ImageList;
