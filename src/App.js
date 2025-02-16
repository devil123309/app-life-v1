 import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Content from "./pages/Content";
import About from "./pages/About";  
import Donor from "./pages/Donor";  
import Patient from "./pages/Patient";  
import "./pages/Style.css"; // Ensure the correct path

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/donors" element={<Donor />} /> 
          <Route path="/patients" element={<Patient />} /> 
        </Routes>
      </main>
    </Router>
  );
};
 

export default App;
