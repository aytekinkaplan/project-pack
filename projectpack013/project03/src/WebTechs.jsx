import PropTypes from "prop-types";

const WebTechs = ({ webTechs }) => {
  return (
    <div>
      <ul>
        {webTechs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

WebTechs.propTypes = {
  webTechs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WebTechs;
