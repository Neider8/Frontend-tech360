import { useState, useEffect } from 'react';
import { FiMail, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';

const RecoverPassword = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    document.getElementById('email').focus();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Formato de email inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    setSuccessMessage('');
    
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simular llamada API
      const response = await fetch('/api/auth/recover-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Error al procesar la solicitud');
      }

      setSuccessMessage('Se ha enviado un enlace de recuperación a tu correo electrónico');
      setEmail('');

    } catch (error) {
      setSubmitError(error.message || 'Error al enviar el enlace de recuperación');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Recuperar Contraseña
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Ingresa tu correo electrónico para recibir instrucciones de recuperación
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitError && (
              <div className="text-red-600 text-sm text-center bg-red-50 py-2 px-4 rounded-md flex items-center justify-center">
                <FiAlertCircle className="mr-2" /> {submitError}
              </div>
            )}

            {successMessage && (
              <div className="text-green-600 text-sm text-center bg-green-50 py-2 px-4 rounded-md flex items-center justify-center">
                <FiCheckCircle className="mr-2" /> {successMessage}
              </div>
            )}

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
                  onChange={handleEmailChange}
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
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Enviando instrucciones...' : 'Enviar enlace de recuperación'}
              </button>
            </div>

            <div className="text-center text-sm">
              <a 
                href="/login" 
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Volver al inicio de sesión
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;