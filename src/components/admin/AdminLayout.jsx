import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Package, Plus, LogOut, Menu, X, Settings, ChevronRight } from 'lucide-react';
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

  const navigation = [
    { name: 'Agregar Alfombra', href: '/admin/add', icon: Plus, current: isActive('/admin/add') },
  ];

  // Generar breadcrumbs basado en la ruta actual
  const getBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs = [
      { name: 'Admin', href: '/admin', current: pathSegments.length === 1 }
    ];

    if (pathSegments[1] === 'add') {
      breadcrumbs.push({ name: 'Agregar Alfombra', href: '/admin/add', current: true });
    } else if (pathSegments[1] === 'edit' && pathSegments[2]) {
      breadcrumbs.push({ name: 'Editar Alfombra', href: location.pathname, current: true });
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Responsive */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo y título */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-gray-900">Luzé Admin</h1>
              </div>
            </div>

            {/* Navegación Desktop */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${item.current
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Acciones Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                <Home className="w-4 h-4 mr-2" />
                Ver Sitio
              </Link>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Cerrar Sesión
              </button>
            </div>

            {/* Botón móvil */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Abrir menú principal</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Breadcrumbs */}
        {breadcrumbs.length > 1 && (
          <div className="border-t border-gray-200 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2">
                  {breadcrumbs.map((breadcrumb, index) => (
                    <li key={breadcrumb.name} className="flex items-center">
                      {index > 0 && (
                        <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                      )}
                      {breadcrumb.current ? (
                        <span className="text-sm font-medium text-gray-900">
                          {breadcrumb.name}
                        </span>
                      ) : (
                        <Link
                          to={breadcrumb.href}
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          {breadcrumb.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        )}

        {/* Menú móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <div className="mt-4">
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <Home className="w-5 h-5 mr-3" />
                  Ver Sitio Web
                </Link>
                <button
                  onClick={() => {
                    closeMobileMenu();
                    handleLogout();
                  }}
                  className="flex items-center w-full px-3 py-2 text-base font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
