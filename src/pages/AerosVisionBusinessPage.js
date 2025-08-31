import React from 'react';
import { Briefcase, Users, BarChart2, CheckCircle, Award, Lightbulb } from 'lucide-react'; // Icons for business features - Added CheckCircle, Award, Lightbulb

const AerosVisionBusinessPage = () => {
  const features = [
    {
      icon: <Briefcase size={40} className="text-indigo-600 dark:text-indigo-400 mb-4" />,
      title: 'Tailored Learning Paths',
      description: 'Customizable curricula to meet the specific training needs of your team or organization, ensuring relevant skill development.',
    },
    {
      icon: <Users size={40} className="text-indigo-600 dark:text-indigo-400 mb-4" />,
      title: 'Robust Team Management',
      description: 'Easily manage user accounts, assign courses, monitor engagement, and track progress for your entire team through an intuitive dashboard.',
    },
    {
      icon: <BarChart2 size={40} className="text-indigo-600 dark:text-indigo-400 mb-4" />,
      title: 'Advanced Analytics & Reporting',
      description: 'Gain comprehensive insights into your team\'s learning performance with detailed reports, analytics dashboards, and progress tracking.',
    },
    {
      icon: <CheckCircle size={40} className="text-indigo-600 dark:text-indigo-400 mb-4" />, // Reusing CheckCircle
      title: 'Dedicated Business Support',
      description: 'Benefit from priority support and a dedicated account manager who understands and assists with your specific business training needs.',
    },
    {
      icon: <Award size={40} className="text-indigo-600 dark:text-indigo-400 mb-4" />,
      title: 'Certification Opportunities',
      description: 'Prepare your team for industry-recognized certifications, validating their expertise and boosting your organization\'s capabilities.',
    },
    {
      icon: <Lightbulb size={40} className="text-indigo-600 dark:text-indigo-400 mb-4" />,
      title: 'Custom Content Development',
      description: 'Work with our experts to create bespoke learning content tailored exclusively for your company\'s proprietary tools and processes.',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-4 transition-colors duration-300">
      <div className="container mx-auto text-center">
        {/* Main Title Section */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
          AerosVision for <span className="text-indigo-600 dark:text-indigo-400">Business</span>
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Empower your workforce with cutting-edge skills and knowledge. AerosVision Business offers tailored solutions designed to boost productivity, foster innovation, and drive growth within your organization.
        </p>

        {/* Key Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">Why AerosVision Business?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl dark:shadow-none dark:hover:shadow-lg dark:hover:shadow-indigo-500/20">
                {feature.icon}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16 border-t border-gray-200 dark:border-gray-700 pt-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Benefits for Your Organization</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div className="flex items-start bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <CheckCircle size={24} className="text-green-500 dark:text-green-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Skill Gap Analysis</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Identify and address critical skill gaps within your teams to ensure readiness for future challenges.</p>
              </div>
            </div>
            <div className="flex items-start bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <CheckCircle size={24} className="text-green-500 dark:text-green-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Increased Productivity</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Equip your employees with the knowledge to work more efficiently and effectively.</p>
              </div>
            </div>
            <div className="flex items-start bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <CheckCircle size={24} className="text-green-500 dark:text-green-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Employee Retention</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Invest in your team's development to foster loyalty and reduce turnover.</p>
              </div>
            </div>
            <div className="flex items-start bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <CheckCircle size={24} className="text-green-500 dark:text-green-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Competitive Advantage</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Stay ahead in a rapidly evolving market by continuously upskilling your workforce.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between text-left md:text-center space-y-6 md:space-y-0 md:space-x-8 transition-colors duration-300 dark:shadow-none dark:hover:shadow-xl dark:hover:shadow-indigo-500/20">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Transform Your Team?</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Contact our sales team today to discuss a custom solution that fits your organization's unique requirements and helps you achieve your business objectives.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
              Request a Demo
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AerosVisionBusinessPage;
