import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Content from "./pages/Content";
import About from "./pages/About";
import Patient from "./pages/Patient";
import Donor from "./pages/Donor";
import SIGNUP from "./pages/SIGNUP";
import LoginModal from "./pages/LoginModal";  
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
