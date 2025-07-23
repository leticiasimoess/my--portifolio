import { useState } from "react";
import "../Style/components-sass/navbar.scss";
import logo from "../assets/logo.png";

import { FaBars, FaTimes } from "react-icons/fa";
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaCode } from "react-icons/fa";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
       <div className="logo">
    <img src={logo} alt="logo" />
    <div className="text">
      <h2>Leticia Simões</h2>
      <p>Desenvolvedora Front-end</p>
    </div>
  </div>

   <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#inicio"><FaHome /> Início</a>
        <a href="#sobre"><FaUser /> Sobre</a>
        <a href="#habilidades"><FaCode /> Habilidades</a>  
        <a href="#projetos"><FaBriefcase /> Projetos</a>
        <a href="#contato"><FaEnvelope /> Contato</a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
