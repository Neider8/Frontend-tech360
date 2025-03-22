import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para actualizar la contraseña (puedes usar una API o Firebase, etc.)
    console.log("Nueva contraseña:", password);
    navigate("/login"); // Redirigir al login después de actualizar
  };

  return (
    <div>
      <h2>Nueva Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nueva Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirmar Contraseña:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default NewPassword;