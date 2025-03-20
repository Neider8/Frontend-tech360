import { useState } from 'react';
import { FiMenu, FiUser, FiBox, FiDollarSign, FiActivity, FiShoppingCart, FiSettings } from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const stats = [
    { title: 'Ventas Hoy', value: '$24,500', icon: FiDollarSign, color: 'bg-green-100' },
    { title: 'Órdenes', value: '1,230', icon: FiShoppingCart, color: 'bg-blue-100' },
    { title: 'Inventario', value: '850 Items', icon: FiBox, color: 'bg-purple-100' },
    { title: 'Actividad', value: '98%', icon: FiActivity, color: 'bg-orange-100' }
  ];

  const salesData = [
    { name: 'Lun', ventas: 4000 },
    { name: 'Mar', ventas: 6500 },
    { name: 'Mié', ventas: 2300 },
    { name: 'Jue', ventas: 7100 },
    { name: 'Vie', ventas: 8900 },
    { name: 'Sáb', ventas: 4500 },
    { name: 'Dom', ventas: 6800 }
  ];

  const recentActivities = [
    { id: 1, product: 'Laptop HP', action: 'Actualización de stock', time: 'Hace 15 min', status: 'Completado' },
    { id: 2, product: 'Mouse Inalámbrico', action: 'Nuevo pedido', time: 'Hace 30 min', status: 'Pendiente' },
    { id: 3, product: 'Teclado Mecánico', action: 'Envío realizado', time: 'Hace 2 horas', status: 'En camino' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 z-20 
        ${isSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full'}`}>
        
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800 flex items-center">
            <FiUser className="mr-2" /> Admin Panel
          </h2>
        </div>

        <nav className="mt-4">
          {[
            { name: 'dashboard', label: 'Dashboard', icon: FiActivity },
            { name: 'inventory', label: 'Inventario', icon: FiBox },
            { name: 'sales', label: 'Ventas', icon: FiDollarSign },
            { name: 'settings', label: 'Configuración', icon: FiSettings }
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveMenu(item.name)}
              className={`w-full flex items-center px-4 py-3 text-sm font-medium transition-colors
                ${activeMenu === item.name 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <item.icon className="mr-3 text-lg" />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className={`transition-margin duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <FiMenu className="text-xl" />
            </button>
            
            <div className="flex items-center">
              <div className="mr-4 text-right">
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray-500">Administrador</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <FiUser className="text-blue-600" />
              </div>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 text-sm">{stat.title}</p>
                    <p className="text-2xl font-bold mt-2">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <stat.icon className="text-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sales Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
            <h3 className="text-lg font-semibold mb-4">Rendimiento de Ventas</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="ventas" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Actividad Reciente</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="pb-3">Producto</th>
                    <th className="pb-3">Acción</th>
                    <th className="pb-3">Hora</th>
                    <th className="pb-3">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {recentActivities.map((activity) => (
                    <tr key={activity.id} className="border-b last:border-b-0">
                      <td className="py-4">{activity.product}</td>
                      <td className="py-4">{activity.action}</td>
                      <td className="py-4">{activity.time}</td>
                      <td className="py-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          activity.status === 'Completado' ? 'bg-green-100 text-green-600' :
                          activity.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-blue-100 text-blue-600'
                        }`}>
                          {activity.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;