import { useContext } from 'react';
import { PlayerContext } from "../store/PlayerContext";

function ProjectDescription() {
  const { state } = useContext(PlayerContext);

  return (
    <div className="project-description">
       {state.description}
    </div>
  )
}

export default ProjectDescription;