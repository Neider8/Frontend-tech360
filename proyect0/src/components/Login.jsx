import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación (puedes usar una API o Firebase, etc.)
    console.log("Email:", email, "Password:", password);
    navigate("/dashboard"); // Redirigir al dashboard después del login
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
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
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Ingresar</button>
      </form>
      <p>
        ¿No tienes una cuenta? <Link to="/register">Registrate</Link>
      </p>
      <p>
        ¿Olvidaste tu contraseña? <Link to="/recover-password">Recuperar</Link>
      </p>
    </div>
  );
};

export default Login;