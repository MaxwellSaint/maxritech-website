import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Architecture from "./components/Architecture";
import Systems from "./components/Systems";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Products from "./components/Products";
import CaseStudies from "./components/CaseStudies";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<About />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/systems" element={<Systems />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Products />} />
            <Route path="/case-studies" element={<CaseStudies />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}