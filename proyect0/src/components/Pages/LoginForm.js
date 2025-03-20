import { useState, useEffect } from 'react';
import { FiMail, FiLock, FiAlertCircle } from 'react-icons/fi';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    // Auto-focus en el primer input al cargar
    document.getElementById('email').focus();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Correo electrónico inválido';
    }

    if (!password.trim()) {
      newErrors.password = 'La contraseña es requerida';
    } else if (password.length < 8) {
      newErrors.password = 'Mínimo 8 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simular llamada API
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error de autenticación');
      }

      // Manejar éxito (redirección, etc.)
      console.log('Login exitoso');

    } catch (error) {
      setSubmitError(error.message || 'Error al iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Acceso al Sistema
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <div className="mt-1 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                    errors.email ? 'border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                  disabled={isLoading}
                />
                <FiMail className="absolute right-3 top-2.5 text-gray-400" />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <FiAlertCircle className="mr-1" /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                    errors.password ? 'border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                  disabled={isLoading}
                />
                <FiLock className="absolute right-3 top-2.5 text-gray-400" />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <FiAlertCircle className="mr-1" /> {errors.password}
                  </p>
                )}
              </div>
            </div>

            {submitError && (
              <div className="text-red-600 text-sm text-center bg-red-50 py-2 px-4 rounded-md flex items-center justify-center">
                <FiAlertCircle className="mr-2" /> {submitError}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Autenticando...' : 'Iniciar sesión'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;