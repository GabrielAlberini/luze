import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Package, Plus, Settings } from 'lucide-react';

const AdminLayout = ({ children }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <h2>Admin Panel</h2>
          <p>Alfombras Artesanales</p>
        </div>
        
        <nav className="admin-nav">
          <Link 
            to="/" 
            className="admin-nav-item"
          >
            <Home size={20} />
            Ver Sitio Web
          </Link>
          
          <Link 
            to="/admin" 
            className={`admin-nav-item ${isActive('/admin') ? 'active' : ''}`}
          >
            <Package size={20} />
            Catálogo
          </Link>
          
          <Link 
            to="/admin/add" 
            className={`admin-nav-item ${isActive('/admin/add') ? 'active' : ''}`}
          >
            <Plus size={20} />
            Agregar Alfombra
          </Link>
        </nav>
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