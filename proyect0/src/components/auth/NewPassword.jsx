import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from 'proyect0/src/styles/NewPassword.module.css';

const NewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de actualización
    navigate('/login');
  };

  return (
    <div className={styles.passwordContainer}>
      
      <div className={styles.formSection}>
        <div className={styles.formContent}>
          <h1 className={styles.title}>Nueva Contraseña</h1>
          
          <form onSubmit={handleSubmit} className={styles.passwordForm}>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.inputLabel}>
                Ingresa nueva contraseña
              </label>
              <input
                type="password"
                id="password"
                className={styles.formInput}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword" className={styles.inputLabel}>
                Confirmar contraseña
              </label>
              <input
                type="password"
                id="confirmPassword"
                className={styles.formInput}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Actualizar contraseña
            </button>

            <div className={styles.backLink}>
              <button 
                type="button" 
                onClick={() => navigate('/login')}
                className={styles.backButton}
              >
                ← Volver a Inicio de Sesión
              </button>
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

export default NewPassword;