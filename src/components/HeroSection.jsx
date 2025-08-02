import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1>Fabrica de alfombras artesanales</h1>
            <p>Realizadas con la técnica de Tufting Gun</p>
            <a href='/#filters' className="btn btn-primary btn-large">
              Ver Catálogo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;