import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateCarpet } from '../services/carpetService';
import { useCarpets } from '../hooks/useCarpets';
import CarpetForm from '../components/admin/CarpetForm';
import AdminLayout from '../components/admin/AdminLayout';

const EditCarpet = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { carpets, loading: carpetsLoading } = useCarpets();
  const [loading, setLoading] = useState(false);
  const [carpet, setCarpet] = useState(null);

  useEffect(() => {
    if (carpets.length > 0) {
      const foundCarpet = carpets.find(c => c.id === id);
      if (foundCarpet) {
        setCarpet(foundCarpet);
      } else {
        navigate('/admin');
      }
    }
  }, [carpets, id, navigate]);

  const handleSubmit = async (carpetData, imageFile) => {
    try {
      setLoading(true);
      await updateCarpet(id, carpetData, imageFile);
      navigate('/admin');
    } catch (error) {
      console.error('Error updating carpet:', error);
      alert('Error al actualizar la alfombra. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  if (carpetsLoading) {
    return (
      <AdminLayout>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Cargando datos de la alfombra...</p>
        </div>
      </AdminLayout>
    );
  }

  if (!carpet) {
    return (
      <AdminLayout>
        <div className="error-container">
          <h2>Alfombra no encontrada</h2>
          <button onClick={() => navigate('/admin')} className="btn btn-primary">
            Volver al catálogo
          </button>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <CarpetForm
        carpet={carpet}
        onSubmit={handleSubmit}
        loading={loading}
        title={`Editar: ${carpet.name}`}
      />
    </AdminLayout>
  );
};

export default EditCarpet;