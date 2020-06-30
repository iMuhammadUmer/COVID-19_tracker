import React from "react";
import "./App.css";
import "./Header";
import { Header } from "./Header";
import MainGrid from "./components/MainGrid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MainGrid />
      </header>
    </div>
  );
}

export default App;
