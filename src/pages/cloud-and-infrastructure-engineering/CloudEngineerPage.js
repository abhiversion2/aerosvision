import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Server, Code, Shield, GitBranch } from 'lucide-react';

// Data for the Cloud Engineer page content
const cloudEngineerData = {
  hero: {
    title: "Cloud Engineer: The Builders of Tomorrow's Infrastructure",
    description: "Cloud Engineers are the architects and managers of cloud-based systems. They design, build, and maintain the scalable, secure, and cost-effective infrastructure that powers modern applications on platforms like AWS, Azure, and Google Cloud.",
    cta: {
      primary: { text: "Schedule a Consultation", link: "/contact" },
      secondary: { text: "Explore Our Training", link: "/services/trainingcareerguidance" }
    }
  },
  roles: [
    {
      title: "What They Do",
      description: "Cloud Engineers are responsible for a wide range of tasks, from initial design to ongoing maintenance. They ensure that systems are reliable, secure, and performant.",
      items: [
        "Designing and implementing cloud architectures",
        "Managing cloud resources and services",
        "Automating infrastructure deployment (IaC)",
        "Monitoring system performance and security",
        "Optimizing cloud costs and efficiency"
      ]
    },
    {
      title: "Essential Skills",
      description: "A successful Cloud Engineer combines technical skills with a deep understanding of cloud platforms and a passion for automation.",
      items: [
        "Proficiency in AWS, Azure, or GCP",
        "Infrastructure as Code (IaC) with Terraform, CloudFormation",
        "Containerization with Docker and Kubernetes",
        "Scripting languages like Python or Bash",
        "Networking fundamentals and security principles"
      ]
    }
  ],
  careerPath: [
    {
      role: "Junior Cloud Engineer",
      description: "Assists with basic cloud operations, learns core services, and helps with deployment tasks.",
      icon: <Cloud size={32} className="text-indigo-600 dark:text-indigo-400" />
    },
    {
      role: "Cloud Engineer",
      description: "Manages and maintains cloud infrastructure, builds automation scripts, and participates in solution design.",
      icon: <Server size={32} className="text-indigo-600 dark:text-indigo-400" />
    },
    {
      role: "Senior Cloud Engineer",
      description: "Leads complex projects, mentors junior team members, and designs scalable and resilient cloud solutions.",
      icon: <Code size={32} className="text-indigo-600 dark:text-indigo-400" />
    },
    {
      role: "Cloud Architect",
      description: "Designs the high-level strategy and roadmap for an organization's cloud presence, making key technology decisions.",
      icon: <GitBranch size={32} className="text-indigo-600 dark:text-indigo-400" />
    }
  ]
};

const CloudEngineerPage = ({ isDarkMode }) => {
  const themeClass = isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900';
  const cardClass = `bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-xl`;
  const textClass = `text-gray-700 dark:text-gray-300`;
  const headingClass = `text-gray-900 dark:text-white`;

  return (
    <div className={`transition-colors duration-300 ${themeClass}`}>
      <main className="container mx-auto p-8 py-20 rounded-lg shadow-md">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-extrabold ${headingClass} mb-4 leading-tight`}>
            {cloudEngineerData.hero.title}
          </h1>
          <p className={`text-lg ${textClass} max-w-3xl mx-auto mb-8`}>
            {cloudEngineerData.hero.description}
          </p>
          <div className="flex justify-center space-x-4">
            <Link to={cloudEngineerData.hero.cta.primary.link}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
              {cloudEngineerData.hero.cta.primary.text}
            </Link>
            <Link to={cloudEngineerData.hero.cta.secondary.link}
              className="bg-white dark:bg-gray-900 border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
              {cloudEngineerData.hero.cta.secondary.text}
            </Link>
          </div>
        </section>

        {/* What They Do & Essential Skills Section */}
        <section className="mt-16 text-center">
          <h2 className={`text-3xl font-bold ${headingClass} mb-8`}>
            Responsibilities & Core Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cloudEngineerData.roles.map((section, index) => (
              <div key={index} className={`p-8 ${cardClass}`}>
                <div className="flex justify-center mb-4 text-indigo-600 dark:text-indigo-400">
                  <Shield size={48} />
                </div>
                <h3 className={`text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2`}>{section.title}</h3>
                <p className={`${textClass} mb-4`}>{section.description}</p>
                <ul className="text-left space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className={`flex items-start ${textClass}`}>
                      <span className="text-indigo-500 mr-2 flex-shrink-0 mt-1">✅</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Career Path Section */}
        <section className="mt-16 text-center">
          <h2 className={`text-3xl font-bold ${headingClass} mb-8`}>
            Career Path of a Cloud Engineer
          </h2>
          <div className="flex flex-col md:grid md:grid-cols-4 gap-8">
            {cloudEngineerData.careerPath.map((step, index) => (
              <div key={index} className={`p-6 ${cardClass} flex flex-col items-center text-center`}>
                <div className="mb-4">
                  {step.icon}
                </div>
                <h3 className={`text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2`}>{step.role}</h3>
                <p className={`${textClass} text-sm`}>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final Call to Action Section */}
        <section className="text-center mt-16 py-12 px-8 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
          <h2 className={`text-3xl font-bold ${headingClass} mb-4`}>
            Ready to become a Cloud Engineer?
          </h2>
          <p className={`text-lg ${textClass} mb-6 max-w-2xl mx-auto`}>
            Whether you're starting your journey or looking to advance your skills, our training programs and expert mentorship can guide you.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
              Get Started Now
            </Link>
            <Link to="/services/trainingcareerguidance"
              className="bg-white dark:bg-gray-900 border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
              Learn More
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
};

export default CloudEngineerPage;
