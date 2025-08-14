import React, { useState } from 'react';
import { Edit, Trash2, Eye, Search, Filter, Plus } from 'lucide-react';
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
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Gestión del Catálogo</h1>
            <p className="text-gray-600 mt-1">Administra tu colección de alfombras</p>
          </div>
          <button
            onClick={() => navigate('/admin/add')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Agregar Alfombra
          </button>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
        <div className="space-y-4">
          {/* Búsqueda */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar alfombras por nombre, descripción..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 transition-colors"
            />
          </div>

          {/* Filtros */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex items-center gap-2">
              <Filter className="text-gray-500 w-4 h-4" />
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 transition-colors"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    Categoría: {category}
                  </option>
                ))}
              </select>
            </div>

            <select
              value={filterAvailable}
              onChange={(e) => setFilterAvailable(e.target.value)}
              className="px-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 transition-colors"
            >
              <option value="Todas">Estado: Todas</option>
              <option value="Disponible">Estado: Disponible</option>
              <option value="No disponible">Estado: No disponible</option>
            </select>
          </div>

          {/* Info resultados */}
          <div className="text-gray-500 text-sm">
            {filteredCarpets.length} de {carpets.length} alfombras encontradas
          </div>
        </div>
      </div>

      {/* Contenido */}
      {filteredCarpets.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <div className="text-gray-400 mb-4">
            <Search className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-lg font-semibold text-gray-600 mb-2">No se encontraron alfombras</h3>
          <p className="text-gray-500">Prueba cambiando los filtros de búsqueda</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Tabla Desktop */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr>
                  <th className="bg-gray-50 px-6 py-4 text-left font-semibold text-gray-700 border-b">
                    Imagen
                  </th>
                  <th className="bg-gray-50 px-6 py-4 text-left font-semibold text-gray-700 border-b">
                    Nombre
                  </th>
                  <th className="bg-gray-50 px-6 py-4 text-left font-semibold text-gray-700 border-b">
                    Categoría
                  </th>
                  <th className="bg-gray-50 px-6 py-4 text-left font-semibold text-gray-700 border-b">
                    Precio
                  </th>
                  <th className="bg-gray-50 px-6 py-4 text-left font-semibold text-gray-700 border-b">
                    Estado
                  </th>
                  <th className="bg-gray-50 px-6 py-4 text-left font-semibold text-gray-700 border-b">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCarpets.map((carpet) => (
                  <tr key={carpet.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b">
                      <div className="w-20 h-16 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                        {carpet.image ? (
                          <img
                            src={carpet.image}
                            alt={carpet.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-gray-400 text-xs">Sin imagen</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 border-b">
                      <div>
                        <h4 className="font-semibold text-gray-800">{carpet.name}</h4>
                        <p className="text-gray-500 text-sm mt-1">
                          {carpet.description.substring(0, 80)}...
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 border-b">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                        {carpet.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 border-b">
                      <span className="font-bold text-blue-600 text-lg">
                        ${carpet.price}
                      </span>
                    </td>
                    <td className="px-6 py-4 border-b">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                          carpet.available
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {carpet.available ? 'Disponible' : 'Vendida'}
                      </span>
                    </td>
                    <td className="px-6 py-4 border-b">
                      <div className="flex gap-2">
                        <button
                          onClick={() => navigate(`/admin/edit/${carpet.id}`)}
                          className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                          title="Editar"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(carpet)}
                          className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                          title="Eliminar"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards Móvil */}
          <div className="lg:hidden">
            <div className="grid gap-4 p-4">
              {filteredCarpets.map((carpet) => (
                <div
                  key={carpet.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-4">
                    {/* Imagen */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                        {carpet.image ? (
                          <img
                            src={carpet.image}
                            alt={carpet.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-gray-400 text-xs text-center">Sin imagen</span>
                        )}
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-800 text-sm truncate">
                            {carpet.name}
                          </h4>
                          <p className="text-gray-500 text-xs mt-1 line-clamp-2">
                            {carpet.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-3">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                          {carpet.category}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold uppercase ${
                            carpet.available
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {carpet.available ? 'Disponible' : 'Vendida'}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <span className="font-bold text-blue-600 text-lg">
                          ${carpet.price}
                        </span>
                        <div className="flex gap-2">
                          <button
                            onClick={() => navigate(`/admin/edit/${carpet.id}`)}
                            className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                            title="Editar"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(carpet)}
                            className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                            title="Eliminar"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarpetTable;
