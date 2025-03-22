import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RecoverPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para recuperar contraseña (puedes usar una API o Firebase, etc.)
    console.log("Email para recuperar:", email);
    navigate("/new-password"); // Redirigir a la página de nueva contraseña
  };

  return (
    <div>
      <h2>Recuperar Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <p>
        ¿Recordaste tu contraseña? <Link to="/login">Inicia Sesión</Link>
      </p>
    </div>
  );
};

export default RecoverPassword;