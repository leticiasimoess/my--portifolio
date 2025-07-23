import "./Style/components-sass/app.scss";

import Home from "./Components/Home";
import Sobre from "./Components/Sobre";
import Experience from "./Components/Experience";
import Habilidades from "./Components/Habilidades";
import Projects from "./Components/Projects";
import Certificados from './Components/Certificados';
import Navbar from "./Components/Navbar";
import Contact from './Components/Contact';
import Footer from './Components/Footer';


export default function App() {
  return (
     <div className="background-grid">
      <Navbar/>
      <Home/>
      <Sobre/>
      <Experience/>
      <Habilidades/>
      <Projects/>
      <Certificados/>
      <Contact/>
      <Footer/>
    </div>    
    
  );
}
