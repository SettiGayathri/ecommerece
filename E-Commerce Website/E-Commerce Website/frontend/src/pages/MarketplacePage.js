import React, { useEffect, useState } from 'react';
import CampusMarketplace from '../components/CampusMarketplace';

const MarketplacePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchMarketplaceItems = async () => {
      try {
        const response = await fetch('/api/marketplace'); // Adjust the API endpoint as needed
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching marketplace items:', error);
      }
    };

    fetchMarketplaceItems();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Campus Marketplace</h1>
      <CampusMarketplace items={items} />
    </div>
  );
};

export default MarketplacePage;