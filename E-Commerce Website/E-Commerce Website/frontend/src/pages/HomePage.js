import React from 'react';
import VirtualTryOn from '../components/VirtualTryOn';
import ProductRecommendations from '../components/ProductRecommendations';
import CampusMarketplace from '../components/CampusMarketplace';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to E-Commerce Website</h1>
      
      {/* Virtual Try-On Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Virtual Try-On</h2>
        <VirtualTryOn />
      </section>

      {/* Recommended Products Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Recommended For You</h2>
        <ProductRecommendations />
      </section>

      {/* Campus Marketplace Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Campus Marketplace</h2>
        <CampusMarketplace />
      </section>
    </div>
  );
};

export default HomePage;