import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import RegisterForm from './components/auth/RegisterForm';
import RecoverPassword from './components/auth/RecoverPassword';
import NewPassword from './components/auth/NewPassword';
import Dashboard from './components/dashboard/Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<RegisterForm />} />
        <Route path="/recuperar-contrasena" element={<RecoverPassword />} />
        <Route path="/nueva-contrasena" element={<NewPassword />} />
        
          <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;