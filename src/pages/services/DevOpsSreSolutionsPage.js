import React from 'react';
import { Link } from 'react-router-dom';

const DevOpsSreSolutionsPage = () => {
  // DevOps & SRE Services Section
  const services = [
    {
      title: "CI/CD Pipeline Automation",
      icon: "🔄",
      description: "Design and implement automated CI/CD pipelines using tools like Jenkins, GitLab CI, and GitHub Actions to streamline development and deployment processes."
    },
    {
      title: "Infrastructure as Code (IaC)",
      icon: "📜",
      description: "Automate infrastructure provisioning and management with Terraform and Ansible, ensuring consistency, scalability, and repeatability."
    },
    {
      title: "Monitoring & Logging",
      icon: "📊",
      description: "Set up comprehensive monitoring and logging with tools like Prometheus, Grafana, and ELK Stack to gain real-time insights and ensure system health."
    },
    {
      title: "Reliability Engineering",
      icon: "🛡️",
      description: "Implement SRE best practices to enhance system reliability, including incident response, chaos engineering, and high-availability architectures."
    }
  ];

  // Benefits of DevOps & SRE Solutions
  const benefits = [
    "Faster Time-to-Market: Streamlined CI/CD pipelines accelerate deployments.",
    "Improved Reliability: Proactive monitoring and SRE practices ensure uptime.",
    "Cost Efficiency: Optimize cloud resources with IaC and automated scaling.",
    "Enhanced Collaboration: Bridge development and operations for seamless workflows.",
    "Scalable Systems: Build architectures that grow with your business needs."
  ];

  // Tools and Technologies Used
  const tools = [
    {
      name: "Jenkins",
      logo: "https://placehold.co/100x100/FF5733/FFFFFF?text=Jenkins",
      description: "Open-source automation server for building robust CI/CD pipelines."
    },
    {
      name: "Terraform",
      logo: "https://placehold.co/100x100/844FBA/FFFFFF?text=Terraform",
      description: "Infrastructure as Code tool for provisioning and managing cloud resources."
    },
    {
      name: "Prometheus & Grafana",
      logo: "https://placehold.co/100x100/FF6347/FFFFFF?text=Prometheus",
      description: "Powerful monitoring and visualization tools for real-time system insights."
    },
    {
      name: "Kubernetes",
      logo: "https://placehold.co/100x100/326CE5/FFFFFF?text=Kubernetes",
      description: "Container orchestration platform for scalable and resilient deployments."
    }
  ];

  return (
    <main className="container mx-auto p-8 py-20 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
          ⚙️ DevOps & SRE Solutions
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Transform your operations with our DevOps and SRE solutions. From automated CI/CD pipelines to Infrastructure as Code and proactive monitoring, we optimize your workflows for speed, reliability, and cost efficiency across AWS, Azure, and GCP.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Optimize Your Operations
          </Link>
          <Link
            to="/contact"
            className="bg-white dark:bg-gray-900 border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Our DevOps & SRE Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              <span className="text-4xl">{service.icon}</span>
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-16 py-12 px-8 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Benefits of Our DevOps & SRE Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 dark:text-gray-300">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-inner">
              <span className="text-indigo-500 mr-2">✅</span> {benefit}
            </div>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Tools & Technologies We Use
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
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
          Ready to Streamline Your Operations?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Partner with us to implement cutting-edge DevOps and SRE practices that drive efficiency and reliability. Contact us to transform your workflows today.
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

export default DevOpsSreSolutionsPage;