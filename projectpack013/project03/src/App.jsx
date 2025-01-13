import "./App.css";
import Person from "./Person";

function App() {
  return (
    <>
      <Person
        name="John"
        lastname="Doe"
        job="Engineer"
        age={28}
        salary={5000}
      />
    </>
  );
}

export default App;
