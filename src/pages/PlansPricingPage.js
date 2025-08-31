import React from 'react';
import { CheckCircle } from 'lucide-react'; // Importing an icon for features

const PlansPricingPage = () => {
  // Define the details for each pricing plan
  const plans = [
    {
      name: 'Basic',
      price: '$19',
      frequency: '/month',
      features: [
        'Access to 5 courses',
        'Standard learning materials',
        'Community forum access',
        'Email support',
        'Mobile access', // Added new feature
      ],
      buttonText: 'Start Free Trial',
      // Tailwind classes for button styling, including hover and focus states
      buttonClass: 'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500',
    },
    {
      name: 'Pro',
      price: '$49',
      frequency: '/month',
      features: [
        'Access to all courses',
        'Premium learning materials',
        'Dedicated community support',
        'Priority email & chat support',
        'Monthly live Q&A sessions',
        'Offline viewing', // Added new feature
        'Certificate of completion', // Added new feature
      ],
      buttonText: 'Choose Pro',
      buttonClass: 'bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-500',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      frequency: '', // No frequency for custom pricing
      features: [
        'Tailored curriculum',
        'Dedicated account manager',
        'Custom reporting & analytics',
        'On-site training options',
        '24/7 premium support',
        'Single Sign-On (SSO) integration', // Added new feature
        'API access', // Added new feature
      ],
      buttonText: 'Contact Sales',
      // Added dark mode specific classes for the Enterprise button
      buttonClass: 'bg-gray-700 hover:bg-gray-800 text-white focus:ring-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-4 transition-colors duration-300">
      <div className="container mx-auto text-center">
        {/* Page Title and Description */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
          Flexible <span className="text-indigo-600 dark:text-indigo-400">Plans & Pricing</span>
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Choose the plan that best fits your learning style or business needs. All plans offer high-quality content and dedicated support to help you succeed.
        </p>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Map through the plans array to render each pricing card */}
          {plans.map((plan) => (
            <div
              key={plan.name} // Unique key for each plan
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border-t-4 border-indigo-500 dark:border-indigo-600 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex flex-col justify-between
                         dark:hover:shadow-xl dark:hover:shadow-indigo-500/20"
            >
              <div>
                {/* Plan Name */}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{plan.name}</h2>
                {/* Plan Price and Frequency */}
                <p className="text-5xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-6">
                  {plan.price}<span className="text-xl font-medium text-gray-500 dark:text-gray-400">{plan.frequency}</span>
                </p>
                {/* Plan Features List */}
                <ul className="text-left text-gray-700 dark:text-gray-300 space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 dark:text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Call to Action Button for each plan */}
              <button
                className={`w-full font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${plan.buttonClass}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Additional information or custom inquiry section */}
        <div className="mt-16 bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md max-w-3xl mx-auto transition-colors duration-300">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            For large teams, specific training requirements, or bespoke learning programs, our Enterprise plan offers tailored solutions. Contact our sales team to discuss your unique needs.
          </p>
          <a
            href="/business" // Link to the AerosVision Business page
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
          >
            Explore AerosVision Business
            <span className="ml-2">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default PlansPricingPage;
