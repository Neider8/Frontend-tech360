import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import RegisterForm from "./components/RegisterForm";
import RecoverPassword from "./components/RecoverPassword";
import NewPassword from "./components/NewPassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/" element={<Login />} /> // Ruta por defecto
      </Routes>
    </Router>
  );
};

export default App;