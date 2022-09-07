import ProjectItem from "./ProjectItem";
import "../Styles/ProjectList.css";
import { useState } from "react";

function ProjectList({ setPlayerOpen }) {
  const projects = [
    {
      link: '/mall-trip', 
      name: 'Mall Trip', 
      description: 'Mall Trip Description',
      demo: require('../Previews/social-feed_demo.mov'),
      preview: require('../Previews/social-feed_preview.png'),
    },
    {      
      link: 'https://jiyoungglee.github.io/social-feed/', 
      name: 'Social Feed', 
      description: 'Social Feed Description',
      demo: require('../Previews/social-feed_demo.mov'),
      preview: require('../Previews/social-feed_preview.png'),
    },
    {      
      link: 'https://jiyoungglee.github.io/jiyoung-portfolio/', 
      name: 'Portfolio Website', 
      description: 'Portfolio Website Description',
      demo: require('../Previews/portfolio-demo.mov'),
      preview: require('../Previews/portfolio-preview.png'),
    },
    
  ]

  const [descOpen, setDescOpen] = useState(null);

  function getProjects(projects) {
    return projects.map(({ link, name, description, demo, preview }, index) => {
      return (
        <ProjectItem 
          key={index} 
          index={index+1} 
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
        {getProjects(projects)}
      </div>
    </div>
  )
};

export default ProjectList;
