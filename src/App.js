import './App.css';
import About from './Components/About';
import ProjectList from './Components/ProjectList';
import Education from './Components/Education';
import Skills from './Components/Skills';
import PreviewMode from './Components/PreviewMode';
import { useState } from 'react';

function App() {
  const [playerOpen, setPlayerOpen] = useState(false);

  return (
    <div>
      <About />
      <div className="content">
        <ProjectList setPlayerOpen={setPlayerOpen} />
        <Education />
        <Skills />
      </div>
      <PreviewMode playerOpen={playerOpen} setPlayerOpen={setPlayerOpen} />
    </div>
  );
}

export default App;
