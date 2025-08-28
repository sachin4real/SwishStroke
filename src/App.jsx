import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/common/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
