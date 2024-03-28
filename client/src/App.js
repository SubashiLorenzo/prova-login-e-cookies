import "./App.css";
import Login from "./components/Login.js";
import { useState } from "react";
import Header from "./components/Header.js";
function App() {
  console.log("APP", setVisibility);
  return (
    <div className="App">
      PROVA
      <Header visibility={visibility} />
      <Login setVisibility={setVisibility} />
    </div>
  );
}

export default App;
