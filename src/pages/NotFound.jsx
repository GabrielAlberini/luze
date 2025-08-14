import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Search, ArrowLeft, AlertTriangle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Seo
        title="Página no encontrada | Luzé Rugs"
        description="La página que buscas no existe. Vuelve al inicio para explorar nuestras alfombras artesanales."
        noIndex={true}
      />
      <Header />

      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icono y número 404 */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-6">
              <AlertTriangle className="w-12 h-12 text-blue-600" />
            </div>
            <h1 className="text-6xl sm:text-8xl font-bold text-gray-900 mb-4">404</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Mensaje principal */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              ¡Ups! Página no encontrada
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-lg mx-auto">
              La página que estás buscando no existe o ha sido movida.
              Pero no te preocupes, tenemos muchas alfombras hermosas esperándote.
            </p>
          </div>

          {/* Sugerencias */}
          <div className="bg-gray-50 rounded-xl p-6 sm:p-8 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              ¿Qué puedes hacer?
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 text-left">
                <Search className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Explora nuestro catálogo</h4>
                  <p className="text-sm text-gray-600">Descubre nuestras alfombras artesanales únicas</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-left">
                <Home className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Vuelve al inicio</h4>
                  <p className="text-sm text-gray-600">Regresa a la página principal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGoHome}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <Home className="w-5 h-5" />
              Ir al inicio
            </button>
            <button
              onClick={handleGoBack}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver atrás
            </button>
          </div>

          {/* Contacto */}
          <div className="mt-12 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              ¿Necesitas ayuda?
            </h3>
            <p className="text-blue-800 mb-4">
              Si crees que esto es un error o necesitas ayuda para encontrar algo específico,
              no dudes en contactarnos.
            </p>
            <a
              href="https://wa.me/543498528087?text=Hola Luzé! Tuve un problema navegando en su sitio web y necesito ayuda."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;