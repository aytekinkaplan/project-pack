import PropTypes from "prop-types";

const Person = ({ name, lastname, job, age, salary }) => {
  return (
    <div>
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
