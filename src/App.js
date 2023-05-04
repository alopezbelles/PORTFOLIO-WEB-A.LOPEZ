import "./App.css";
import React, { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Portfolio from "./Containers/Portfolio/Portfolio";
import About from "./Containers/About/About";
import Contact from "./Containers/Contact/Contact";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Projects from "./Containers/Projects/Projects"
import Spinner from "./Components/Spinner/Spinner";


function App() {

  const [showSpinner, setShowSpinner] = useState(true);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 500);
  }, []);

  return (
    <div className="App">
        {showSpinner && <Spinner />}

      <BrowserRouter>
        <Header />
        <Routes
        onNavigationStart={() => setLoading(true)}
        onNavigationEnd={() => setLoading(false)}>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/projects/:id"
            element={<Projects setLoading={setLoading} />}
          />
        </Routes>
        {loading && <Spinner />}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
