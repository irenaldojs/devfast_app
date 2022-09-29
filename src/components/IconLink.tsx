type Props = {
  class?: string;
  iconClass?: string;
  href?: string;
};

function IconLInk(props: Props) {
  return (
    <a href={props.href ?? "#"} className={"me-3 fs-icones " + props.class}>
      <i className={`bi ` + props.iconClass} />
    </a>
  );
}

export default IconLInk;
