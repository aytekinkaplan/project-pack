import Header from "./components/Header";
import Mermaid from "./components/Mermaid";

const App = () => {
  return (
    <div>
      <Header title="Welcome to My App!" />
      <Mermaid title="Mermaid Diagrams" />
      <Mermaid title="More Mermaid Diagrams" />
    </div>
  );
};

export default App;
