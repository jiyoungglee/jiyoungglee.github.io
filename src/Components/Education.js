import "../Styles/Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";


function Education() {
  return (
    <div className="education">
      <h2>Education</h2>
      <div className="degree">
        <FontAwesomeIcon className="grad-icon" icon={faGraduationCap} />
        <div className="degree-details">
          <div className="degree-name">Management Information Systems</div>
          <div>2020 | Rutgers University</div>
        </div>
      </div>
      <button> Click to see relevant coursework </button>
    </div>
  )
};

export default Education;