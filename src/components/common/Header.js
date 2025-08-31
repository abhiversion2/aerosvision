import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import logo from '../../assets/logo.png';

const navItems = [
  {
    name: 'Explore',
    path: '/explore',
    type: 'dropdown',
    subItems: [
      {
        name: 'Cloud Service Providers',
        type: 'category',
        items: [
          { name: 'Amazon Web Services', href: '/cloud-service-providers/aws' },
          { name: 'Microsoft Azure', href: '/cloud-service-providers/azure' },
          { name: 'Google Cloud Platform', href: '/cloud-service-providers/gcp' },
        ],
      },
      {
        name: 'Cloud & Infrastructure Engineering',
        type: 'category',
        items: [
          { name: 'Cloud Engineer', href: '/cloud-and-infrastructure-engineering/cloud-engineer' },
          { name: 'DevOps Engineer', href: '/cloud-and-infrastructure-engineering/devops-engineer' },
          { name: 'Site Reliability Engineer (SRE)', href: '/cloud-and-infrastructure-engineering/site-reliability-engineer' },
          { name: 'Platform Engineer', href: '/cloud-and-infrastructure-engineering/platform-engineer' },
        ],
      },
    ],
  },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Plans & Pricing', path: '/plans' },
  { name: 'AerosVision Business', path: '/business' },
  { name: 'Teach on AerosVision', path: '/teach' },
];

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isExploreHovered, setIsExploreHovered] = useState(false);
  const [isMobileExploreExpanded, setIsMobileExploreExpanded] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    if (isMobileExploreExpanded) {
      setIsMobileExploreExpanded(false);
    }
  };

  const toggleMobileExplore = () => {
    setIsMobileExploreExpanded(!isMobileExploreExpanded);
  };

  const handleMouseEnterExplore = () => {
    clearTimeout(hoverTimeoutRef.current);
    setIsExploreHovered(true);
  };

  const handleMouseLeaveExplore = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsExploreHovered(false);
    }, 300);
  };

  useEffect(() => {
    const handleResize = () => {
      if (isDrawerOpen && window.innerWidth >= 768) {
        setIsDrawerOpen(false);
      }
      if (isExploreHovered && window.innerWidth < 768) {
        setIsExploreHovered(false);
        clearTimeout(hoverTimeoutRef.current);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isDrawerOpen, isExploreHovered]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-2 sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center rounded-md py-2 px-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
          <img src={logo} alt="AerosVision Logo" className="h-8 w-auto dark:invert" />
        </Link>
        <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {navItems.map((item) => (
            item.type === 'dropdown' ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={handleMouseEnterExplore}
                onMouseLeave={handleMouseLeaveExplore}
              >
                <span
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium py-2 px-3 rounded-md transition-colors duration-300 flex items-center hover:bg-indigo-50 dark:hover:bg-gray-700 whitespace-nowrap text-sm cursor-default"
                  aria-haspopup="true"
                  aria-expanded={isExploreHovered}
                >
                  {item.name}
                  <ChevronDown size={18} className="ml-1" />
                </span>
                {isExploreHovered && (
                  <div
                    className="absolute left-0 top-full w-72 bg-white dark:bg-gray-700 rounded-md shadow-lg py-2 z-10 transition-all duration-200 ease-out transform origin-top-left"
                    onMouseEnter={handleMouseEnterExplore}
                    onMouseLeave={handleMouseLeaveExplore}
                  >
                    {item.subItems.map((category) => (
                      <div key={category.name} className="px-4 py-2">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-1 text-sm">{category.name}</h4>
                        <ul className="space-y-1">
                          {category.items.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                to={subItem.href}
                                className="block text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-600 py-1 px-2 rounded-md transition-colors duration-200 text-sm"
                                onClick={() => setIsExploreHovered(false)}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium py-2 px-3 rounded-md transition-colors duration-300 hover:bg-indigo-50 dark:hover:bg-gray-700 whitespace-nowrap text-sm"
              >
                {item.name}
              </Link>
            )
          ))}
          <Link to="/login" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 text-sm">Login</Link>
          <Link to="/signup" className="bg-white dark:bg-gray-900 border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 font-bold py-2 px-4 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 text-sm">Signup</Link>
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <div className="md:hidden flex items-center space-x-2">
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <button onClick={toggleDrawer} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-2 transition-colors duration-300" aria-label="Toggle navigation drawer">
            <Menu size={28} />
          </button>
        </div>
      </div>
      <div className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <Link to="/" className="flex items-center" onClick={toggleDrawer}>
            <img src={logo} alt="AerosVision Logo" className="h-8 w-auto dark:invert" />
          </Link>
          <button onClick={toggleDrawer} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-2 transition-colors duration-300" aria-label="Close navigation drawer">
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          {navItems.map((item) => (
            item.type === 'dropdown' ? (
              <div key={item.name}>
                <button
                  onClick={toggleMobileExplore}
                  className="w-full flex justify-between items-center text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium py-2 px-4 rounded-md transition-colors duration-300 focus:outline-none text-base"
                  aria-expanded={isMobileExploreExpanded}
                >
                  {item.name}
                  <ChevronDown size={20} />
                </button>
                {isMobileExploreExpanded && (
                  <ul className="ml-4 mt-2 space-y-1 border-l-2 border-gray-200 dark:border-gray-600 pl-4">
                    {item.subItems.map((category) => (
                      <li key={category.name}>
                        <h5 className="font-semibold text-gray-700 dark:text-gray-200 mb-1 mt-2 text-base">{category.name}</h5>
                        <ul className="space-y-1 ml-2">
                          {category.items.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                to={subItem.href}
                                className="block text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 py-1 px-2 rounded-md transition-colors duration-200 text-base"
                                onClick={toggleDrawer}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className="block text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium py-2 px-4 rounded-md transition-colors duration-300 text-base"
                onClick={toggleDrawer}
              >
                {item.name}
              </Link>
            )
          ))}
          <Link to="/login" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 w-full text-center text-base" onClick={toggleDrawer}>Login</Link>
          <Link to="/signup" className="bg-white dark:bg-gray-900 border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 font-bold py-2 px-4 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 w-full text-center text-base" onClick={toggleDrawer}>Signup</Link>
        </nav>
      </div>
      {isDrawerOpen && window.innerWidth < 768 && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleDrawer}></div>}
    </nav>
  );
};

export default Header;