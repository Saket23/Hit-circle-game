import React from "react";
import "./App.css";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Container from "./component";

const options = {
  position: positions.MIDDLE,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
  type: "info"
};

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Container />
    </AlertProvider>
  );
}

export default App;
