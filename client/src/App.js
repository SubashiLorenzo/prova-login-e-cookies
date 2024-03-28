import "./App.css";
import Login from "./components/Login.js";
import { useState } from "react";
import Header from "./components/Header.js";
function App() {
  const [visibility, setVisibility] = useState(false);
  return (
    <div className="App">
      <Header visibility={visibility} />
      <Login setVisibility={setVisibility} />
    </div>
  );
}

export default App;
