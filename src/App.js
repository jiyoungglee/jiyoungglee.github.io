import './App.css';
import { useContext, useEffect } from 'react';
import About from './Components/About';
import ProjectList from './Components/ProjectList';
import Education from './Components/Education';
import Skills from './Components/Skills';
import PreviewMode from './Components/PreviewMode';
import { PlayerContext } from './store/PlayerContext';
import TalksandPubs from './Components/TalksAndPubs';

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
          <h2>Projects</h2>
          <ProjectList />
          <TalksandPubs />
          <Education />
          <Skills />
          <div id="aboutme">
            <h2>About</h2>
            <div className="about-content">
              Hi my name is Jiyoung Lee and I am a passionate software developer
              specializing in React, Node, JavaScript, and TypeScript.
              Co-creator and developer @ nVision, an open source Next.js dev
              tool that provides observability for server-side network activity.
              Currently working @ Hotswaps to improve the mechanical keyboard
              marketplace. Let’s talk! Recently gave a talk on Caching and
              Optimization in NY. Eagerly embracing new technologies; my latest
              venture includes experimenting with Solid.js.
            </div>
          </div>
        </div>
      </div>
      {state.index !== null && <PreviewMode />}
    </div>
  );
}

export default App;
