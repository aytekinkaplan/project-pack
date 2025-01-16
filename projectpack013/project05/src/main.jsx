import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // createRoot'un doğru import edilmesi
import App from "./App.jsx";

// Root elementi seçme
const rootElement = document.getElementById("root");

// React uygulamasını render etme
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
