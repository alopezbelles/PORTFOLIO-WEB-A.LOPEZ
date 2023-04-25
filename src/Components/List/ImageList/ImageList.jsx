import React from "react";
import  './ImageList.css';
import jsonData from "../../../Assets/projects.json";

function ImageList() {
    
    return (
        <div className="image-list-container">
          {jsonData.map((item, index) => (
            <div key={index} className="image-container">
              <img src={item.path_image} alt={item.name} />
              <p className="nameProject">{item.name}</p>
            </div>
          ))}
        </div>
      );
}

export default ImageList;
