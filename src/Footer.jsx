import React from 'react';
import backgroundImage from './assets/carrot.jpg';

const Footer = () => {
  return (
    <footer className="py-12 relative">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})`, filter: 'brightness(70%)' }}></div>
      <div className="container mx-auto relative z-10">
        <div className="flex justify-between">
          {/* About Section */}
          <div className="w-1/4">
            <h4 className="text-white font-bold mb-4">About</h4>
            <ul className="text-white">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Our Story</li>
            </ul>
          </div>
          {/* Contact Section */}
          <div className="w-1/4">
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="text-green-600">
              <li>Email: info@example.com</li>
              <li>Phone: +123456789</li>
              <li>Address: 123 Main Street</li>
            </ul>
          </div>
          {/* Social Media Section */}
          <div className="w-1/4">
            <h4 className="text-white font-bold mb-4">Social Media</h4>
            <ul className="text-green-600">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          {/* Search Section */}
          <div className="w-1/4">
            <h4 className="text-white font-bold mb-4">Search</h4>
            <form className="flex">
              <input type="text" placeholder="Search..." className="px-4 py-2 rounded-l-full bg-white text-gray-800 focus:outline-none" />
              <button type="submit" className="px-4 py-2 rounded-r-full bg-blue-500 text-white hover:bg-blue-600">Search</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
