// src/App.js
import React from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Feature from "./components/Feature";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Button />
      <div className="features">
        <Feature
          imgSrc={`${process.env.PUBLIC_URL}/icon1.png`}
          title="Declarative"
          description="React makes it painless to create interactive UIs."
        />
        <Feature
          imgSrc={`${process.env.PUBLIC_URL}/icon2.png`}
          title="Components"
          description="Build encapsulated components that manage their state."
        />
        <Feature
          imgSrc={`${process.env.PUBLIC_URL}/icon3.png`}
          title="Single-Way"
          description="A set of immutable values are passed to the component's."
        />
        <Feature
          imgSrc={`${process.env.PUBLIC_URL}/icon4.png`}
          title="JSX"
          description="Statically-typed, designed to run on modern browsers."
        />
      </div>
    </div>
  );
}

export default App;

