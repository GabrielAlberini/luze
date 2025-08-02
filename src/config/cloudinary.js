// Configuración de Cloudinary
export const CLOUDINARY_CONFIG = {
  cloud_name: 'dvvr2l5l1',
  upload_preset: 'luze-project' // Necesitarás crear este preset en tu dashboard de Cloudinary
};

// URL base para transformaciones
export const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CONFIG.cloud_name}`;

// Función para subir imagen a Cloudinary
export const uploadImageToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_CONFIG.upload_preset);
  formData.append('cloud_name', CLOUDINARY_CONFIG.cloud_name);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloud_name}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error('Error uploading image to Cloudinary');
    }

    const data = await response.json();
    return {
      url: data.secure_url,
      public_id: data.public_id
    };
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
};

// Función para eliminar imagen de Cloudinary
export const deleteImageFromCloudinary = async (publicId) => {
  try {
    // Nota: Para eliminar imágenes necesitarás configurar un endpoint en tu backend
    // o usar el Admin API de Cloudinary con tu API secret
    console.log('Image deletion should be handled on backend:', publicId);
    return true;
  } catch (error) {
    console.error('Error deleting from Cloudinary:', error);
    throw error;
  }
};

// Función para generar URLs con transformaciones
export const getOptimizedImageUrl = (publicId, transformations = {}) => {
  const {
    width = 'auto',
    height = 'auto',
    crop = 'fill',
    quality = 'auto',
    format = 'auto'
  } = transformations;

  return `${CLOUDINARY_BASE_URL}/image/upload/w_${width},h_${height},c_${crop},q_${quality},f_${format}/${publicId}`;
};