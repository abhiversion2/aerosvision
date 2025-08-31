import React from 'react';
import { Link } from 'react-router-dom';

const CloudInfrastructureMigrationPage = () => {
  // Migration strategies section
  const migrationStrategies = [
    {
      title: "Assessment & Planning",
      icon: "📝",
      description: "Comprehensive analysis of your current infrastructure to identify workloads, dependencies, and migration readiness. We create a tailored migration roadmap prioritizing security, cost, and performance."
    },
    {
      title: "Lift & Shift (Rehost)",
      icon: "🚚",
      description: "Migrate existing applications to the cloud with minimal changes. Ideal for rapid migrations to AWS, Azure, or GCP, ensuring quick wins with low risk."
    },
    {
      title: "Replatforming",
      icon: "🔄",
      description: "Optimize applications during migration by leveraging cloud-native features, such as managed databases or container services, to improve scalability and reduce costs."
    },
    {
      title: "Refactoring",
      icon: "🛠️",
      description: "Redesign applications to fully embrace cloud-native architectures, like microservices or serverless, for maximum performance, scalability, and cost-efficiency."
    }
  ];

  // Benefits of cloud migration
  const benefits = [
    "Cost Optimization: Pay only for what you use with cloud elasticity.",
    "Scalability: Seamlessly scale resources to meet demand.",
    "Security & Compliance: Leverage cloud provider security frameworks and compliance certifications.",
    "Business Agility: Accelerate innovation with faster deployment cycles.",
    "High Availability: Ensure uptime with cloud redundancy and disaster recovery."
  ];

  // Tools and technologies used
  const migrationTools = [
    {
      name: "AWS Migration Services",
      logo: "https://placehold.co/100x100/FF9900/FFFFFF?text=AWS",
      description: "AWS Server Migration Service, AWS Database Migration Service, and AWS Migration Hub for seamless migrations."
    },
    {
      name: "Azure Migrate",
      logo: "https://placehold.co/100x100/0078D4/FFFFFF?text=Azure",
      description: "A centralized hub for assessing and migrating servers, databases, and applications to Azure."
    },
    {
      name: "Google Cloud Migrate",
      logo: "https://placehold.co/100x100/4285F4/FFFFFF?text=GCP",
      description: "Tools like Migrate for Compute Engine and Database Migration Service for efficient Google Cloud migrations."
    },
    {
      name: "Terraform & Ansible",
      logo: "https://placehold.co/100x100/000000/FFFFFF?text=Terraform",
      description: "Infrastructure as Code (IaC) tools to automate and standardize cloud infrastructure setup."
    }
  ];

  return (
    <main className="container mx-auto p-8 py-20 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
          ☁️ Cloud Infrastructure Migration
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Seamlessly transition your on-premises infrastructure to the cloud with our expert migration services. We specialize in AWS, Azure, and GCP, ensuring a secure, scalable, and cost-effective migration tailored to your business needs.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Start Your Migration
          </Link>
          <Link
            to="/contact"
            className="bg-white dark:bg-gray-900 border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>

      {/* Migration Strategies Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Our Migration Strategies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {migrationStrategies.map((strategy, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              <span className="text-4xl">{strategy.icon}</span>
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{strategy.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{strategy.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-16 py-12 px-8 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Benefits of Cloud Migration
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 dark:text-gray-300">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-inner">
              <span className="text-indigo-500 mr-2">✅</span> {benefit}
            </div>
          ))}
        </div>
      </div>

      {/* Migration Tools Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Tools & Technologies We Use
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {migrationTools.map((tool, index) => (
            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              <img src={tool.logo} alt={`${tool.name} logo`} className="mx-auto mb-4 w-16 h-16 object-contain" />
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{tool.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Migrate to the Cloud?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Let our certified cloud experts guide you through a seamless migration to AWS, Azure, or GCP. Contact us today to start your journey.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started Now
          </Link>
          <Link
            to="/explore"
            className="bg-white dark:bg-gray-900 border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Explore More Services
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CloudInfrastructureMigrationPage;