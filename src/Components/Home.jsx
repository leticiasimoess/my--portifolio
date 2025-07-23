import '../Style/components-sass/home.scss';

import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="home">
      <h1>Eu transformo código em experiências...</h1>
      <h2>
        <span className="typewriter">
          <Typewriter
            words={['Bonitas', 'Responsivas', 'Funcionais', 'Acessíveis']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h2>

      <div className="home__icons">
        <a href="https://github.com/leticiasimoess" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/leesimoes/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="/meu-curriculo.pdf" target="_blank" rel="noopener noreferrer">
          <FaFileAlt />
        </a>
      </div>
    </section>
  );
};

export default Home;

