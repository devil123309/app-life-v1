import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header.js";
import Content from "./pages/Content.js";
import About from "./pages/About.js";
import Patient from "./pages/Patient.js";
import Donor from "./pages/Donor.js";
import SIGNUP from "./pages/SIGNUP.js";
import LoginModal from "./pages/LoginModal.js";  
import "./pages/Style.css";  

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/about" element={<About />} />
          <Route path="/patients" element={<Patient />} />
          <Route path="/donors" element={<Donor />} />
          <Route path="/login" element={<LoginModal />} /> 
          <Route path="/signup" element={<SIGNUP />} />  
        </Routes>
      </main>
    </Router>
  );
};

export default App;