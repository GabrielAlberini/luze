import React from 'react';
import CarpetCard from './CarpetCard';

const CatalogSection = ({ carpets, loading }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando alfombras...</p>
      </div>
    );
  }

  if (carpets.length === 0) {
    return (
      <div className="no-results">
        <h3>No se encontraron alfombras</h3>
        <p>Prueba cambiando los filtros de búsqueda</p>
      </div>
    );
  }

  return (
    <section className="catalog-section" id="catalogo">
      <div className="container">
        <div className="section-header">
          <h2>Nuestro Catálogo</h2>
          <p>Descubre nuestra colección de alfombras artesanales únicas</p>
          <div className="results-count">
            {carpets.length} alfombra{carpets.length !== 1 ? 's' : ''} encontrada{carpets.length !== 1 ? 's' : ''}
          </div>
        </div>
        
        <div className="carpet-grid">
          {carpets.map(carpet => (
            <CarpetCard key={carpet.id} carpet={carpet} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;