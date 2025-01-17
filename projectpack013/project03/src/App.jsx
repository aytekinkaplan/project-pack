import "./App.css";
import Person from "./Person";
import WebTechs from "./WebTechs";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const people = [
    { name: "John", lastname: "Doe", job: "Engineer", age: 28, salary: 5000 },
    {
      name: "Jane",
      lastname: "Foster",
      job: "Designer",
      age: 25,
      salary: 4000,
    },
    { name: "Bob", lastname: "Smith", job: "Developer", age: 32, salary: 6000 },
    {
      name: "Alice",
      lastname: "Johnson",
      job: "Architect",
      age: 30,
      salary: 7000,
    },
    {
      name: "Charlie",
      lastname: "Brown",
      job: "Manager",
      age: 35,
      salary: 5500,
    },
    {
      name: "Emily",
      lastname: "Davis",
      job: "Salesperson",
      age: 27,
      salary: 4800,
    },
    {
      name: "Frank",
      lastname: "Miller",
      job: "Accountant",
      age: 29,
      salary: 5200,
    },
    { name: "Grace", lastname: "Wilson", job: "HR", age: 31, salary: 4900 },
    {
      name: "Henry",
      lastname: "Taylor",
      job: "Marketing",
      age: 28,
      salary: 4700,
    },
  ];

  return (
    <div className="app-container">
      <Header title="My Team" />

      <div className="person-list">
        {people.map((person, index) => (
          <Person
            key={index}
            name={person.name}
            lastname={person.lastname}
            job={person.job}
            age={person.age}
            salary={person.salary}
          />
        ))}
      </div>

      <div className="webtechs-container">
        <WebTechs
          webTechs={[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node",
            "MongoDB",
          ]}
        />
        <WebTechs
          webTechs={[
            "Python",
            "Django",
            "Flask",
            "SQL",
            "MySQL",
            "PostgreSQL",
            "MongoDB",
          ]}
        />
        <WebTechs webTechs={["HTML", "CSS", "JavaScript", "React", "Redux"]} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
