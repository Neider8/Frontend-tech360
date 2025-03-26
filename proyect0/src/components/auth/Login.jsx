import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from 'proyect0/src/styles/Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación
    localStorage.setItem('authToken', 'dummy-token');
    navigate('/dashboard');
  };

  return (
    <div className={styles.loginContainer}>
      
      
      <div className={styles.formSection}>
        <div className={styles.formWrapper}>
          <h1 className={styles.loginTitle}>Inicio de Sesión</h1>
          <p className={styles.loginSubtitle}>Accede a tu cuenta</p>
          
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.inputLabel}>Correo electrónico</label>
              <input
                type="email"
                id="email"
                className={styles.formInput}
                placeholder="Ingresa tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.inputLabel}>Contraseña</label>
              <input
                type="password"
                id="password"
                className={styles.formInput}
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Link to="/recuperar-contrasena" className={styles.forgotPassword}>
              ¿Olvidaste tu contraseña?
            </Link>

            <button type="submit" className={styles.loginButton}>
              Ingresar
            </button>

            <p className={styles.signupLink}>
              ¿No tienes cuenta? {' '}
              <Link to="/registro" className={styles.signupLinkAnchor}>
                Crear cuenta
              </Link>
            </p>
          </form>
        </div>
      </div>

      <div className={styles.logoSection}>
        <img 
          src="/logo.png" 
          alt="Logo" 
          className={styles.logoImage}
        />
      </div>
      
    </div>
  );
};

export default Login;