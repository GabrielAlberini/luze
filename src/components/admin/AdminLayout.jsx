import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Package, Plus, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const AdminLayout = ({ children }) => {
  const location = useLocation();
  const { logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    if (window.confirm('¿Estás seguro de que quieres cerrar sesión?')) {
      logout();
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className={`admin-layout ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      {/* Mobile Header */}
      <div className="admin-mobile-header">
        <h1>Panel Admin</h1>
        <div className="admin-mobile-actions">
          <button
            onClick={handleLogout}
            className="mobile-logout-button"
            title="Cerrar sesión"
          >
            <LogOut size={18} />
          </button>
          <button
            onClick={toggleMobileMenu}
            className="mobile-menu-button"
            title={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={closeMobileMenu}
        />
      )}

      <aside className="admin-sidebar">
        <div className="admin-logo">
          <h2>Admin Panel</h2>
          <p>Alfombras Artesanales</p>
        </div>

        <nav className="admin-nav">
          <Link
            to="/"
            className="admin-nav-item"
            onClick={closeMobileMenu}
          >
            <Home size={20} />
            Ver Sitio Web
          </Link>

          <Link
            to="/admin"
            className={`admin-nav-item ${isActive('/admin') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <Package size={20} />
            Catálogo
          </Link>

          <Link
            to="/admin/add"
            className={`admin-nav-item ${isActive('/admin/add') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <Plus size={20} />
            Agregar Alfombra
          </Link>
        </nav>

        <div className="admin-sidebar-footer">
          <button
            onClick={handleLogout}
            className="admin-nav-item logout-button"
          >
            <LogOut size={20} />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <div className="admin-content">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;