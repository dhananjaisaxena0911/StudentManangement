import React from "react";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ForgetPage from "./pages/ForgetPage";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Aurora from "./components/Bits/Aurora";
import DashBoardPage from "./pages/DashBordPage";
import Footer from "./components/Footer";
import Chatbot from "./components/ChatBot";

function App() {
  return (
    <div className="">
      <Aurora
        colorStops={["#BFECFF", "#CDC1FF", "#FFF6E3", "#FFCCEA"]}
        blend={0}
        amplitude={1.0}
        speed={0.5}
        className="absolute -z-10 -top-6"
      />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forget" element={<ForgetPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
      </Routes>
      <Chatbot/>
      <Footer/>
    </div>
  );
}

export default App;
