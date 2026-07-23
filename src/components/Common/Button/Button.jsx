import "./Button.css";

const Button = ({
  text,
  href = "#",
  variant = "primary",
  download = false,
  target = "_self",
  icon = null,
  onClick,
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className={`btn btn-${variant}`}
      download={download}
      onClick={onClick}
    >
      <span>{text}</span>

      {icon && <span className="btn-icon">{icon}</span>}
    </a>
  );
};

export default Button;