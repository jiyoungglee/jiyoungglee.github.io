import { faCss3, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Skills() {
  return (
    <div>
      <h2>Skills</h2>
      <FontAwesomeIcon icon={faJs} />
      <FontAwesomeIcon icon={faReact} />
      <FontAwesomeIcon icon={faCss3} />
      <FontAwesomeIcon icon={faHtml5} />
    </div>
  )
};

export default Skills;