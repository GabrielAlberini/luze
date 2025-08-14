import { Hammer, Package } from 'lucide-react';

const TeamSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-gray-800 text-3xl font-bold mb-4">¿Quienes somos?</h2>
          <p className="text-gray-500 text-lg">Conoce nuestro pequeño gigante equipo</p>
        </div>

        {/* Grid de equipo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Gabriel */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="h-72 overflow-hidden">
              <img
                src="./yo.jpg"
                alt="Gabriel Alberini"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative p-8 text-center">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center rounded-full shadow-md bg-gradient-to-br from-blue-600 to-blue-400 text-white">
                <Hammer size={24} />
              </div>
              <h3 className="text-gray-800 text-xl font-bold mt-6 mb-1">Gabriel Alberini</h3>
              <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-6">
                Producción y Fabricación
              </p>
            </div>
          </div>

          {/* Luciana */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="h-72 overflow-hidden">
              <img
                src="./luciana.jpg"
                alt="Luciana Giné"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative p-8 text-center">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center rounded-full shadow-md bg-gradient-to-br from-blue-600 to-blue-400 text-white">
                <Package size={24} />
              </div>
              <h3 className="text-gray-800 text-xl font-bold mt-6 mb-1">Luciana Giné</h3>
              <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-6">
                Gestión y Contenido
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
