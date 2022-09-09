import './App.css';
import About from './Components/About';
import ProjectList from './Components/ProjectList';
import Education from './Components/Education';
import Skills from './Components/Skills';
import PreviewMode from './Components/PreviewMode';
import { useContext } from 'react';
import { PlayerContext } from './store/PlayerContext';

function App() {
  const { state } = useContext(PlayerContext);
  
  return (
    <div>
      <About />
      <div className="content">
        <ProjectList />
        <Education />
        <Skills />
      </div>
      { state.index > -1 && <PreviewMode /> }
    </div>
  );
}

export default App;
