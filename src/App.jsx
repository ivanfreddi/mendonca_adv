import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Doenca from "./pages/Doenca";
import Acidente from "./pages/Acidente";
import BpcLoas from "./pages/BpcLoas";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Auxilio-Doenca" element={<Doenca />} />
          <Route path="/Auxilio-Acidente" element={<Acidente />} />
          <Route path="/BPC-Loas" element={<BpcLoas />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
