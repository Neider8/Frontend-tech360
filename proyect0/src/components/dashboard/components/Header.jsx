const Header = ({ onLogout }) => {
    return (
      <header className="dashboard-header">
        <div className="logo">CRM System</div>
        <button onClick={onLogout}>Cerrar sesión</button>
      </header>
    );
  };
  
  export default Header;