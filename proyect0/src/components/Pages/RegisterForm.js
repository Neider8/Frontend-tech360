import { useState, useEffect } from 'react';
import { FiUser, FiMail, FiLock, FiPhone, FiAlertCircle } from 'react-icons/fi';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    role: 'user'
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    document.getElementById('name').focus();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Nombre completo es requerido';
    } else if (formData.name.length < 5) {
      newErrors.name = 'Mínimo 5 caracteres';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Correo electrónico es requerido';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Formato de email inválido';
    }

    if (!formData.password) {
      newErrors.password = 'Contraseña es requerida';
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Debe contener mayúsculas, minúsculas, números y símbolos (@$!%*?&)';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Número telefónico inválido';
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
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Error en el registro');
      }

      setSuccessMessage('¡Registro exitoso! Verifica tu email para activar la cuenta');
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        role: 'user'
      });

    } catch (error) {
      setSubmitError(error.message || 'Error al procesar el registro');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Crear Cuenta Nueva
        </h2>
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
                <FiAlertCircle className="mr-2" /> {successMessage}
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre Completo
              </label>
              <div className="mt-1 relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                    errors.name ? 'border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                  disabled={isLoading}
                />
                <FiUser className="absolute right-3 top-2.5 text-gray-400" />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <FiAlertCircle className="mr-1" /> {errors.name}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo Electrónico
              </label>
              <div className="mt-1 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
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

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirmar Contraseña
              </label>
              <div className="mt-1 relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                  disabled={isLoading}
                />
                <FiLock className="absolute right-3 top-2.5 text-gray-400" />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <FiAlertCircle className="mr-1" /> {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Teléfono (Opcional)
              </label>
              <div className="mt-1 relative">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                    errors.phone ? 'border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                  disabled={isLoading}
                />
                <FiPhone className="absolute right-3 top-2.5 text-gray-400" />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <FiAlertCircle className="mr-1" /> {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Tipo de Usuario
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                disabled={isLoading}
              >
                <option value="user">Usuario Normal</option>
                <option value="admin">Administrador</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Registrando...' : 'Crear Cuenta'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;