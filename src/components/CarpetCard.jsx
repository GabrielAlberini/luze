import { useState } from 'react';
import { MessageSquareHeart, ZoomIn } from 'lucide-react';
import ImageModal from './ImageModal';

const CarpetCard = ({ carpet }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    if (carpet.image) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${!carpet.available ? 'opacity-70' : ''
          }`}
      >
        {/* Imagen */}
        <div className="relative h-64 overflow-hidden group">
          <div
            className="w-full h-full bg-center bg-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
            style={{ backgroundImage: `url(${carpet.image})` }}
            onClick={handleImageClick}
          />

          {/* Overlay con icono de zoom */}
          {carpet.image && (
            <div
              className="absolute inset-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center cursor-pointer"
              onClick={handleImageClick}
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn size={32} className="text-white" />
              </div>
            </div>
          )}

          {/* Badge de disponibilidad */}
          <div
            className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-semibold uppercase ${carpet.available ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
              }`}
          >
            {carpet.available ? 'Disponible' : 'Vendida'}
          </div>
        </div>

        {/* Contenido */}
        <div className="p-6">
          {/* Encabezado */}
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-gray-800">{carpet.name}</h3>
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
              {carpet.category}
            </span>
          </div>

          {/* Descripción */}
          <p className="text-gray-500 text-sm mb-6">{carpet.description}</p>

          {/* Footer */}
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-blue-600">${carpet.price}</span>
            {carpet.available ? (
              <a
                href={`https://wa.me/543498528087?text=Hola Luzé! estoy interesado en la alfombra ${carpet.name}.`}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md transition-all duration-300 hover:bg-blue-800 hover:-translate-y-0.5 hover:shadow-md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enviar mensaje por WhatsApp"
              >
                Consultar
                <MessageSquareHeart size={18} className="ml-1" />
              </a>
            ) : (
              <span className="inline-flex items-center px-4 py-2 bg-gray-400 text-white text-sm font-medium rounded-md cursor-not-allowed">
                No disponible
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Modal de imagen */}
      <ImageModal
        isOpen={isModalOpen}
        imageUrl={carpet.image}
        imageAlt={carpet.name}
        onClose={closeModal}
      />
    </>
  );
};

export default CarpetCard;
