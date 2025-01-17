import React from 'react';
import aboutImage from '../images/about.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>
          <div className="mb-12">
          <img 
            src={aboutImage} 
            alt="Spice Market"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
        </div>
          <div className="prose max-w-none">
            <p className="mb-4">
            At Sizzle Spice Hub, we are dedicated to bringing premium dried spices to businesses across Europe. Our commitment to quality, competitive pricing, flexibility, and on-time delivery has made us a trusted partner in the spice industry.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission: Quality and Affordability</h2>
            <p className="mb-4">
            Our mission is simple: to bring authentic, flavorful spices directly to you, helping your business thrive. We source our spices from reliable, quality-focused producers, ensuring each batch meets high standards for freshness, flavor, and purity.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment</h2>
            <p className="mb-4">
              Quality is at the heart of everything we do. From careful selection of raw materials to 
              state-of-the-art processing and packaging, we ensure that our products meet the highest 
              standards of quality and food safety.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Sourcing</h3>
                <p className="text-sm">Direct partnerships with farmers to ensure the best quality raw materials.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Processing</h3>
                <p className="text-sm">Modern facilities with strict quality control measures.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Packaging</h3>
                <p className="text-sm">Advanced packaging solutions to preserve freshness and flavor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;