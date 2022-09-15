import ProjectItem from "./ProjectItem";
import "../Styles/ProjectList.css";
import { useContext } from "react";
import { projects } from "../store/Projects";
import { PlayerContext } from "../store/PlayerContext";

function ProjectList() {
  const { state } = useContext(PlayerContext);

  function getProjects() {
    return projects.map(({ link, name, description, demo }, index) => {
      return (
        <ProjectItem 
          key={index} 
          index={index} 
          link={link} 
          name={name} 
          description={description}
          demo={demo} />
      )
    })
  }

  return (
    <div className="projects">
      {!state.open && <h2>Projects</h2>}
      <div className="project-list">
        {getProjects()}
      </div>
    </div>
  )
};

export default ProjectList;
