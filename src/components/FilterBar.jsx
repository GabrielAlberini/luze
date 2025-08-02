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
    <div id='filters' className="filter-bar">
      <div className="container">
        <div className="filter-content">
          <div className="search-box">
            <input
              type="text"
              placeholder="Buscar alfombras..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filters">
            <div className="filter-group">
              <label htmlFor='category'>Categoría:</label>
              <select
                id="category"
                name="category"
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={showAvailable}
                  onChange={(e) => onAvailabilityChange(e.target.checked)}
                  className="checkbox"
                />
                Solo disponibles
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;