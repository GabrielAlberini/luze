import { useState, useMemo, useEffect } from 'react';
import CarpetCard from './CarpetCard';
import Pagination from './Pagination';

const CatalogSection = ({ carpets, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // Detectar tamaño de pantalla y ajustar items por página
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 640) {
        setItemsPerPage(3); // Móvil
      } else {
        setItemsPerPage(6); // Pantallas más grandes
      }
    };

    updateItemsPerPage(); // Ejecutar al montar
    window.addEventListener('resize', updateItemsPerPage);

    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const paginatedCarpets = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return carpets.slice(startIndex, endIndex);
  }, [carpets, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(carpets.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [carpets.length, itemsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    document.getElementById('catalogo')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, carpets.length);

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Cargando alfombras...</p>
      </div>
    );
  }

  if (carpets.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        <h3 className="text-lg font-semibold mb-2">No se encontraron alfombras</h3>
        <p>Prueba cambiando los filtros de búsqueda</p>
      </div>
    );
  }

  return (
    <section className="py-20" id="catalogo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-800 text-3xl font-bold mb-4">Nuestro Catálogo</h2>
          <div className="text-gray-400 text-sm font-medium">
            {carpets.length} alfombra{carpets.length !== 1 ? 's' : ''} encontrada
            {carpets.length !== 1 ? 's' : ''}
            {totalPages > 1 && (
              <span className="block mt-1">
                Mostrando {startItem}-{endItem} de {carpets.length}
              </span>
            )}
          </div>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedCarpets.map((carpet) => (
            <CarpetCard key={carpet.id} carpet={carpet} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default CatalogSection;
