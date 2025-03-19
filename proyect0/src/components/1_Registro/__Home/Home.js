import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Bienvenido al Sistema de Gestión
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <AuthCard 
            title="Iniciar Sesión"
            description="Accede a tu cuenta existente"
            link="/login"
            bgColor="bg-blue-100"
          />
          
          <AuthCard 
            title="Registrarse"
            description="Crea una nueva cuenta"
            link="/register"
            bgColor="bg-green-100"
          />
          
          <AuthCard 
            title="Recuperar Acceso"
            description="Restablece tu contraseña"
            link="/recover-password"
            bgColor="bg-orange-100"
          />
        </div>
      </div>
    </div>
  );
};

const AuthCard = ({ title, description, link, bgColor }) => (
  <div className={`p-6 rounded-lg ${bgColor} hover:shadow-lg transition-shadow`}>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link
      to={link}
      className="inline-block px-4 py-2 bg-white text-gray-800 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
    >
      Acceder →
    </Link>
  </div>
);

export default Home;