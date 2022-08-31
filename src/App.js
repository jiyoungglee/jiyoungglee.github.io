import './App.css';
import About from './Components/About';
import ProjectList from './Components/ProjectList';
import Education from './Components/Education';
import Skills from './Components/Skills';
import PreviewPage from './Components/PreviewPage';

function App() {
  return (
    <div>
      <About />
      <div className="content">
        <ProjectList />
        <Education />
        <Skills />
      </div>
      <PreviewPage />
    </div>
  );
}

export default App;
