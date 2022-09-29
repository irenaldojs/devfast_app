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
    <div
      className={`${
        props.class ?? ""
      } my-1 col-10 col-sm-auto d-flex justify-content-between align-items-end`}
      style={{ minWidth: "300px" }}
    >
      <span className="text-light">{props.text ?? ""} </span>
      <Button
        className={`btn ${props.btnClass ?? "btn-primary"} rounded-circle`}
        href={props.href ?? "#"}
      >
        <i className={`bi ${props.iconClass ?? "bi-discord"} p-1`}></i>
      </Button>
    </div>
  );
}

export default ButtonLink;
