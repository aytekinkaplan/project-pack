import Header from "./components/Header";
import Mermaid from "./components/Mermaid";

const App = () => {
  const diagrams = [
    {
      id: 1,
      title: "Diagram 1",
      content: `graph TD; A[Client] -->|tcp_1234| B
        B((Load Balancer))
        B --> |tcp_456| C[Server]
        B --> |tcp_789| D[Server]`,
    },
    {
      id: 2,
      title: "Diagram 2",
      content: `graph LR; X[User] -->|http| Y((API Gateway))
        Y --> Z[Backend Service]`,
    },
    {
      id: 3,
      title: "Diagram 3",
      content: `graph TD; A[Client] -->|tcp_1234| B
        B((Load Balancer))
        B --> |tcp_456| C[Server]
        B --> |tcp_789| D[Server]`,
    },
  ];
  return (
    <div>
      <Header title="Welcome to My App!" />
      <Mermaid title="Mermaid Diagrams" diagrams={diagrams} />
    </div>
  );
};

export default App;
