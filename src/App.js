import React from "react";
import "./App.css";
import "./Header";
import { Header } from "./Header";
import { Information } from "./Information";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Information />
      </header>
    </div>
  );
}

export default App;
