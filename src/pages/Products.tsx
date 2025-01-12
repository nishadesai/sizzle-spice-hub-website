import React from 'react';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
                >
                  <MessageCircle size={18} className="mr-2" />
                  Contact Us
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;