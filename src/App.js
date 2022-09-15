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
      <div className={state.index === null ? 'page' : 'page shortened'}>
        <About />
        <div className='content'>
          <ProjectList />
          <Education />
          <Skills />
          <div id="aboutme">
            <h2>About</h2>
            <div>
              Hi my name is Jiyoung Lee and I am a newly self-taught front-end developer. Feel free to explore my page and take a look at my projects.
            </div>
          </div>
        </div>
      </div>
      { state.index !== null && <PreviewMode /> }
    </div>
  );
}

export default App;
