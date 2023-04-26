import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../../Assets/projects.json";
import "./Projects.css";

const Projects = () => {
  const [project, setProject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const selectedProject = projectsData.find(
      (project) => project.id === parseInt(id)
    );
    setProject(selectedProject);
  }, [id]);

  return (
    <div className="projectsDesign">
      <h1 className="tittleProject">{project.name}</h1>
      {project.description &&
        project.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      <img
        className="imageProject"
        src={project.path_image}
        alt={project.name}
      />
      <img
        className="imageProject"
        src={process.env.PUBLIC_URL + project.image1}
        alt="Project"
      />
      <img
        className="imageProject"
        src={process.env.PUBLIC_URL + project.image2}
        alt="Project"
      />
      <img
        className="imageProject"
        src={process.env.PUBLIC_URL + project.image3}
        alt="Project"
      />
      <img
        className="imageProject"
        src={process.env.PUBLIC_URL + project.image4}
        alt="Project"
      />
      <img
        className="imageProject"
        src={process.env.PUBLIC_URL + project.image5}
        alt="Project"
      />
      <img
        className="imageProject"
        src={process.env.PUBLIC_URL + project.image6}
        alt="Project"
      />
    </div>
  );
};

export default Projects;
