import PropTypes from "prop-types";

const Person = ({ name, lastname, job, age, salary }) => {
  const style = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "yellow",
    border: "1px solid black",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
    WebkitBoxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
    MozBoxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
  };
  return (
    <div style={style}>
      <h1>{name}</h1>
      <h2>{lastname}</h2>
      <h3>{job}</h3>
      <h3>{age}</h3>
      <h3>{salary}</h3>
    </div>
  );
};

Person.propTypes = {
  name: PropTypes.string,
  lastname: PropTypes.string,
  job: PropTypes.string,
  age: PropTypes.number,
  salary: PropTypes.number,
};

export default Person;
