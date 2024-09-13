import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/pages/Navbar";
import Contact from "./components/pages/Contact";
import Service from "./components/pages/Services";
import Blogepg from "./components/pages/Bloges"; // Check spelling of this component
import About from "./components/pages/About";
import Layout from "./components/Layout";
import { Footer } from "./components/pages/Footer";
import Login from "./components/pages/Login";
import ForgatePassword from "./components/pages/ForgatePassword";
import NewAccount from "./components/pages/CreateAccount";

function App() {
  return (
    <div className="bg-[#ECECEC]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/contact" element={<Contact />} /> {/* Match this */}
          <Route path="/blogs" element={<Blogepg />} /> {/* Fix path */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newpassword" element={<ForgatePassword />} />
          <Route path="/newAccount" element={<NewAccount />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
