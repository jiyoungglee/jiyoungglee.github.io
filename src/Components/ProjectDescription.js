import { useContext } from 'react';
import { PlayerContext } from "../store/PlayerContext";

function ProjectDescription() {
  const { state } = useContext(PlayerContext);
  const { heading, bullets } = state.description;

  return (
    <div className="project-description">
       <p>{heading}</p>
       <ul>
        {bullets.map((bullet, idx) => (
          <li key={idx}>{bullet}</li>
        ))}
       </ul>
    </div>
  )
}

export default ProjectDescription;