import { Instagram } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <a href="/" className="block">
              <img
                width="120"
                src="./logo.png"
                alt="Luzé Rugs Logo"
                className="rounded-md transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>

          {/* Social Link */}
          <nav className="flex items-center gap-8">
            <a
              href="https://www.instagram.com/luze.rugs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Síguenos en Instagram"
              className="flex items-center justify-center p-2 border-2 border-gray-200 rounded-md bg-white text-gray-800 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-md hover:-translate-y-0.5"
            >
              <Instagram size={24} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
