import { useCarpets } from '../hooks/useCarpets';
import { deleteCarpet } from '../services/carpetService';
import CarpetTable from '../components/admin/CarpetTable';
import AdminLayout from '../components/admin/AdminLayout';
import Seo from '../components/Seo';

const AdminDashboard = () => {
  const { carpets, loading, error, refreshCarpets } = useCarpets();

  const handleDelete = async (id, imageUrl) => {
    try {
      // Extraer public_id de la URL de Cloudinary si existe
      let imagePublicId = null;
      if (imageUrl && imageUrl.includes('cloudinary.com')) {
        const urlParts = imageUrl.split('/');
        const uploadIndex = urlParts.findIndex(part => part === 'upload');
        if (uploadIndex !== -1 && urlParts[uploadIndex + 2]) {
          // Obtener el public_id (sin extensión)
          const publicIdWithExt = urlParts.slice(uploadIndex + 2).join('/');
          imagePublicId = publicIdWithExt.split('.')[0];
        }
      }

      await deleteCarpet(id, imagePublicId);
      refreshCarpets();
    } catch (error) {
      console.error('Error deleting carpet:', error);
      alert('Error al eliminar la alfombra. Por favor, inténtalo de nuevo.');
    }
  };

  if (error) {
    return (
      <AdminLayout>
        <Seo
          title="Error en el panel | Luzé Rugs"
          description="Ocurrió un error al cargar los datos del panel de administración."
          noIndex={true}
        />
        <div className="error-container">
          <h2>Error al cargar los datos</h2>
          <p>{error}</p>
          <button onClick={refreshCarpets} className="btn btn-primary">
            Reintentar
          </button>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <Seo
        title="Panel de administración | Luzé Rugs"
        description="Área interna para gestionar el catálogo de alfombras."
        noIndex={true}
      />
      <CarpetTable
        carpets={carpets}
        onDelete={handleDelete}
        loading={loading}
      />
    </AdminLayout>
  );
};

export default AdminDashboard;
