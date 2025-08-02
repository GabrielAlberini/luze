import { useState, useEffect } from 'react';
import { getCarpets } from '../services/carpetService';

export const useCarpets = () => {
  const [carpets, setCarpets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCarpets = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getCarpets();
      setCarpets(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching carpets:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCarpets();
  }, []);

  const refreshCarpets = () => {
    fetchCarpets();
  };

  return {
    carpets,
    loading,
    error,
    refreshCarpets
  };
};