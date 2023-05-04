import "./App.css";
import React, { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Portfolio from "./Containers/Portfolio/Portfolio";
import About from "./Containers/About/About";
import Contact from "./Containers/Contact/Contact";
// import Experience from "./Containers/Experience/Experience";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Projects from "./Containers/Projects/Projects"
import Spinner from "./Components/Spinner/Spinner";


function App() {

  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
        {showSpinner && <Spinner />}

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/experience" element={<Experience />} /> */}
          <Route path="/projects/:id" element={<Projects/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
