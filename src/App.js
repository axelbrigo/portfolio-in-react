import './App.css';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import Technologies from './components/technologies/Technologies';
import TopBar from './components/topbar/TopBar';
import Works from './components/works/works';
import { useState } from 'react';
import Menu from './components/menu/Menu';

function App() {
const [menuOpen, setMenuOpen] = useState(false)


  return (
    <div className="App">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className='sections'>
            <Intro/>
            <About/>
            <Works/>
            <Technologies/>
        </div>
    
    </div>
  );
}

export default App;
