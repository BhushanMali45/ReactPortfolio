
import Navbar from './Components/Navbar';
import Intro from "./Components/intro/Intro"
import About from "./Components/about/About"
import Portfolio from "./Components/portfolio/Portfolio"
import Work from "./Components/work/Work"
import Contact from './Components/contact/Contact';
import "./app.scss"
import { useState } from 'react';
import Menu from './Components/menu/Menu';
import Footer from './Components/footer/Footer';

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className='app'>
    <Navbar menuOpen={menuOpen}  setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen}  setMenuOpen={setMenuOpen}/>

<div className="section">
 
      <Intro/>
      <About/>
    <Portfolio/>
    <Work/>
   
    <Contact/>
   
</div>
<Footer/>
    </div>
  );
}

export default App;
