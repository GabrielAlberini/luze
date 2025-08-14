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
        <div className="flex flex-col items-center justify-center gap-4 py-12">
          <h2 className="text-2xl font-bold text-red-600">
            Error al cargar los datos
          </h2>
          <p className="text-gray-600 text-center max-w-md">{error}</p>
          <button
            onClick={refreshCarpets}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
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
