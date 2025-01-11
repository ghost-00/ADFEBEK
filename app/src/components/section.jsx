import PropTypes from "prop-types";
import "./styles/styles.scss";

function Section({ type }) {
  return (
    <section id={type} className={type}>
      {type}
    </section>
  );
}

Section.propTypes = {
  type: PropTypes.string.isRequired,
};
export default Section;
