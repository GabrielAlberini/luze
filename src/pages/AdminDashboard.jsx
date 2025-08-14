import { useCarpets } from '../hooks/useCarpets';
import { deleteCarpet } from '../services/carpetService';
import CarpetTable from '../components/admin/CarpetTable';
import AdminLayout from '../components/admin/AdminLayout';
import Seo from '../components/Seo';
import { Package, DollarSign, CheckCircle, XCircle } from 'lucide-react';

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

  // Calcular estadísticas
  const stats = {
    total: carpets.length,
    available: carpets.filter(c => c.available).length,
    sold: carpets.filter(c => !c.available).length,
    totalValue: carpets.reduce((sum, c) => sum + (parseFloat(c.price) || 0), 0),
    categories: [...new Set(carpets.map(c => c.category))].length
  };

  const StatCard = ({ title, value, icon: Icon, color, description }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
      <div className="flex items-center">
        <div className={`p-2 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {description && (
            <p className="text-xs text-gray-500 mt-1">{description}</p>
          )}
        </div>
      </div>
    </div>
  );

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

      {/* Estadísticas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
        <StatCard
          title="Total Alfombras"
          value={stats.total}
          icon={Package}
          color="bg-blue-500"
          description="En el catálogo"
        />
        <StatCard
          title="Disponibles"
          value={stats.available}
          icon={CheckCircle}
          color="bg-green-500"
          description="Para venta"
        />
        <StatCard
          title="Vendidas"
          value={stats.sold}
          icon={XCircle}
          color="bg-red-500"
          description="No disponibles"
        />
        <StatCard
          title="Valor Total"
          value={`$${stats.totalValue.toLocaleString()}K`}
          icon={DollarSign}
          color="bg-purple-500"
          description="Del catálogo"
        />
      </div>

      {/* Tabla de alfombras */}
      <CarpetTable
        carpets={carpets}
        onDelete={handleDelete}
        loading={loading}
      />
    </AdminLayout>
  );
};

export default AdminDashboard;
