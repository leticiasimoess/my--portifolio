import '../Style/components-sass/about.scss';
import FotoPerfil from '../assets/FotoPerfil.png';

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-title">Sobre Mim</h2>
      <p className='section-subtitle'>Conheça a pessoa por trás do código</p>

      <div className="about-content">
        <p>
          Tenho forte interesse por tecnologia e estou em constante evolução como desenvolvedora.
          Com formação em Análise e Desenvolvimento de Sistemas, venho explorando diferentes áreas da
          programação para descobrir onde posso contribuir da melhor forma.
          Tenho afinidade com o front-end, curiosidade sobre back-end e cibersegurança, e estou sempre 
          aberta a aprender algo novo. Já trabalhei com HTML, CSS, JavaScript, React, e sigo aprofundando
          meus conhecimentos em lógica de programação, Git e consumo de APIs.
          Cada projeto é uma oportunidade de aprendizado e crescimento. Busco neste momento ganhar experiência real,
          trocar aprendizados com pessoas da área e me desenvolver profissionalmente com muita dedicação, curiosidade e vontade de fazer a diferença.
        </p>

        <section className="about-image">
          <img src={FotoPerfil} alt="Minha Foto" />
        </section>
      </div>

      <div className="about-stats">
        <div className="stat">
          <h3>2+</h3>
          <span>Anos de experiência</span>
        </div>
        <div className="stat">
          <h3>15+</h3>
          <span>Projetos Concluídos</span>
        </div>
        <div className="stat">
          <h3>42</h3>
          <span>Estudante da escola</span>
        </div>
      </div>
    </section>
  );
};

export default About;
