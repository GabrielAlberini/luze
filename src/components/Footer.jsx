import { Instagram, MessageSquareHeart, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo */}
          <div>
            <a href="/" className="inline-block">
              <img
                width="240"
                src="./logo.png"
                alt="Luzé Rugs Logo"
                className="rounded-md"
              />
            </a>
          </div>

          {/* Información */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Información</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={18} className="text-white" />
                <span>San Justo, Santa Fe</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock size={18} className="text-white" />
                <span>Lun - Vie: 9:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/543498528087?text=Hola Luzé! me gustaría conocer más sobre sus alfombras artesanales."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-transform duration-300 hover:translate-x-1"
              >
                <MessageSquareHeart size={18} className="text-white" />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/luze.rugs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-transform duration-300 hover:translate-x-1"
              >
                <Instagram size={18} className="text-white" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025 Luzé Alfombras Artesanales. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
