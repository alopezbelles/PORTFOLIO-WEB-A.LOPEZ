import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./Containers/Portfolio/Portfolio";
import About from "./Containers/About/About";
import Contact from "./Containers/Contact/Contact";
// import Experience from "./Containers/Experience/Experience";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Projects from "./Containers/Projects/Projects"

function App() {
  return (
    <div className="App">
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
