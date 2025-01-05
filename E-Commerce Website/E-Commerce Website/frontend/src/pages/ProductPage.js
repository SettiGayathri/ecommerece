import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductRecommendations from '../components/ProductRecommendations';
import VirtualTryOn from '../components/VirtualTryOn';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="product-page">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} className="w-full h-auto mb-4" />
      <p className="text-lg mb-4">{product.description}</p>
      <p className="text-xl font-semibold mb-4">${product.price}</p>
      <VirtualTryOn />
      <ProductRecommendations />
    </div>
  );
};

export default ProductPage;