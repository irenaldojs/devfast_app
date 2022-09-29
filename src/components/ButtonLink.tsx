import Button from "react-bootstrap/esm/Button";

type Props = {
  text?: string;
  class?: string;
  btnClass?: string;
  iconClass?: string;
  href?: string;
};

function ButtonLink(props: Props) {
  return (
    <Button
      className={`btn ${
        props.btnClass ?? "btn-primary"
      } my-1 px-2 px-sm-4 col-12 col-sm-6
      d-flex justify-content-between align-items-center`}
      href={props.href ?? "#"}
    >
      <span className="text-light fs-6 fw-lighter text-uppercase">
        {props.text ?? ""}{" "}
      </span>
      <i className={`bi ${props.iconClass ?? "bi-discord"} fs-icones`}></i>
    </Button>
  );
}

export default ButtonLink;
