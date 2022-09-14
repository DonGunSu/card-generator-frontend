import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import Router from "./components/Router";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
  );
}

export default App;
