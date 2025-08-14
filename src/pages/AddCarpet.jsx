import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addCarpet } from '../services/carpetService';
import CarpetForm from '../components/admin/CarpetForm';
import AdminLayout from '../components/admin/AdminLayout';

const AddCarpet = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (carpetData, imageFile) => {
    try {
      setLoading(true);
      await addCarpet(carpetData, imageFile);
      navigate('/admin');
    } catch (error) {
      console.error('Error adding carpet:', error);
      alert('Error al agregar la alfombra. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <CarpetForm
        onSubmit={handleSubmit}
        loading={loading}
        title="Agregar Nueva Alfombra"
      />
    </AdminLayout>
  );
};

export default AddCarpet;
