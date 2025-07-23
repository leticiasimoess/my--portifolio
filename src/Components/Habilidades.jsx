import '../Style/components-sass/skills.scss';


const skills = [
  { name: 'HTML5', icon: '/icons/html.svg', level: 98, color: ' #E34F26' },
  { name: 'CSS3', icon: '/icons/css.svg', level: 98, color: '#264de4' },
  { name: 'JavaScript', icon: '/icons/javascript.svg', level: 75, color: '#f0db4f' },
  { name: 'React', icon: '/icons/react.svg', level: 75, color: '#61dafb' },
  { name: 'Node.js', icon: '/icons/nodejs.svg', level: 80, color: '#3c873a' },
  { name: 'SASS', icon: '/icons/sass.svg', level: 65, color: '#cd6799' },
  { name: 'Git', icon: '/icons/git.svg', level: 70, color: '#f1502f' },
  { name: 'TypeScript', icon: '/icons/typescript.svg', level: 15, color: '#007acc' },
  { name: 'Python', icon: '/icons/python.svg', level: 20, color: '#306998' },
  { name: 'C', icon: '/icons/C.svg', level: 10, color: '#3c22e7ff' },
  { name: 'C++', icon: '/icons/c++.svg', level: 10, color: '#5caaf7ff' },
  { name: 'MYSQL', icon: '/icons/mysql.svg', level: 45, color: '#ffeb0fff' },
];

const stats = [
  { icon: '💻', title: 'Tecnologias', value: '08+' },
  { icon: '📁', title: 'Projetos', value: '5+' },
  { icon: '📅', title: 'Experiência', value: '1 ano' },
  { icon: '☕', title: 'Cafés', value: '∞ xícaras' },
];

const Skills = () => (
  <section className="skills-section" id="skills">
    <h2>Habilidades e Tecnologias</h2>
    <p>As ferramentas mágicas que uso para dar vida às ideias</p>
    <div className="skills-grid">
      {skills.map((skill, i) => (
        <div className="skill-card" key={i}>
          <div className="icon-wrapper">
            <img src={skill.icon} alt={skill.name} />
            
             <span className="emoji">✨</span>
            </div>
          <span>{skill.name}</span>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${skill.level}%`, backgroundColor: skill.color }}>
              </div>
          </div>
        </div>
      ))}
    </div>

    <div className="skills-stats">
      {stats.map((stat, i) => (
        <div className="stat" key={i}>
          <span className="emoji">{stat.icon}</span>
          <h3>{stat.value}</h3>
          <p>{stat.title}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
