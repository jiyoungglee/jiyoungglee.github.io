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

  useEffect( () => {
    if (state.open) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
    }
  })

  return (
    <div className="app">
      <div className={state.index === null ? "" : "page-padding"}>
        <About />
        <div className='content'>
          <h2>Projects</h2>
          <ProjectList />
          <Education />
          <Skills />
          <div id="aboutme">
            <h2>About</h2>
            <div>
              Hi my name is Jiyoung Lee and I am a front-end developer. Feel free to explore my page and take a look at my projects.
            </div>
          </div>
        </div>
      </div>
      { state.index !== null && <PreviewMode /> }
    </div>
  );
}

export default App;
