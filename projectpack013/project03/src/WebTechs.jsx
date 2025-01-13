import PropTypes from "prop-types";
import "./WebTechs.css"; // CSS dosyasını dahil ettik

const WebTechs = ({ webTechs }) => {
  return (
    <div className="webtech-container">
      <ul className="webtech-list">
        {webTechs.map((tech) => (
          <li className="webtech-item" key={tech}>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

WebTechs.propTypes = {
  webTechs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WebTechs;
