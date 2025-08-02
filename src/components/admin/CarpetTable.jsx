import React, { useState } from 'react';
import { Edit, Trash2, Eye, Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CarpetTable = ({ carpets, onDelete, loading }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('Todas');
  const [filterAvailable, setFilterAvailable] = useState('Todas');

  const categories = ['Todas', ...new Set(carpets.map(carpet => carpet.category))];

  const filteredCarpets = carpets.filter(carpet => {
    const matchesSearch = carpet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      carpet.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'Todas' || carpet.category === filterCategory;
    const matchesAvailable = filterAvailable === 'Todas' ||
      (filterAvailable === 'Disponible' && carpet.available) ||
      (filterAvailable === 'No disponible' && !carpet.available);

    return matchesSearch && matchesCategory && matchesAvailable;
  });

  const handleDelete = (carpet) => {
    if (window.confirm(`¿Estás seguro de que quieres eliminar "${carpet.name}"?`)) {
      onDelete(carpet.id, carpet.imagePublicId || carpet.image);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando catálogo...</p>
      </div>
    );
  }

  return (
    <div className="carpet-table-container">
      <div className="table-header">
        <h1>Gestión del Catálogo</h1>
        <button
          onClick={() => navigate('/admin/add')}
          className="btn btn-primary"
        >
          Agregar Nueva Alfombra
        </button>
      </div>

      <div className="table-filters">
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Buscar alfombras..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <Filter size={20} />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            value={filterAvailable}
            onChange={(e) => setFilterAvailable(e.target.value)}
          >
            <option value="Todas">Todas</option>
            <option value="Disponible">Disponible</option>
            <option value="No disponible">No disponible</option>
          </select>
        </div>
      </div>

      <div className="results-info">
        {filteredCarpets.length} de {carpets.length} alfombras
      </div>

      {filteredCarpets.length === 0 ? (
        <div className="no-results">
          <h3>No se encontraron alfombras</h3>
          <p>Prueba cambiando los filtros de búsqueda</p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="carpet-table">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredCarpets.map(carpet => (
                <tr key={carpet.id}>
                  <td>
                    <div className="table-image">
                      {carpet.image ? (
                        <img src={carpet.image} alt={carpet.name} />
                      ) : (
                        <div className="no-image">Sin imagen</div>
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="carpet-info">
                      <h4>{carpet.name}</h4>
                      <p>{carpet.description.substring(0, 100)}...</p>
                    </div>
                  </td>
                  <td>
                    <span className="category-badge">{carpet.category}</span>
                  </td>
                  <td className="price-cell">
                    ${carpet.price}
                  </td>
                  <td>
                    <span className={`status-badge ${carpet.available ? 'available' : 'unavailable'}`}>
                      {carpet.available ? 'Disponible' : 'Vendida'}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        onClick={() => navigate(`/admin/edit/${carpet.id}`)}
                        className="btn btn-sm btn-secondary"
                        title="Editar"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(carpet)}
                        className="btn btn-sm btn-danger"
                        title="Eliminar"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CarpetTable;