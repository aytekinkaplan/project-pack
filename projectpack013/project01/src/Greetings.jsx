import PropTypes from "prop-types";
import { useEffect } from "react";

const Greetings = (props) => {
  // Stil nesnesi
  const style = {
    fontSize: "20px",
    color: "blue",
    fontStyle: "italic",
    fontWeight: "bold",
    fontFamily: "serif",
    backgroundColor: "lightblue",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
    textAlign: "center",
    lineHeight: "1.5",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    wordSpacing: "0.2em",
    overflow: "hidden",
    textOverflow: "ellipsis",
    animation: "fade-in 0.5s ease forwards",
  };

  // @keyframes animasyonu ekleme
  useEffect(() => {
    const keyframes = `
      @keyframes fade-in {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `;

    const styleElement = document.createElement("style");
    styleElement.textContent = keyframes;
    document.head.appendChild(styleElement);

    return () => {
      // Temizleme: Stil elementini kaldır
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="greetings" style={style}>
      <h2>My name is {props.name}</h2>
      <p>My age is {props.age}</p>
      <p>My job is {props.job}</p>
    </div>
  );
};

// Props doğrulaması
Greetings.propTypes = {
  name: PropTypes.string.isRequired, // name zorunlu ve string olmalı
  age: PropTypes.number, // age opsiyonel ve number olmalı
  job: PropTypes.string, // job opsiyonel ve string olmalı
};

// Varsayılan değerler
Greetings.defaultProps = {
  age: 18,
  job: "Unemployed",
};

export default Greetings;
