import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // Array of service categories with descriptions and links
  const services = [
    {
      title: "Cloud Infrastructure & Migrations",
      icon: "☁️",
      description: "End-to-end cloud setup (AWS, Azure, GCP). On-prem to cloud migration. Security, scalability & compliance-first approach.",
      link: "/services/cloud-infrastructure-migration"
    },
    {
      title: "DevOps & SRE Solutions",
      icon: "⚙️",
      description: "CI/CD pipelines & automation. Infrastructure as Code (IaC) with Terraform, Ansible. Monitoring, logging, and reliability engineering. Cost optimization & performance tuning.",
      link: "/services/devops-sre-solutions"
    },
    {
      title: "Outsourced Cloud Talent",
      icon: "👩‍💻",
      description: "DevOps Engineers on-demand. Site Reliability Engineers (SRE). Cloud Infrastructure Experts. Flexible outsourcing & staff augmentation.",
      link: "/services/outsource-cloud-talent"
    },
    {
      title: "Training & Career Guidance",
      icon: "🎓",
      description: "Hands-on courses in Cloud, DevOps, and SRE. Real-world projects & mentorship. Career coaching & interview preparation. Corporate trainings for teams.",
      link: "/services/training-career-guidance"
    }
  ];

  // New array for Cloud Providers section, with updated links
  const cloudProviders = [
    {
      name: "Amazon Web Services (AWS)",
      logo: "https://placehold.co/100x100/FF9900/FFFFFF?text=AWS",
      description: "The world's most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally.",
      link: "/cloud-service-providers/aws"
    },
    {
      name: "Microsoft Azure",
      logo: "https://placehold.co/100x100/0078D4/FFFFFF?text=Azure",
      description: "A growing collection of integrated cloud services that developers and IT professionals use to build, deploy, and manage applications through a global network of data centers.",
      link: "/cloud-service-providers/azure"
    },
    {
      name: "Google Cloud Platform (GCP)",
      logo: "https://placehold.co/100x100/4285F4/FFFFFF?text=GCP",
      description: "A suite of public cloud computing services that runs on the same infrastructure that Google uses for its end-user products, such as Google Search and YouTube.",
      link: "/cloud-service-providers/gcp"
    }
  ];

  // New array for Cloud and DevOps roles section, with added links
  const roles = [
    {
      title: "DevOps Engineer",
      icon: "🧑‍🔬",
      description: "A DevOps engineer is the bridge between development and operations. They streamline the entire process, from writing code to deploying it, making everything faster and smoother. If you love building efficient pipelines, this is your calling.",
      link: "/cloud-and-infrastructure-engineering/devops-engineer"
    },
    {
      title: "Site Reliability Engineer (SRE)",
      icon: "🛡️",
      description: "SREs are the guardians of uptime. They're the engineers who ensure your favorite apps and services are always up, fast, and secure. They use code to automate away manual tasks and build robust systems.",
      link: "/cloud-and-infrastructure-engineering/site-reliability-engineer"
    },
    {
      title: "Cloud Engineer",
      icon: "☁️",
      description: "Cloud engineers are masters of the modern data center. They design and manage the infrastructure on platforms like AWS, Azure, and GCP, making sure systems are scalable, cost-effective, and always available.",
      link: "/cloud-and-infrastructure-engineering/cloud-engineer"
    },
    {
      title: "Platform Engineer",
      icon: "🏗️",
      description: "Platform engineers build the foundation for everyone else. They create the tools, infrastructure, and environments that allow developers to ship their code quickly and safely.",
      link: "/cloud-and-infrastructure-engineering/platform-engineer"
    }
  ];

  const expertise = [
    "Designing and building cloud infrastructure from scratch",
    "Migrating legacy systems from on-prem to cloud",
    "Automating and managing DevOps & SRE practices",
    "Providing 24/7 support & maintenance",
    "Training and career guidance for cloud professionals",
    "Outsourcing highly skilled DevOps, SRE, and Cloud Engineers"
  ];

  const whyChooseUs = [
    "Certified Cloud Experts (AWS, Azure, GCP)",
    "Proven experience in building & scaling infrastructures",
    "24/7 Support and proactive monitoring",
    "Flexible engagement models (project-based, outsourcing, training)",
    "Career-focused learning with real-world exposure"
  ];

  return (
    <main className="container mx-auto p-8 py-20 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
          🚀 Build, Migrate, and Scale Your Business on the Cloud
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          From infrastructure design to cloud migration, DevOps automation, and ongoing support—we help businesses harness the power of AWS, Azure, and GCP. We also provide training, career guidance, and skilled engineers on-demand to accelerate your success.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started Today
          </Link>
          <Link
            to="/contact"
            className="bg-white dark:bg-gray-900 border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>

      {/* Cloud Services Providers Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Our Expertise Across Major Cloud Platforms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cloudProviders.map((provider, index) => (
            <Link key={index} to={provider.link} className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              <img src={provider.logo} alt={`${provider.name} logo`} className="mx-auto mb-4 w-16 h-16 object-contain" />
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{provider.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{provider.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Our Services Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              <span className="text-4xl">{service.icon}</span>
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Cloud & DevOps Roles Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          In-Demand Cloud & DevOps Roles
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Whether you're looking to hire or build a career, understand the key roles that drive modern IT operations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((role, index) => (
            <Link key={index} to={role.link} className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              <span className="text-4xl">{role.icon}</span>
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{role.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{role.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <div className="mt-16 py-12 px-8 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              About AerosVision
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              We are a cloud-first technology company dedicated to helping organizations transform their IT infrastructure, optimize operations, and scale securely.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Our Expertise Lies In:</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              {expertise.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-indigo-500 mr-2">✅</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-16 py-12 px-8 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 dark:text-gray-300">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-inner">
              <span className="text-indigo-500 mr-2">✅</span> {item}
            </div>
          ))}
        </div>
      </div>

      {/* Final Call to Action Section */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to take your business to the cloud?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Let’s build your infrastructure, empower your team, and shape the future together.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Schedule a Free Consultation
          </Link>
          <Link
            to="/explore"
            className="bg-white dark:bg-gray-900 border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Explore Our Services
          </Link>
        </div>
      </div>

    </main>
  );
};

export default HomePage;
