import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 dark:bg-gray-950 text-gray-300 dark:text-gray-400 py-12 transition-colors duration-300">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src={logo} alt="AerosVision Logo" className="h-8 w-auto dark:invert" />
            </Link>
            <p className="text-sm">
              Empowering individuals and businesses through comprehensive educational resources and innovative solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com/AerosVision" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white dark:hover:text-indigo-400 transition-colors duration-300" aria-label="Facebook"><Facebook size={24} /></a>
              <a href="https://twitter.com/AerosVision" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white dark:hover:text-indigo-400 transition-colors duration-300" aria-label="Twitter"><Twitter size={24} /></a>
              <a href="https://linkedin.com/company/AerosVision" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white dark:hover:text-indigo-400 transition-colors duration-300" aria-label="LinkedIn"><Linkedin size={24} /></a>
              <a href="https://instagram.com/AerosVision" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white dark:hover:text-indigo-400 transition-colors duration-300" aria-label="Instagram"><Instagram size={24} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-white dark:text-gray-100 text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white dark:hover:text-indigo-400 transition-colors duration-300 text-sm">About Us</Link></li>
              <li><Link to="/explore" className="hover:text-white dark:hover:text-indigo-400 transition-colors duration-300 text-sm">Explore Courses</Link></li>
              <li><Link to="/plans" className="hover:text-white dark:hover:text-indigo-400 transition-colors duration-300 text-sm">Plans & Pricing</Link></li>
              <li><Link to="/business" className="hover:text-white dark:hover:text-indigo-400 transition-colors duration-300 text-sm">AerosVision Business</Link></li>
              <li><Link to="/teach" className="hover:text-white dark:hover:text-indigo-400 transition-colors duration-300 text-sm">Teach on AerosVision</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white dark:text-gray-100 text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-white dark:hover:text-indigo-400 transition-colors duration-300 text-sm">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-white dark:hover:text-indigo-400 transition-colors duration-300 text-sm">FAQ</Link></li>
              <li><Link to="/help-center" className="hover:text-white dark:hover:text-indigo-400 transition-colors duration-300 text-sm">Help Center</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white dark:hover:text-indigo-400 transition-colors duration-300 text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white dark:hover:text-indigo-400 transition-colors duration-300 text-sm">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white dark:text-gray-100 text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="px-4 py-2 w-full rounded-l-md border border-gray-600 dark:border-gray-700 bg-gray-700 dark:bg-gray-800 text-white dark:text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
      <div className="bg-gray-900 dark:bg-gray-900 text-gray-400 dark:text-gray-500 py-4 text-center text-sm transition-colors duration-300">
        <div className="container mx-auto px-4">
          &copy; {new Date().getFullYear()} AerosVision. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;