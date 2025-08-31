import React from 'react';
import { Sun, Moon } from 'lucide-react';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => (
  <button
    onClick={toggleDarkMode}
    className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
    aria-label="Toggle dark mode"
  >
    {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
  </button>
);

export default DarkModeToggle;