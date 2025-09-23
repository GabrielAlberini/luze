import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

const ImageModal = ({ isOpen, imageUrl, imageAlt, description, onClose }) => {
  // Cerrar modal con ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevenir scroll del body
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-90 transition-opacity"
        onClick={onClose}
        aria-label="Cerrar imagen"
      />

      {/* Modal */}
      <div className="relative z-10 max-w-5xl max-h-[95vh] w-full">
        {/* Imagen con botón cerrar */}
        <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 flex items-center justify-center w-8 h-8 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition"
            aria-label="Cerrar imagen"
          >
            <X size={20} />
          </button>

          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-auto max-h-[70vh] object-contain"
            loading="lazy"
            draggable="false"
          />

          {/* Descripción */}
          {description && (
            <div className="p-4 bg-white text-gray-700 text-sm text-center">
              {description}
            </div>
          )}
        </div>

        {/* Footer con info */}
        <div className="mt-4 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-white text-sm opacity-90">
            <p className="flex items-center gap-1">
              <ZoomIn size={16} />
              Haz clic fuera de la imagen para cerrar
            </p>
            <span className="hidden sm:inline">•</span>
            <p>Presiona ESC para cerrar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
