import './App.css';
import About from './Components/About';
import ProjectList from './Components/ProjectList';
import Education from './Components/Education';
import Skills from './Components/Skills';
import PreviewMode from './Components/PreviewMode';
import { useContext, useEffect } from 'react';
import { PlayerContext } from './store/PlayerContext';

function App() {
  const { state } = useContext(PlayerContext);

  useEffect(() => {
    if (state.open) {
      document.body.style.overflow= 'hidden';
    } else {
      document.body.style.overflow='auto';
    }
  },[state.open]);
  
  return (
    <div>
      <About />
      <div className="content">
        <ProjectList />
        <Education />
        <Skills />
      </div>
      { state.index !== null && <PreviewMode /> }
    </div>
  );
}

export default App;
