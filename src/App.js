import './App.css';
import About from './Components/About';
import ProjectList from './Components/ProjectList';
import Education from './Components/Education';
import Skills from './Components/Skills';
import PreviewMode from './Components/PreviewMode';

function App() {
  return (
    <div>
      <About />
      <div className="content">
        <ProjectList />
        <Education />
        <Skills />
      </div>
      <PreviewMode />
    </div>
  );
}

export default App;
