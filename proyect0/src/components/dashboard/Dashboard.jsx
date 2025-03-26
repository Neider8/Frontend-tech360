import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('authToken')) {
      navigate('/login');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <Header onLogout={handleLogout} />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <h1>Bienvenido al Sistema de Gestión</h1>
          {/* Contenido del CRM/Inventario */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;