// src/Components/Experience.jsx
import React from 'react';
import '../Style/components-sass/experience.scss';

const experiences = [
  {
    title: "Desenvolvedora Front-End",
    company: "Freelancer",
    period: "Jan 2024 - Atual",
    description: "Criação de interfaces modernas com React, SASS e integração com APIs REST.",
  },

  {
    title: "Estudante de ADS",
    company: "Faculdade UNIP",
    period: "2021- 2023",
    description: "Formação tecnológica com foco no desenvolvimento de sistemas, abrangendo todo o ciclo de vida de software: análise, projeto, implementação, testes e manutenção. Durante o curso, desenvolvi competências para atuar com metodologias ágeis, ferramentas modernas de programação e banco de dados, além de aplicar técnicas de diagnóstico e solução de problemas computacionais alinhados aos objetivos estratégicos de negócios. Fui capacitada a trabalhar em equipe, gerenciar projetos e produzir software de qualidade, com foco em performance, usabilidade e manutenção."
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2>Experiência</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <h3>{exp.title}</h3>
            <span className="company">{exp.company}</span>
            <span className="period">{exp.period}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
