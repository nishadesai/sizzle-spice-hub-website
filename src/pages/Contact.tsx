import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    selectedProducts: [] as string[], // Array for selected products
    message: '',
    agreeToPolicy: false,
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownButtonRef = useRef<HTMLDivElement | null>(null);

  // Function to handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
        dropdownButtonRef.current && !dropdownButtonRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset the messages on form submission
    setSuccessMessage(null);
    setErrorMessage(null);

    // Format the data to send in the email
    const emailContent = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      selected_products: formData.selectedProducts.join(', '),
      message: formData.message,
      agree_to_policy: formData.agreeToPolicy ? 'Yes' : 'No',
    };

    // Send email using EmailJS
    emailjs.send('service_id', 'template_id', emailContent, 'user_id')
      .then((response) => {
        console.log('Email successfully sent:', response);
        // Show success message
        setSuccessMessage('Your message has been sent successfully!');
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        // Show error message
        setErrorMessage('Oops! Something went wrong, please try again later.');
      });
  };

  const handleCheckboxChange = (productName: string) => {
    setFormData((prevState) => {
      const isSelected = prevState.selectedProducts.includes(productName);
      const updatedProducts = isSelected
        ? prevState.selectedProducts.filter((p) => p !== productName)
        : [...prevState.selectedProducts, productName];

      return { ...prevState, selectedProducts: updatedProducts };
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-12">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Success or Error message */}
          {successMessage && (
            <div className="p-4 mb-4 text-green-700 bg-green-100 border border-green-300 rounded">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="p-4 mb-4 text-red-700 bg-red-100 border border-red-300 rounded">
              {errorMessage}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Select Products for Inquiry</label>
            <div
              ref={dropdownButtonRef}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {formData.selectedProducts.length > 0
                ? formData.selectedProducts.join(', ')
                : 'Select products'}
            </div>
            {dropdownOpen && (
              <div ref={dropdownRef} className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                <ul className="max-h-48 overflow-auto">
                  {products.map((product) => (
                    <li key={product.id} className="px-4 py-2 hover:bg-gray-100">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          value={product.name}
                          checked={formData.selectedProducts.includes(product.name)}
                          onChange={() => handleCheckboxChange(product.name)}
                        />
                        <span>{product.name}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="agreeToPolicy"
              name="agreeToPolicy"
              checked={formData.agreeToPolicy}
              onChange={(e) => setFormData({ ...formData, agreeToPolicy: e.target.checked })}
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              required
            />
            <label htmlFor="agreeToPolicy" className="ml-2 text-sm text-gray-700">
              By selecting this, you agree to our{' '}
              <Link to="/privacy-policy" className="text-indigo-600 underline">
                privacy policy
              </Link>
              .
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Let's talk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
