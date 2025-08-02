import React, { useState, useEffect } from 'react';
import { Upload, X, Save, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../../services/categories';

const CarpetForm = ({ carpet, onSubmit, loading, title }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Tradicional',
    available: true
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (carpet) {
      setFormData({
        name: carpet.name || '',
        description: carpet.description || '',
        price: carpet.price || '',
        category: carpet.category || 'Tradicional',
        available: carpet.available !== undefined ? carpet.available : true
      });
      setImagePreview(carpet.image || '');
    }
  }, [carpet]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Limpiar error del campo
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview('');
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es requerida';
    }

    if (!formData.price || formData.price <= 0) {
      newErrors.price = 'El precio debe ser mayor a 0';
    }

    if (!carpet && !imageFile) {
      newErrors.image = 'La imagen es requerida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const submitData = {
      ...formData
    };

    onSubmit(submitData, imageFile);
  };

  return (
    <div className="carpet-form-container">
      <div className="form-header">
        <button
          onClick={() => navigate('/admin')}
          className="btn btn-secondary"
        >
          <ArrowLeft size={20} />
          Volver al Catálogo
        </button>
        <h1>{title}</h1>
      </div>

      <form onSubmit={handleSubmit} className="carpet-form">
        <div className="form-grid">
          <div className="form-section">
            <h3>Información Básica</h3>

            <div className="form-group">
              <label htmlFor="name">Nombre de la Alfombra *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={errors.name ? 'error' : ''}
                placeholder="Ej: Alfombra Andina Tradicional"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="description">Descripción *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className={errors.description ? 'error' : ''}
                placeholder="Describe las características, materiales y técnicas utilizadas..."
                rows="4"
              />
              {errors.description && <span className="error-message">{errors.description}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="price">Precio ($) *</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className={errors.price ? 'error' : ''}
                  placeholder="0"
                  min="0"
                  step="0.01"
                />
                {errors.price && <span className="error-message">{errors.price}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="category">Categoría</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="available"
                  checked={formData.available}
                  onChange={handleInputChange}
                />
                Disponible para venta
              </label>
            </div>
          </div>

          <div className="form-section">
            <h3>Imagen del Producto</h3>

            <div className="image-upload-section">
              {imagePreview ? (
                <div className="image-preview">
                  <img src={imagePreview} alt="Preview" />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="remove-image-btn"
                  >
                    <X size={20} />
                  </button>
                </div>
              ) : (
                <div className="image-upload-placeholder">
                  <Upload size={48} />
                  <p>Sube una imagen de la alfombra</p>
                </div>
              )}

              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="image-input"
              />

              <label htmlFor="image" className="btn btn-secondary">
                <Upload size={20} />
                {imagePreview ? 'Cambiar Imagen' : 'Seleccionar Imagen'}
              </label>

              {errors.image && <span className="error-message">{errors.image}</span>}
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button
            type="button"
            onClick={() => navigate('/admin')}
            className="btn btn-secondary"
            disabled={loading}
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
            <Save size={20} />
            {loading ? 'Guardando...' : 'Guardar Alfombra'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarpetForm;