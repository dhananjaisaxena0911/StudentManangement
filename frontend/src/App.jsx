import React from "react";
import SingUpPage from "./pages/SingUpPage";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/signup" element={<SingUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
