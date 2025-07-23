
import '../Style/components-sass/contact.scss';

const Contato = () => {
  return (
    <section className="contato" id="contato">
      <h2 className='gradient-heading'>📩 Contato</h2>
      <form className="form-contato">
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu e-mail" required />
        <textarea placeholder="Sua mensagem" rows="5" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contato;
