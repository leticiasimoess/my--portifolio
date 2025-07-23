
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../Style/components-sass/footer.scss";
import logo from "../assets/logo.png"; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
       <img src={logo} alt="Logo Letícia Simões" />
      </div>

      <div className="footer__social">
        <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:seuemail@email.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>

      <div className="footer__text">
        <p>© {new Date().getFullYear()} Leticia Simões</p>
        <p>Crafted with ❤️ code and coffee.     </p>
      </div>
    </footer>
  );
};

export default Footer;
