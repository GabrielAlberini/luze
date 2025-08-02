import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1>LUZÉ RUGS</h1>
            <p>Alfombras artesanales realizadas con la técnica de Tufting Gun</p>
            <a href='/#filters' className="btn btn-primary btn-large">
              Ver Catálogo
            </a>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="./fondo.jpeg"
          alt="Alfombras artesanales"
        />
      </div>
    </section>
  );
};

export default HeroSection;