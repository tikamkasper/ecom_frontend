import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Header from "./components/layout/header/Header.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import Home from "./components/home/Home.jsx";
import Signup from "./components/user/Signup.jsx";
import Login from "./components/user/Login.jsx";
import NotFound from "./components/layout/NotFound.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup title="signup" />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
