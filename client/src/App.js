import {BrowserRouter,Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Appointment from "./pages/Appointment";
import Docters from "./pages/Docters";
import Nav from "./components/nav";
import Footer from "./components/footer";
import css from "./pages/css/style.css";
 
function App() {
  return (
      <BrowserRouter>
      <Nav />
      <Routes >
        <Route path="/" element={<HomePage/>} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/docters" element={<Docters/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
