import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from 'proyect0/src/styles/RecoverPassword.module.css';


const RecoverPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de recuperación de contraseña
  };

  return (
    <div className={styles.recoverContainer}>
      
      
      <div className={styles.formSection}>
        <div className={styles.formWrapper}>
          <h1 className={styles.recoverTitle}>Recuperar Contraseña</h1>
          
          <form onSubmit={handleSubmit} className={styles.recoverForm}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.inputLabel}>
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className={styles.formInput}
                placeholder="Ingresa tu correo registrado"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>
            <Link to="/nueva-contrasena" className={styles.submitButton}>
                Aceptar
              </Link>
            </button>

            <div className={styles.backLink}>
              <Link to="/nueva-contrasena" className={styles.backLinkAnchor}>
                ← Volver a Inicio de Sesión
              </Link>
            </div>
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

export default RecoverPassword;