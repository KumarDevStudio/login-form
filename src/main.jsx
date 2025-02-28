import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // Import BrowserRouter
import App from "./App";  // Your main App component

// Get the root element from your HTML file (typically <div id="root"></div>)
const rootElement = document.getElementById("root");

// Create a root with createRoot (React 18+)
const root = ReactDOM.createRoot(rootElement);

// Render the App inside the root, wrapped with BrowserRouter
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
