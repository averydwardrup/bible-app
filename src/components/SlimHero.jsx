import PropTypes from "prop-types";

SlimHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  color: PropTypes.string,
};
export default function SlimHero({ title, subtitle, color = "is-primary" }) {
  return (
    <section className={`hero ${color}`}>
      <div className="py-5 container">
        <p className="title">{title}</p>
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
