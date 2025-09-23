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
        <div className="relative aspect-[4/3] overflow-hidden group">
          <div
            className="w-full h-full bg-center bg-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
            style={{ backgroundImage: `url(${carpet.image})` }}
            onClick={handleImageClick}
          />

          {/* Overlay con icono */}
          {carpet.image && (
            <div
              className="absolute inset-0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center cursor-pointer"
              onClick={handleImageClick}
            >
              <ZoomIn
                size={32}
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          )}

          {/* Badge */}
          <div
            className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-semibold uppercase ${carpet.available ? "bg-green-600" : "bg-red-600"
              } text-white`}
          >
            {carpet.available ? "Disponible" : "Vendida"}
          </div>
        </div>

        {/* Contenido */}
        <div className="flex flex-col flex-1 p-5">
          {/* Encabezado */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-semibold text-gray-800">
              {carpet.name}
            </h3>
            <span className="bg-blue-600 text-white px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap">
              {carpet.category}
            </span>
          </div>

          {/* Footer → Precio + Botón */}
          <div className="mt-auto space-y-3">
            <span className="block text-xl font-bold text-blue-600">
              ${carpet.price}
            </span>

            {carpet.available ? (
              <a
                href={`https://wa.me/543498528087?text=Hola Luzé! estoy interesado en la alfombra ${carpet.name}.`}
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md transition-all duration-300 hover:bg-blue-800 hover:-translate-y-0.5 hover:shadow-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar
                <MessageSquareHeart size={18} className="ml-1" />
              </a>
            ) : (
              <span className="w-full inline-flex items-center justify-center px-4 py-2 bg-gray-400 text-white text-sm font-medium rounded-md cursor-not-allowed">
                No disponible
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
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
