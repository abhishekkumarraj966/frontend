import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/pages/Navbar";
import Contact from "./components/pages/Contact";
import Service from "./components/pages/Services";
import Blogepg from "./components/pages/Bloges";
import About from "./components/pages/About";
import Layout from "./components/Layout";
import { Footer}  from "./components/pages/Footer";
function App() {
  return (
    <div className="bg-[#ECECEC]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Layout />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/bloge" element={<Blogepg />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
