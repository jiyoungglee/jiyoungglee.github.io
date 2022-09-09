import ProjectItem from "./ProjectItem";
import "../Styles/ProjectList.css";
import { useState } from "react";
import { projects } from "../store/Projects";

function ProjectList({ setPlayerOpen }) {
  const [descOpen, setDescOpen] = useState(null);

  function getProjects() {
    return projects.map(({ link, name, description, demo, preview }, index) => {
      return (
        <ProjectItem 
          key={index} 
          index={index} 
          link={link} 
          name={name} 
          description={description}
          demo={demo}
          preview={preview}
          descOpen={descOpen}
          setDescOpen={setDescOpen} 
          setPlayerOpen={setPlayerOpen} />
      )
    })
  }

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {getProjects()}
      </div>
    </div>
  )
};

export default ProjectList;
