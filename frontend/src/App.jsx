import React from "react";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ForgetPage from "./pages/ForgetPage";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forget" element={<ForgetPage />} />
      </Routes>
    </div>
  );
}

export default App;
