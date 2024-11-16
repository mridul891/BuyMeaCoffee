import { Route, Routes } from "react-router-dom";
import "./App.css";

import Landing from "./Component/Landing";
import About from "./Component/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
