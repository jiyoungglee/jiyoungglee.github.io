import ProjectItem from "./ProjectItem";
import "../Styles/ProjectList.css";
import { useState } from "react";
import { projects } from "../store/Projects";

function ProjectList() {
  const [descOpen, setDescOpen] = useState(null);

  function getProjects() {
    return projects.map(({ link, name, description, demo }, index) => {
      return (
        <ProjectItem 
          key={index} 
          index={index} 
          link={link} 
          name={name} 
          description={description}
          demo={demo}
          descOpen={descOpen}
          setDescOpen={setDescOpen} />
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
