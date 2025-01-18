import { useEffect } from "react";
import mermaid from "mermaid";
import "./Mermaid.css";

const Mermaid = () => {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
  }, []);

  const diagramData = [
    {
      id: 1,
      title: "Diagram 1",
      content: `graph TD; A[Clieant] -->|tcp_1234| B
      B((Load Balancer))
      B --> |tcp_456| C[Server]
      B --> |tcp_789| D[Server]`,
    },
  ];

  return (
    <div>
      <h1>Mermaid Diagrams</h1>
      {diagramData.map((diagram) => (
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

export default Mermaid;
