import React from 'react';

const FilterBar = ({
  categories,
  selectedCategory,
  onCategoryChange,
  showAvailable,
  onAvailabilityChange,
  searchTerm,
  onSearchChange
}) => {
  return (
    <div
      id="filters"
      className="bg-gray-50 py-6 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenedor adaptable */}
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-6 sm:items-center sm:justify-between">

          {/* Buscador */}
          <div className="w-full sm:flex-1 min-w-[250px]">
            <input
              type="text"
              placeholder="Buscar alfombras..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-md text-sm focus:outline-none focus:border-blue-600 transition"
            />
          </div>

          {/* Filtros */}
          <div className="flex flex-row gap-4 sm:flex-row sm:flex-wrap sm:gap-6 sm:items-center w-full sm:w-auto">

            {/* Categoría */}
            <div className="flex items-center gap-2">
              <label htmlFor="category" className="font-medium text-gray-800 whitespace-nowrap">
                Categoría:
              </label>
              <select
                id="category"
                name="category"
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="px-2 py-1 border-2 border-gray-200 rounded-md text-sm focus:outline-none focus:border-blue-600 transition bg-white"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Disponibilidad */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showAvailable}
                onChange={(e) => onAvailabilityChange(e.target.checked)}
                className="w-4 h-4 accent-blue-600"
              />
              <span className="font-medium text-gray-800">Solo disponibles</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
