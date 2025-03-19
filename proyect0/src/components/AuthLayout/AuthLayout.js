import { Outlet, Link } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header de navegación */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold text-blue-600">
                CRM Inventory Pro
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink to="/login" text="Iniciar Sesión" />
              <NavLink to="/register" text="Registrarse" />
              <NavLink to="./components/1_Registro/NewPassword/NewPassword" text="Recuperar Acceso" />
            </div>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 CRM Inventory Pro. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

const NavLink = ({ to, text }) => (
  <Link
    to={to}
    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
  >
    {text}
  </Link>
);

export default AuthLayout;