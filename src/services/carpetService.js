import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { uploadImageToCloudinary, deleteImageFromCloudinary } from '../config/cloudinary';

const COLLECTION_NAME = 'carpets';

// Obtener todas las alfombras
export const getCarpets = async () => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const carpets = [];
    
    querySnapshot.forEach((doc) => {
      carpets.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return carpets;
  } catch (error) {
    console.error('Error getting carpets:', error);
    throw error;
  }
};

// Agregar nueva alfombra
export const addCarpet = async (carpetData, imageFile) => {
  try {
    let imageUrl = '';
    let imagePublicId = '';
    
    // Subir imagen si existe
    if (imageFile) {
      const uploadResult = await uploadImageToCloudinary(imageFile);
      imageUrl = uploadResult.url;
      imagePublicId = uploadResult.public_id;
    }
    
    // Agregar alfombra a Firestore
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...carpetData,
      image: imageUrl,
      imagePublicId: imagePublicId,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    
    return docRef.id;
  } catch (error) {
    console.error('Error adding carpet:', error);
    throw error;
  }
};

// Actualizar alfombra
export const updateCarpet = async (id, carpetData, imageFile) => {
  try {
    const carpetRef = doc(db, COLLECTION_NAME, id);
    let updateData = {
      ...carpetData,
      updatedAt: serverTimestamp()
    };
    
    // Si hay nueva imagen, subirla
    if (imageFile) {
      const uploadResult = await uploadImageToCloudinary(imageFile);
      updateData.image = uploadResult.url;
      updateData.imagePublicId = uploadResult.public_id;
    }
    
    await updateDoc(carpetRef, updateData);
    return true;
  } catch (error) {
    console.error('Error updating carpet:', error);
    throw error;
  }
};

// Eliminar alfombra
export const deleteCarpet = async (id, imagePublicId) => {
  try {
    // Eliminar imagen de Cloudinary si existe
    if (imagePublicId) {
      try {
        await deleteImageFromCloudinary(imagePublicId);
      } catch (error) {
        console.log('Error deleting image:', error);
      }
    }
    
    // Eliminar documento de Firestore
    await deleteDoc(doc(db, COLLECTION_NAME, id));
    return true;
  } catch (error) {
    console.error('Error deleting carpet:', error);
    throw error;
  }
};