import React from 'react';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Legal Notice</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Responsible Person</h2>
            <p className="font-bold text-gray-800">Sizzle Spice Hub</p>
            
            <div className="mt-4">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Postal Address</h3>
              <p className="text-gray-600">Tannenfleckstraße 16, 82194 Gröbenzell</p>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Contact</h3>
              <p className="text-gray-600">Email: info@sizzlespicehub.de</p>
              <p className="text-gray-600">Phone: +49 173 9494497</p>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Represented by</h3>
              <p className="text-gray-600">Mayank Parmar</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Registration</h2>
            <p className="text-gray-600">Registration number: registration number</p>
            <p className="text-gray-600">Court: court - name</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">VAT Registration Number</h2>
            <p className="text-gray-600">VAT - id</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Business Identification Number</h2>
            <p className="text-gray-600">Business (wirtschafts) - id</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Professional Liability Insurance</h2>
            <p className="text-gray-600">insurance company</p>
            
            <div className="mt-4">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Scope of Insurance Coverage</h3>
              <p className="text-gray-600">scope of insurance coverage</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Website Information</h2>
            
            <div className="mt-4">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Copyright Notice</h3>
              <p className="text-gray-600">[Please add information]</p>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Responsible for Journalistic-Editorial Content</h3>
              <p className="text-gray-600">Mayank Parmar</p>
            </div>
          </section>

          <footer className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 italic">
              This legal notice was created with the help of the{' '}
              <a 
                href="https://www.activemind.de/generatoren/impressum/" 
                target="_blank" 
                rel="noopener"
                className="text-blue-600 hover:underline"
              >
                Legal Notice Generator of activeMind AG
              </a>
              {' '}(Version 2024-07-05).
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Impressum;