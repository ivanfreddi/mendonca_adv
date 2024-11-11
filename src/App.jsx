import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Doenca from "./pages/Doenca";
import Acidente from "./pages/Acidente";
import BpcLoas from "./pages/BpcLoas";
import WhatsappButton from "./components/WhatsappButton";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Auxilio-Doenca" element={<Doenca />} />
          <Route path="/Auxilio-Acidente" element={<Acidente />} />
          <Route path="/BPC-Loas" element={<BpcLoas />} />
        </Routes>
        <WhatsappButton />
        <Footer />
      </Router>
    </>
  );
}

export default App;
