import { useState } from "react";
import { MessageSquareHeart, ZoomIn } from "lucide-react";
import ImageModal from "./ImageModal";

const CarpetCard = ({ carpet }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    if (carpet.image) setIsModalOpen(true);
  };

  return (
    <>
      <div
        className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${!carpet.available ? "opacity-70" : ""
          }`}
      >
        {/* Imagen */}
        <div className="relative aspect-square overflow-hidden group">
          <div
            className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-[1px] cursor-pointer"
            style={{ backgroundImage: `url(${carpet.image})` }}
            onClick={handleImageClick}
          />

          {carpet.image && (
            <div
              className="absolute inset-0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center cursor-pointer"
              onClick={handleImageClick}
            >
              <ZoomIn
                size={28}
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          )}

          {/* Badge disponibilidad */}
          <div
            className={`absolute top-2 right-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-sm ${carpet.available ? "bg-green-500" : "bg-red-500"
              } text-white`}
          >
            {carpet.available ? "Disponible" : "Vendida"}
          </div>
        </div>

        {/* Contenido */}
        <div className="flex flex-col flex-1 p-4 sm:p-6">
          {/* Título */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
              {carpet.name}
            </h3>
          </div>

          {/* Precio + Botón */}
          <div className="mt-auto space-y-3">
            <span className="block text-lg font-semibold text-gray-500">
              ${carpet.price}
            </span>

            {carpet.available ? (
              <a
                href={`https://wa.me/543498528087?text=Hola Luzé! estoy interesado en la alfombra ${carpet.name}.`}
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm sm:text-base font-medium rounded-full shadow-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-md hover:-translate-y-0.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar
                <MessageSquareHeart size={18} className="ml-2" />
              </a>
            ) : (
              <span className="w-full inline-flex items-center justify-center px-4 py-2 bg-gray-400 text-white text-sm sm:text-base font-medium rounded-full cursor-not-allowed">
                No disponible
              </span>
            )}
          </div>
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        imageUrl={carpet.image}
        imageAlt={carpet.name}
        description={carpet.description}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CarpetCard;
