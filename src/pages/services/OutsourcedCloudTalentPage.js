import React from 'react';
import { Link } from 'react-router-dom';

const OutsourcedCloudTalentPage = () => {
  // Outsourcing Services Section
  const outsourcingServices = [
    {
      title: "On-Demand DevOps Engineers",
      icon: "🧑‍💻",
      description: "Access skilled DevOps engineers to build and manage CI/CD pipelines, automate workflows, and optimize your cloud infrastructure."
    },
    {
      title: "Site Reliability Engineers (SRE)",
      icon: "🛡️",
      description: "Hire SREs to ensure system reliability, implement proactive monitoring, and enhance uptime with robust incident response strategies."
    },
    {
      title: "Cloud Infrastructure Experts",
      icon: "☁️",
      description: "Engage cloud architects and engineers to design, migrate, and manage scalable and secure infrastructure on AWS, Azure, or GCP."
    },
    {
      title: "Flexible Staff Augmentation",
      icon: "🤝",
      description: "Scale your team with our flexible staffing solutions, tailored to your project needs, timelines, and budget."
    }
  ];

  // Benefits of Outsourcing
  const benefits = [
    "Cost-Effective Expertise: Access top-tier talent without the overhead of full-time hires.",
    "Rapid Scaling: Quickly onboard skilled professionals to meet project demands.",
    "Focus on Core Business: Let our experts handle your cloud operations while you focus on innovation.",
    "Certified Professionals: Work with engineers certified in AWS, Azure, GCP, and more.",
    "24/7 Support: Get round-the-clock support for critical systems and operations."
  ];

  // Roles Offered
  const roles = [
    {
      name: "AWS Certified DevOps Engineer",
      logo: "https://placehold.co/100x100/FF9900/FFFFFF?text=AWS",
      description: "Experts in AWS tools like CodePipeline, CloudFormation, and ECS for seamless DevOps workflows."
    },
    {
      name: "Azure DevOps Engineer",
      logo: "https://placehold.co/100x100/0078D4/FFFFFF?text=Azure",
      description: "Specialists in Azure DevOps, ARM templates, and Azure Kubernetes Service for cloud automation."
    },
    {
      name: "GCP Cloud Engineer",
      logo: "https://placehold.co/100x100/4285F4/FFFFFF?text=GCP",
      description: "Proficient in Google Cloud’s Anthos, Cloud Run, and Infrastructure as Code for scalable solutions."
    },
    {
      name: "SRE with Kubernetes Expertise",
      logo: "https://placehold.co/100x100/326CE5/FFFFFF?text=Kubernetes",
      description: "Skilled in Kubernetes, Prometheus, and Grafana to ensure high availability and performance."
    }
  ];

  return (
    <main className="container mx-auto p-8 py-20 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
          👩‍💻 Outsourced Cloud Talent
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Scale your team with our on-demand DevOps Engineers, Site Reliability Engineers, and Cloud Infrastructure Experts. Our flexible outsourcing and staff augmentation services deliver certified professionals to drive your cloud projects to success.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Hire Talent Now
          </Link>
          <Link
            to="/contact"
            className="bg-white dark:bg-gray-900 border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>

      {/* Outsourcing Services Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Our Outsourcing Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {outsourcingServices.map((service, index) => (
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
          Benefits of Outsourcing with Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 dark:text-gray-300">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-inner">
              <span className="text-indigo-500 mr-2">✅</span> {benefit}
            </div>
          ))}
        </div>
      </div>

      {/* Roles Offered Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Specialized Roles We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((role, index) => (
            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              <img src={role.logo} alt={`${role.name} logo`} className="mx-auto mb-4 w-16 h-16 object-contain" />
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{role.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{role.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Scale Your Team?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Partner with us to access top-tier cloud talent and accelerate your projects. Contact us today to find the perfect engineers for your needs.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Hire Experts Now
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

export default OutsourcedCloudTalentPage;