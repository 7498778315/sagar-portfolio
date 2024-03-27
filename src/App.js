
import './App.css';
import Navbar from './component/navbar';
import Main from './component/main';
import About from './component/about';
import Skill from './component/skill';
import portfolio from './component/portfolio1.jpg';
import Service from './component/service';
import Contact from './contact';
// import portfolio1 from './component/portfolioback.jpg';


function App() {
  return (
    <>
    <Navbar/>
    <Main/>
    <About image={portfolio}/>
    <Skill/>
    <Service/>
    <Contact/>
    </>
    
  );
}

export default App;
