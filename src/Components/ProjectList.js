import ProjectItem from "./ProjectItem";
import "../Styles/ProjectList.css";

function ProjectList() {
  const projects = [
    {
      link: '/mall-trip', 
      name: 'Mall Trip', 
      description: 'Mall Trip Description'
    },
    {      
      link: '/social-feed', 
      name: 'Social Feed', 
      description: 'Social Feed Description'
    },
  ]

  function getProjects(projects) {
    return projects.map(({ link, name, description }, index) => {
      return (
        <ProjectItem key={index} index={index+1} link={link} name={name} description={description} />
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
