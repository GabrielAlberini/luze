import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FilterBar from './components/FilterBar';
import CatalogSection from './components/CatalogSection';
import AdminDashboard from './pages/AdminDashboard';
import AddCarpet from './pages/AddCarpet';
import EditCarpet from './pages/EditCarpet';
import { useCarpets } from './hooks/useCarpets';
import { categories } from './services/categories';
import './App.css';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import TeamSection from './components/TeamSection';

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
    <div className="App">
      <Header />
      <HeroSection />
      <TeamSection />
      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        showAvailable={showAvailable}
        onAvailabilityChange={setShowAvailable}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <CatalogSection carpets={filteredCarpets} loading={loading} />
      <InfoSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add" element={<AddCarpet />} />
        <Route path="/admin/edit/:id" element={<EditCarpet />} />
      </Routes>
    </Router>
  );
}

export default App;