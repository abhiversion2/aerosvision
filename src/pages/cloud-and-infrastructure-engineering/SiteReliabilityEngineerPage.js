import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Gauge, Activity, Code, Settings } from 'lucide-react';

// Data for the Site Reliability Engineer page content
const sreData = {
  hero: {
    title: "Site Reliability Engineer: The Guardians of Uptime",
    description: "SREs are engineers who focus on the reliability, scalability, and performance of large-scale systems. They apply software engineering principles to operations problems, ensuring systems are always available and fast.",
    cta: {
      primary: { text: "Schedule a Consultation", link: "/contact" },
      secondary: { text: "Explore Our Training", link: "/services/trainingcareerguidance" }
    }
  },
  roles: [
    {
      title: "Core Responsibilities",
      description: "An SRE's role is a blend of software engineering and operations, focused on creating scalable and highly available systems.",
      items: [
        "Automating operational tasks to reduce toil",
        "Implementing and managing monitoring and alerting systems",
        "Handling incident response and root cause analysis",
        "Designing and maintaining reliable, scalable infrastructure",
        "Defining Service Level Objectives (SLOs) and Service Level Agreements (SLAs)"
      ]
    },
    {
      title: "Essential Skills & Tools",
      description: "SREs must have a strong programming background and be proficient with a range of modern tools.",
      items: [
        "Programming skills in Python, Go, or Java",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Proficiency in CI/CD, IaC, and configuration management",
        "Knowledge of Linux and system administration",
        "Experience with monitoring tools like Prometheus and Grafana"
      ]
    }
  ],
  careerPath: [
    {
      role: "Junior SRE",
      description: "Focuses on operational tasks, participates in on-call rotations, and learns core systems.",
      icon: <Code size={32} className="text-indigo-600 dark:text-indigo-400" />
    },
    {
      role: "Site Reliability Engineer",
      description: "Designs and builds automation tools, improves system reliability, and handles more complex incidents.",
      icon: <Activity size={32} className="text-indigo-600 dark:text-indigo-400" />
    },
    {
      role: "Senior SRE",
      description: "Leads reliability initiatives, mentors junior SREs, and architects solutions for major systems.",
      icon: <Gauge size={32} className="text-indigo-600 dark:text-indigo-400" />
    },
    {
      role: "SRE Manager",
      description: "Manages a team of SREs, sets technical strategy, and focuses on organizational reliability goals.",
      icon: <Settings size={32} className="text-indigo-600 dark:text-indigo-400" />
    }
  ]
};

const SiteReliabilityEngineerPage = ({ isDarkMode }) => {
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
            {sreData.hero.title}
          </h1>
          <p className={`text-lg ${textClass} max-w-3xl mx-auto mb-8`}>
            {sreData.hero.description}
          </p>
          <div className="flex justify-center space-x-4">
            <Link to={sreData.hero.cta.primary.link}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
              {sreData.hero.cta.primary.text}
            </Link>
            <Link to={sreData.hero.cta.secondary.link}
              className="bg-white dark:bg-gray-900 border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
              {sreData.hero.cta.secondary.text}
            </Link>
          </div>
        </section>

        {/* What They Do & Essential Skills Section */}
        <section className="mt-16 text-center">
          <h2 className={`text-3xl font-bold ${headingClass} mb-8`}>
            Responsibilities & Core Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sreData.roles.map((section, index) => (
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
            Career Path of a Site Reliability Engineer
          </h2>
          <div className="flex flex-col md:grid md:grid-cols-4 gap-8">
            {sreData.careerPath.map((step, index) => (
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
            Ready to secure your career in reliability?
          </h2>
          <p className={`text-lg ${textClass} mb-6 max-w-2xl mx-auto`}>
            Our SRE training programs are built on real-world practices and can help you master the skills needed to build and manage robust systems.
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

export default SiteReliabilityEngineerPage;
