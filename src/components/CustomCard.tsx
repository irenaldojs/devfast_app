import { Button, Card } from "react-bootstrap";

type Props = {
  id?: string;
  title?: string;
  text?: string;
  imgSrc?: string;
  href?: string;
};

function CardCustom(props: Props) {
  return (
    <a
      id={props.id}
      className="col-12 col-sm-4 m-3 text-decoration-none top-pad"
      href={props.href}
    >
      <Card>
        <Card.Img variant="top" src={props.imgSrc} alt={props.title} />
        <Card.Body>
          <Card.Title className="fs-2 fw-bolder text-dark text-opacity-75">
            {props.title}
          </Card.Title>
          <Card.Text className="fs-3 text-dark text-opacity-75">
            {props.text}
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
}

export default CardCustom;
