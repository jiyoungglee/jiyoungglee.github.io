import './App.css';
import { useContext, useEffect } from 'react';
import About from './Components/About';
import ProjectList from './Components/ProjectList';
import Education from './Components/Education';
import Skills from './Components/Skills';
import PreviewMode from './Components/PreviewMode';
import { PlayerContext } from './store/PlayerContext';
import TalksandPubs from './Components/TalksAndPubs';
import Experience from './Components/Experience';

function App() {
  const { state } = useContext(PlayerContext);

  useEffect(() => {
    if (state.open) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
    }
  });

  return (
    <div className="app">
      <div className={state.index === null ? '' : 'page-padding'}>
        <About />
        <div className="content">
          <Experience />
          <h2>Projects</h2>
          <ProjectList />
          <TalksandPubs />
          <Education />
          <Skills />
          <div id="aboutme">
            <h2>About</h2>
            <div>
              Dropping clean code and smooth UIs since 2022. Specializes in React
              and TypeScript, with tracks ranging from high-performance debugging
              tools to secure credential management. Collaborates cross-functionally
              like a good bandmate, and never misses a beat when it comes to accessibility
              or testing.
            </div>
          </div>
        </div>
      </div>
      {state.index !== null && <PreviewMode />}
    </div>
  );
}

export default App;
