import { Route, Routes } from "react-router-dom";
import "./App.css";

import Landing from "./Component/Landing";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import Signin from "./Component/Signin";
import Signup from "./Component/Signup";
import Dashboard from "./Component/dashboard";
import User from "./Component/User";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
