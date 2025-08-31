import React from 'react';
import { Link } from 'react-router-dom';
import { GitBranch, Rocket, Code, Settings, Shield } from 'lucide-react';

// Data for the DevOps Engineer page content
const devOpsEngineerData = {
  hero: {
    title: "DevOps Engineer: Bridging Development and Operations",
    description: "DevOps Engineers are masters of automation and collaboration. They build and maintain the tools and pipelines that allow software development teams to ship code faster and more reliably.",
    cta: {
      primary: { text: "Schedule a Consultation", link: "/contact" },
      secondary: { text: "Explore Our Training", link: "/services/trainingcareerguidance" }
    }
  },
  roles: [
    {
      title: "Key Responsibilities",
      description: "A DevOps Engineer's day-to-day work is focused on automating processes, ensuring system reliability, and fostering collaboration.",
      items: [
        "Implementing Continuous Integration/Continuous Delivery (CI/CD)",
        "Automating infrastructure deployment (IaC)",
        "Establishing monitoring and logging systems",
        "Managing configuration and release processes",
        "Improving communication and collaboration between teams"
      ]
    },
    {
      title: "Essential Tools & Skills",
      description: "Proficiency in a wide range of tools is crucial for a successful DevOps career.",
      items: [
        "Containerization with Docker and Kubernetes",
        "CI/CD tools like Jenkins, GitLab CI, or GitHub Actions",
        "IaC tools such as Terraform or Ansible",
        "Scripting languages like Python or Bash",
        "Cloud platforms (AWS, Azure, GCP)"
      ]
    }
  ],
  careerPath: [
    {
      role: "Junior DevOps Engineer",
      description: "Assists with basic cloud operations, learns core services, and helps with deployment tasks.",
      icon: <Code size={32} className="text-indigo-600 dark:text-indigo-400" />
    },
    {
      role: "DevOps Engineer",
      description: "Manages and maintains CI/CD pipelines, implements IaC, and improves developer workflows.",
      icon: <GitBranch size={32} className="text-indigo-600 dark:text-indigo-400" />
    },
    {
      role: "Senior DevOps Engineer",
      description: "Leads complex automation projects, designs entire systems, and mentors junior team members.",
      icon: <Rocket size={32} className="text-indigo-600 dark:text-indigo-400" />
    },
    {
      role: "DevOps/SRE Manager",
      description: "Focuses on high-level strategy, team leadership, and aligning technical goals with business objectives.",
      icon: <Settings size={32} className="text-indigo-600 dark:text-indigo-400" />
    }
  ]
};

const DevOpsEngineerPage = ({ isDarkMode }) => {
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
            {devOpsEngineerData.hero.title}
          </h1>
          <p className={`text-lg ${textClass} max-w-3xl mx-auto mb-8`}>
            {devOpsEngineerData.hero.description}
          </p>
          <div className="flex justify-center space-x-4">
            <Link to={devOpsEngineerData.hero.cta.primary.link}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
              {devOpsEngineerData.hero.cta.primary.text}
            </Link>
            <Link to={devOpsEngineerData.hero.cta.secondary.link}
              className="bg-white dark:bg-gray-900 border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
              {devOpsEngineerData.hero.cta.secondary.text}
            </Link>
          </div>
        </section>

        {/* What They Do & Essential Skills Section */}
        <section className="mt-16 text-center">
          <h2 className={`text-3xl font-bold ${headingClass} mb-8`}>
            Responsibilities & Core Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {devOpsEngineerData.roles.map((section, index) => (
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
            Career Path of a DevOps Engineer
          </h2>
          <div className="flex flex-col md:grid md:grid-cols-4 gap-8">
            {devOpsEngineerData.careerPath.map((step, index) => (
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
            Ready to start your DevOps journey?
          </h2>
          <p className={`text-lg ${textClass} mb-6 max-w-2xl mx-auto`}>
            Whether you're starting out or looking to advance your skills, our training programs and expert mentorship can guide you.
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

export default DevOpsEngineerPage;
