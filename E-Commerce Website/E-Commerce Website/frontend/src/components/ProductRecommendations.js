import React, { useEffect, useState } from 'react';

const ProductRecommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch('/api/recommendations');
        const data = await response.json();
        setRecommendations(data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div className="product-recommendations">
      <h3 className="text-xl font-semibold mb-4">You May Also Like</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
            <h4 className="font-bold">{product.name}</h4>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-semibold">${product.price}</p>
            <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              View Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRecommendations;