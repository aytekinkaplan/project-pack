import Greetings from "./Greetings";
import "./App.css";

function App() {
  return (
    <>
      <Greetings name="Özlem" age={20} job="Student" />
      <Greetings name="Aytekin" age={40} job="Teacher" />
      <Greetings name="Ahmed" job="Engineer" />
      <Greetings name="Yusuf" age={30} job="Designer" />
    </>
  );
}

export default App;
