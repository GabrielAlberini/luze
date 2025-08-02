import { Instagram } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-container">
              <a href="/">
                <img
                  width="120px"
                  height="auto"
                  src="./logo.png"
                  alt="Luzé Rugs Logo"
                  className="logo-image"
                />
              </a>
            </div>
          </div>

          <nav className="nav">
            <a
              href="https://www.instagram.com/luze.rugs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Síguenos en Instagram"
              className="social-link"
            >
              <Instagram size={24} />
              <span className="social-text">Instagram</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;