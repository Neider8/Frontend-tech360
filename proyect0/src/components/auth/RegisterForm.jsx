import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from 'proyect0/src/styles/RegisterForm.module.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de registro
    navigate('/login');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.registerContainer}>
      

      <div className={styles.formSection}>
        <div className={styles.formContent}>
          <h1 className={styles.registerTitle}>Registro</h1>
          <p className={styles.registerSubtitle}>Crea tu cuenta</p>

          <form onSubmit={handleSubmit} className={styles.registerForm}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName" className={styles.inputLabel}>Nombre</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className={styles.formInput}
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="lastName" className={styles.inputLabel}>Apellido</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className={styles.formInput}
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.inputLabel}>Correo electrónico</label>
              <input
                id="email"
                name="email"
                type="email"
                className={styles.formInput}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.inputLabel}>Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                className={styles.formInput}
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className={styles.registerButton}>
              Crear cuenta
            </button>

            <p className={styles.loginLink}>
              ¿Ya tienes cuenta? {' '}
              <Link to="/login" className={styles.loginLinkAnchor}>
                Inicia sesión
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

export default RegisterForm;