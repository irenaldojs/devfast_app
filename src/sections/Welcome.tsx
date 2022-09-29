import Logo from "../assets/Icone.png";
import Section from "../components/Section";
function Welcome() {
  return (
    <Section class="px-2">
      <div
        className="p-2 col-12 col-sm-5 mt-sm-5 pe-sm-5"
        style={{ marginTop: "80px" }}
      >
        <h1 className="text-dark text-opacity-75 fw-bold mb-5 text-center">
          Bem vindos à DevFast!
        </h1>
        <div>
          <p
            className="text-dark text-opacity-50 fs-4"
            style={{ textIndent: "50px" }}
          >
            Um grupo focado em ajudar estudantes de programação a acelerar seus
            estudos e entrar no mercado de trabalho. Aqui criamos um atalho para
            quem não tem tempo a perder e está buscando conseguir sua primeira
            vaga como programador.
          </p>
        </div>
      </div>
      <div className="col-12 col-sm-3">
        <figure className="w-100 d-flex justify-content-center">
          <img src={Logo} alt="Logo" className="w-50" />
        </figure>
        <div className="fw-bold fs-welcome d-flex justify-content-center">
          <span className="light-blue">Dev</span>
          <span className="dark-blue">Fast</span>
        </div>
      </div>
    </Section>
  );
}

export default Welcome;
