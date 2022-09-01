import '../Styles/PreviewPopup.css';
import ProjectList from './ProjectList';

function PreviewPopup() {
  return (
    <div className="preview-popup">
      <div className="preview-left">
        <video width="500" autoPlay loop muted>
          <source src={require("../Previews/portfolio-demo.mov")} type="video/mp4" />
        </video>
      </div>
      <div className="preview-right">
        <ProjectList />
      </div>
    </div>
  )
}

export default PreviewPopup;
