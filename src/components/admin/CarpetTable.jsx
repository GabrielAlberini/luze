import React, { useState } from 'react';
import { Edit, Trash2, Eye, Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CarpetTable = ({ carpets, onDelete, loading }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('Todas');
  const [filterAvailable, setFilterAvailable] = useState('Todas');

  const categories = ['Todas', ...new Set(carpets.map((carpet) => carpet.category))];

  const filteredCarpets = carpets.filter((carpet) => {
    const matchesSearch =
      carpet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      carpet.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'Todas' || carpet.category === filterCategory;
    const matchesAvailable =
      filterAvailable === 'Todas' ||
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
      <div className="text-center py-20">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Cargando catálogo...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <h1 className="text-lg font-semibold text-gray-800">Gestión del Catálogo</h1>
        <button
          onClick={() => navigate('/admin/add')}
          className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-800 transition"
        >
          Agregar Nueva Alfombra
        </button>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-4 items-center px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="relative flex-1 max-w-sm">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar alfombras..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border-2 border-gray-200 rounded-md text-sm focus:outline-none focus:border-blue-600 transition"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter size={18} className="text-gray-500" />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-2 py-1 border-2 border-gray-200 rounded-md text-sm focus:outline-none focus:border-blue-600 transition"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            value={filterAvailable}
            onChange={(e) => setFilterAvailable(e.target.value)}
            className="px-2 py-1 border-2 border-gray-200 rounded-md text-sm focus:outline-none focus:border-blue-600 transition"
          >
            <option value="Todas">Todas</option>
            <option value="Disponible">Disponible</option>
            <option value="No disponible">No disponible</option>
          </select>
        </div>
      </div>

      {/* Info resultados */}
      <div className="px-6 py-2 text-gray-500 text-sm border-b border-gray-200">
        {filteredCarpets.length} de {carpets.length} alfombras
      </div>

      {/* Tabla */}
      {filteredCarpets.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <h3 className="text-lg font-semibold mb-2">No se encontraron alfombras</h3>
          <p>Prueba cambiando los filtros de búsqueda</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr>
                <th className="bg-gray-50 px-4 py-2 text-left font-semibold text-gray-700 border-b">
                  Imagen
                </th>
                <th className="bg-gray-50 px-4 py-2 text-left font-semibold text-gray-700 border-b">
                  Nombre
                </th>
                <th className="bg-gray-50 px-4 py-2 text-left font-semibold text-gray-700 border-b">
                  Categoría
                </th>
                <th className="bg-gray-50 px-4 py-2 text-left font-semibold text-gray-700 border-b">
                  Precio
                </th>
                <th className="bg-gray-50 px-4 py-2 text-left font-semibold text-gray-700 border-b">
                  Estado
                </th>
                <th className="bg-gray-50 px-4 py-2 text-left font-semibold text-gray-700 border-b">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredCarpets.map((carpet) => (
                <tr key={carpet.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">
                    <div className="w-20 h-14 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                      {carpet.image ? (
                        <img
                          src={carpet.image}
                          alt={carpet.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        'Sin imagen'
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-2 border-b">
                    <div>
                      <h4 className="font-medium text-gray-800">{carpet.name}</h4>
                      <p className="text-gray-500 text-xs">{carpet.description.substring(0, 100)}...</p>
                    </div>
                  </td>
                  <td className="px-4 py-2 border-b">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {carpet.category}
                    </span>
                  </td>
                  <td className="px-4 py-2 border-b font-semibold text-blue-600">
                    ${carpet.price}
                  </td>
                  <td className="px-4 py-2 border-b">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold uppercase ${carpet.available
                        ? 'bg-green-600 text-white'
                        : 'bg-red-600 text-white'
                        }`}
                    >
                      {carpet.available ? 'Disponible' : 'Vendida'}
                    </span>
                  </td>
                  <td className="px-4 py-2 border-b">
                    <div className="flex gap-2">
                      <button
                        onClick={() => navigate(`/admin/edit/${carpet.id}`)}
                        className="p-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition"
                        title="Editar"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(carpet)}
                        className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
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
