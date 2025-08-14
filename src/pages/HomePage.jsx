import { useState, useMemo } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FilterBar from '../components/FilterBar';
import CatalogSection from '../components/CatalogSection';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';
import TeamSection from '../components/TeamSection';
import { useCarpets } from '../hooks/useCarpets';
import { categories } from '../services/categories';
import Seo from '../components/Seo';

const HomePage = () => {
  const { carpets, loading } = useCarpets();
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [showAvailable, setShowAvailable] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCarpets = useMemo(() => {
    return carpets.filter(carpet => {
      const matchesCategory = selectedCategory === 'Todas' || carpet.category === selectedCategory;
      const matchesAvailability = !showAvailable || carpet.available;
      const matchesSearch = carpet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        carpet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        carpet.category.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesAvailability && matchesSearch;
    });
  }, [carpets, selectedCategory, showAvailable, searchTerm]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Seo
        title="Luzé Rugs | Fabrica de alfombras artesanales"
        description="Explorá nuestra colección de alfombras tufting hechas a mano. Diseños únicos, arte textil y decoración moderna."
      />
      <Header />
      <HeroSection />
      <TeamSection />
      <div className="bg-gray-50 border-b border-gray-200">
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          showAvailable={showAvailable}
          onAvailabilityChange={setShowAvailable}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      </div>
      <main className="flex-1">
        <CatalogSection carpets={filteredCarpets} loading={loading} />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
