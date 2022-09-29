import { ReactNode } from "react";

type Props = {
  id?: string;
  class?: string;
  children?: JSX.Element[] | JSX.Element | React.ReactNode;
};

function Section(props: Props) {
  return (
    <section
      className={`d-flex flex-wrap justify-content-center align-itens-center py-5
       ${props.class ?? ""}`}
      id={props.id ?? ""}
    >
      {props.children}
    </section>
  );
}

export default Section;
