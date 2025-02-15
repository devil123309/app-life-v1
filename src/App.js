import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Content from "./pages/Content";
import About from "./pages/About"; // ✅ Make sure this path is correct
import "./pages/Style.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<About />} /> {/* ✅ Fixed */}
      </Routes>
    </Router>
  );
};

export default App;
