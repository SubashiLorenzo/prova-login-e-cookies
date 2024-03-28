import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import { useState } from "react";

export default function App() {
  const [visibility, setVisibility] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login setVisibility={setVisibility} />}
        ></Route>
        {/*         <Route path="login" element={<Login />}  */}
        <Route path="home" element={<Header visibility={visibility} />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
