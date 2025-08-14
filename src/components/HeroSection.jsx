import fondo from '../assets/fondo-mobile.jpeg';

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-[70vh] flex items-center overflow-hidden"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="relative z-10 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[600px]">
            <h1 className="text-white mb-6 text-4xl md:text-5xl font-extrabold leading-tight">
              Fabrica de alfombras artesanales
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8">
              Realizadas con la técnica de Tufting Gun
            </p>
            <a
              href="/#filters"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium text-lg rounded-md transition-all duration-300 hover:bg-blue-800 hover:-translate-y-0.5 hover:shadow-md"
            >
              Ver Catálogo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
