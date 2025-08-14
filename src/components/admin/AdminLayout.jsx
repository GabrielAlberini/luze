import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Package, Plus, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const AdminLayout = ({ children }) => {
  const location = useLocation();
  const { logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    if (window.confirm('¿Estás seguro de que quieres cerrar sesión?')) {
      logout();
    }
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Mobile */}
      <header className="md:hidden bg-white border-b border-gray-200 px-3 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-base sm:text-lg font-semibold text-gray-900">Panel Admin</h1>
          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              to="/"
              className="p-1.5 sm:p-2 text-gray-600 hover:text-gray-900 transition"
              title="Ver Sitio Web"
            >
              <Home size={18} className="sm:w-5 sm:h-5" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 text-gray-600 hover:text-gray-900 transition"
              title="Menú"
            >
              {mobileMenuOpen ? <X size={18} className="sm:w-5 sm:h-5" /> : <Menu size={18} className="sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={closeMobileMenu}>
          <div className="absolute right-0 top-0 h-full w-56 sm:w-64 bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-3 sm:p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-base sm:text-lg font-semibold text-gray-900">Admin Panel</h2>
                <button
                  onClick={closeMobileMenu}
                  className="p-1 text-gray-500 hover:text-gray-700"
                >
                  <X size={18} className="sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            <nav className="p-3 sm:p-4">
              <div className="space-y-1 sm:space-y-2">
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition text-sm sm:text-base"
                >
                  <Home size={18} className="sm:w-5 sm:h-5" />
                  Ver Sitio Web
                </Link>
                <Link
                  to="/admin"
                  onClick={closeMobileMenu}
                  className={`flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 rounded-lg transition text-sm sm:text-base ${isActive('/admin') ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  <Package size={18} className="sm:w-5 sm:h-5" />
                  Catálogo
                </Link>
                <Link
                  to="/admin/add"
                  onClick={closeMobileMenu}
                  className={`flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 rounded-lg transition text-sm sm:text-base ${isActive('/admin/add') ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  <Plus size={18} className="sm:w-5 sm:h-5" />
                  Agregar Alfombra
                </Link>
              </div>
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 border-t border-gray-200">
              <button
                onClick={() => {
                  closeMobileMenu();
                  handleLogout();
                }}
                className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 w-full text-left text-red-600 hover:bg-red-50 rounded-lg transition text-sm sm:text-base"
              >
                <LogOut size={18} className="sm:w-5 sm:h-5" />
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex">
        {/* Sidebar Desktop */}
        <aside className="hidden md:block w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Admin Panel</h2>
            <p className="text-sm text-gray-500 mt-1">Alfombras Artesanales</p>
          </div>

          <nav className="p-4">
            <div className="space-y-2">
              <Link
                to="/"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
              >
                <Home size={20} />
                Ver Sitio Web
              </Link>
              <Link
                to="/admin"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${isActive('/admin') ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <Package size={20} />
                Catálogo
              </Link>
              <Link
                to="/admin/add"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${isActive('/admin/add') ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <Plus size={20} />
                Agregar Alfombra
              </Link>
            </div>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2 w-full text-left text-red-600 hover:bg-red-50 rounded-lg transition"
            >
              <LogOut size={20} />
              Cerrar Sesión
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
