import { Instagram, MessageSquareHeart, MapPin, Clock, Mail, Phone, ArrowRight, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Información de la marca */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Luzé Rugs</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Fabrica de alfombras artesanales realizadas con la técnica de Tufting Gun
            </p>

            {/* Redes sociales */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/luze.rugs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-200"
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/543498528087?text=Hola Luzé! me gustaría conocer más sobre sus alfombras artesanales."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full transition-colors duration-200"
                aria-label="Contáctanos por WhatsApp"
              >
                <MessageSquareHeart className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#catalogo"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Catálogo
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">San Justo, Santa Fe</p>
                  <p className="text-gray-400 text-sm">Argentina</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Trabajamos online, dejanos un mensaje y cuando lo veamos te respondemos.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+543498528087"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +54 349 852-8087
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:info@luze-rugs.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  info@luzgrugs.com.ar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Luzé Rugs. Todos los derechos reservados.
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <a
                href="/privacidad"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Política de Privacidad
              </a>
              <a
                href="/terminos"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
