import { useEffect } from "react";
import mermaid from "mermaid";
import PropTypes from "prop-types";
import "./Mermaid.css";

const Mermaid = ({ title, diagrams }) => {
  useEffect(() => {
    try {
      mermaid.initialize({ startOnLoad: true });
    } catch (error) {
      console.error("Mermaid initialization failed:", error);
    }
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      {diagrams.map((diagram) => (
        <div key={diagram.id}>
          <h2>{diagram.title}</h2>
          <div
            className="mermaid"
            dangerouslySetInnerHTML={{ __html: diagram.content }}
          ></div>
        </div>
      ))}
    </div>
  );
};

Mermaid.propTypes = {
  title: PropTypes.string.isRequired,
  diagrams: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Mermaid;
