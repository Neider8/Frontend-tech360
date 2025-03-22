import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css"; // Importamos los estilos

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación...
    navigate("/dashboard");
  };

  return (
    <div className={styles.loginContainer}>
      {/* Sección de la imagen */}
      <div className={styles.loginImageSection}>
        <img 
          src="https://placehold.co/683x910" 
          alt="Login Visual" 
          className={styles.loginImage} 
        />
      </div>

      {/* Sección del formulario */}
      <div className={styles.loginFormSection}>
        <h1 className={styles.loginTitle}>Inicio de Sesión</h1>
        <p className={styles.loginSubtitle}>Login your account in a seconds</p>

        <form onSubmit={handleSubmit}>
          {/* Campo Email */}
          <div className={styles.inputContainer}>
            <input
              type="email"
              className={styles.loginInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              required
            />
            <label className={styles.inputLabel}>Email Address</label>
          </div>

          {/* Campo Password */}
          <div className={styles.inputContainer}>
            <input
              type="password"
              className={styles.loginInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              required
            />
            <label className={styles.inputLabel}>Password</label>
          </div>

          {/* Enlace Olvidé contraseña */}
          <Link to="/recover-password" className={styles.forgotPassword}>
            ¿Olvidaste tu contraseña?
          </Link>

          {/* Botón de Login */}
          <button type="submit" className={styles.loginButton}>
            Log in
          </button>
        </form>

        {/* Texto de registro */}
        <p className={styles.registerText}>
          <span>¿No tienes cuenta?</span>
          <Link to="/register">Registrarse</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;