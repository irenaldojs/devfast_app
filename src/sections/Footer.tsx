import IconLInk from "../components/IconLink";

function Footer() {
  const respose =
    "col-12 col-sm-3 d-flex flex-wrap align-items-center justify-content-center";
  return (
    <footer className="col-12 my-2 p-1 d-flex flex-wrap justify-content-center">
      <div className={respose}>
        <div className="d-flex flex-column align-items-start justify-content-center me-sm-3">
          <div className="fs-6">Desenvolvido por:</div>
          <div className="fs-5 fst-italic">Irenaldo Júnior da Silva</div>
        </div>
        <figure>
          <img
            src="/assets/desenvolvedor.jpg"
            alt=""
            height={"100px"}
            className="rounded-circle"
          />
        </figure>
      </div>
      <div className="col-12 col-sm-3">
        <fieldset className="d-flex flex-wrap align-items-center justify-content-center">
          <legend className="text-center fs-5">Contato:</legend>
          <IconLInk
            class="text-primary"
            iconClass="bi-linkedin"
            href="https://www.linkedin.com/in/irenaldo-j%C3%BAnior-da-silva/"
          />
          <IconLInk
            class="text-instagram"
            iconClass="bi-instagram"
            href="https://www.instagram.com/silvairenaldo/"
          />
          <IconLInk
            class="text-primary"
            iconClass="bi-facebook"
            href="https://www.facebook.com/irenaldo.silva.52"
          />
          <IconLInk
            class="text-success"
            iconClass="bi-whatsapp"
            href="https://api.whatsapp.com/send?phone=5524999798280"
          />
        </fieldset>
      </div>

      <div className="col-12 col-sm-3">
        <fieldset className="d-flex flex-wrap align-items-center justify-content-center">
          <legend className="text-center fs-5">Tecnologias:</legend>
          <i className="bi bi-bootstrap-fill text-bootstrap fs-icones me-3" />
          <i className="ri-reactjs-fill fs-icones light-blue"></i>
        </fieldset>
      </div>
    </footer>
  );
}

export default Footer;
