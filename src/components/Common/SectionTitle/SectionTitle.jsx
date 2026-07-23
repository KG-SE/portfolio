import "./SectionTitle.css";

const SectionTitle = ({ subtitle, title, center = true }) => {
  return (
    <div
      className={`section-title ${center ? "center" : "left"}`}
    >
      <span className="section-subtitle">
        {subtitle}
      </span>

      <h2 className="section-heading">
        {title}
      </h2>

      <div className="section-line"></div>
    </div>
  );
};

export default SectionTitle;