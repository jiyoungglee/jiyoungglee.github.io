import ProjectItem from './ProjectItem';
import '../Styles/ProjectList.css';
import projects from '../store/Projects';

function ProjectList() {
  function getProjects() {
    return projects.map(({
      link, name, description, demo,
    }, index) => (
      <ProjectItem
        key={name}
        index={index}
        link={link}
        name={name}
        description={description}
        demo={demo}
      />
    ));
  }

  return (
    <div className="projects">
      <div className="project-list">
        {getProjects()}
      </div>
    </div>
  );
}

export default ProjectList;
