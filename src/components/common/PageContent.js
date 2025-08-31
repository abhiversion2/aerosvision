import React from 'react';

const PageContent = ({ pageTitle, description }) => (
  <main className="container mx-auto p-8 text-center py-20 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
      {pageTitle}
    </h1>
    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
      {description}
    </p>
  </main>
);

export default PageContent;