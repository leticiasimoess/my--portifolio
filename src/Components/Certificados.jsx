
import '../Style/components-sass/certificado.scss';

const Certificados = () => {
  return (
    <section className="certificados" id="certificados">
      <h2>📜 Certificados</h2>
      <div className="certificados-container">
        <div className="cert-card">
          <h3>Curso de React</h3>
          <p>Plataforma: Alura</p>
          <span>Concluído em Jan/2025</span>
        </div>
        <div className="cert-card">
          <h3>JavaScript Avançado</h3>
          <p>Plataforma: Udemy</p>
          <span>Concluído em Nov/2024</span>
        </div>
        {/* Adicione mais certificados conforme necessário */}
      </div>
    </section>
  );
};

export default Certificados;
