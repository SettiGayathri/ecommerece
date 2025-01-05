import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">E-Commerce Website</h1>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/marketplace" className="text-white hover:text-gray-300">Marketplace</Link>
          <Link to="/products" className="text-white hover:text-gray-300">Products</Link>
          <Link to="/virtual-try-on" className="text-white hover:text-gray-300">Virtual Try-On</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;