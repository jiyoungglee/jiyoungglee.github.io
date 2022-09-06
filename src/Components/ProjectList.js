import ProjectItem from "./ProjectItem";
import "../Styles/ProjectList.css";
import { useState } from "react";

function ProjectList({ setPlayerOpen }) {
  const projects = [
    {
      link: '/mall-trip', 
      name: 'Mall Trip', 
      description: 'Mall Trip Description'
    },
    {      
      link: 'https://jiyoungglee.github.io/social-feed/', 
      name: 'Social Feed', 
      description: 'Social Feed Description'
    },
  ]

  const [descOpen, setDescOpen] = useState(null);

  function getProjects(projects) {
    return projects.map(({ link, name, description }, index) => {
      return (
        <ProjectItem 
          key={index} 
          index={index+1} 
          link={link} 
          name={name} 
          description={description}
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
        {getProjects(projects)}
      </div>
    </div>
  )
};

export default ProjectList;
