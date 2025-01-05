import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const CampusMarketplace = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarketplaceItems = async () => {
      try {
        const response = await axios.get('/api/marketplace');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching marketplace items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMarketplaceItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Campus Marketplace</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.id} className="border rounded-lg p-4">
            <h4 className="font-bold">{item.title}</h4>
            <p>{item.description}</p>
            <p className="text-lg font-semibold">${item.price}</p>
            <p className="text-gray-600">Seller: {item.seller}</p>
          </div>
        ))}
      </div>
    </div>
  );
};