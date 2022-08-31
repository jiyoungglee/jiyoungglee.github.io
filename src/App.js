import './App.css';
import About from './Components/About';
import ProjectList from './Components/ProjectList';
import Education from './Components/Education';
import Skills from './Components/Skills';

function App() {
  return (
    <div>
      <About />
      <div className="content">
        <ProjectList />
        <Education />
        <Skills />
      </div>
    </div>
  );
}

export default App;
