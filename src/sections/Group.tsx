import { Button } from "react-bootstrap";
import ButtonLink from "../components/ButtonLink";
import Section from "../components/Section";

function Group() {
  return (
    <Section id="group">
      <div className="col-12 col-sm-8 d-flex flex-wrap justify-content-center p-3 p-sm-5 rounded bg-group">
        <div className="col-12 col-sm-4">
          <figure>
            <img src="./assets/programador.png" alt="" className="w-100" />
          </figure>
        </div>
        <div className="col-12 col-sm-8 ps-sm-5 d-flex flex-column justify-content-center align-items-center">
          <div className="fs-2 fst-italic fw-bold text-light text-center text-sm-start">
            Junte-se a nossa comunidade, um grupo de amigos que estão sempre
            dispostos a contribuir.
          </div>
          <hr />
          <ButtonLink
            text="Grupo de Whattsapp "
            btnClass="btn-success border border-light"
            href="https://chat.whatsapp.com/HBziyiVqEZc6VfBHjGdd4d"
            iconClass="bi-whatsapp"
            class="fs-5"
          />
          <ButtonLink
            text="Canal no Discord "
            btnClass="btn-primary border border-light"
            href="https://discord.gg/5C8hKYrE"
            iconClass="bi-discord"
            class="fs-5"
          />
          <ButtonLink
            text="Canal no Youtube "
            btnClass="btn-danger border border-light"
            href="https://www.youtube.com/c/DevFast2021"
            iconClass="bi-youtube"
            class="fs-5"
          />
        </div>
      </div>
    </Section>
  );
}

export default Group;
