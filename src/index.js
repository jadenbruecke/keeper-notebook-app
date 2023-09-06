import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

// Create a root element to mount the app
const rootElement = document.getElementById("root");

// Render the app to the DOM using the new createRoot method
ReactDOM.createRoot(rootElement).render(<App />);
