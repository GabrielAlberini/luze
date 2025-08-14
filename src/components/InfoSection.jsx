import { Palette, RefreshCw, Calculator } from 'lucide-react';
import { useState } from 'react';

const InfoSection = () => {
  const [width, setWidth] = useState(25); // cm
  const [height, setHeight] = useState(25); // cm
  const pricePerSquareMeter = 330000; // precio base por m²

  const areaInM2 = (width / 100) * (height / 100);
  const estimatedPrice = areaInM2 * pricePerSquareMeter;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-gray-800 text-3xl font-bold mb-4">¿Cómo trabajamos?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Te mostramos nuestro proceso artesanal y cómo calculamos el precio final de tu alfombra.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Precio Personalizado */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-white mx-auto mb-6">
              <Palette size={32} />
            </div>
            <h3 className="text-gray-800 text-lg font-semibold mb-4">Precio a medida</h3>
            <p className="text-gray-500 leading-relaxed">
              Cada alfombra es única. El valor depende de la <strong>cantidad de colores</strong> y la{' '}
              <strong>complejidad del diseño</strong> que elijas.
            </p>
          </div>

          {/* Reproducimos Diseños */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-white mx-auto mb-6">
              <RefreshCw size={32} />
            </div>
            <h3 className="text-gray-800 text-lg font-semibold mb-4">Recreamos diseños</h3>
            <p className="text-gray-500 leading-relaxed">
              ¿Viste un modelo que te encantó pero ya fue vendido? <strong>¡Podemos hacerlo de nuevo!</strong> Lo adaptamos y producimos especialmente para vos.
            </p>
          </div>

          {/* Calculadora */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center transition-transform hover:-translate-y-1 hover:shadow-lg md:col-span-2">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-white mx-auto mb-6">
              <Calculator size={32} />
            </div>
            <h3 className="text-gray-800 text-lg font-semibold mb-6">Calculadora de presupuesto</h3>

            <label className="block mb-6 text-gray-700 font-medium">
              Ancho: {width} cm
              <input
                type="range"
                min="25"
                max="100"
                step={5}
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full mt-2 accent-blue-600 h-3 rounded-lg appearance-none cursor-pointer bg-blue-100 focus:outline-none focus:ring-0"
              />
            </label>

            <label className="block mb-6 text-gray-700 font-medium">
              Largo: {height} cm
              <input
                type="range"
                min="25"
                max="100"
                step={5}
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full mt-2 accent-blue-600 h-3 rounded-lg appearance-none cursor-pointer bg-blue-100 focus:outline-none focus:ring-0 focus:outline-offset-0"
              />
            </label>

            <div className="mt-4 text-xl font-bold text-blue-800 bg-gray-100 py-3 rounded-md">
              <strong>Precio estimado:</strong> ${estimatedPrice.toLocaleString('es-AR')}
              <span className="block text-sm font-normal text-gray-600 mt-1">
                Incluye mano de obra y materiales. Este presupuesto podrá ajustarse según la complejidad del diseño.
              </span>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div
          className="text-center p-8 rounded-xl shadow-sm border border-gray-200 bg-cover bg-center bg-[#0128ff]"
        >
          <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
            Escribinos por WhatsApp y contanos tu idea. Podemos ayudarte a elegir colores, tamaños y diseño para que tu alfombra sea perfecta.
          </p>
          <a
            href={`https://wa.me/543498528087?text=Hola Luzé! Me gustaría conocer más sobre sus alfombras artesanales. Mi presupuesto estimado es de $${estimatedPrice.toLocaleString('es-AR')}.`}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-medium text-lg rounded-md transition-all duration-300 hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enviar mensaje por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
