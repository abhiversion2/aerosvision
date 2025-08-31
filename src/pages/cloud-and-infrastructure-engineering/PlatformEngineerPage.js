import React from 'react';
import { Link } from 'react-router-dom';
import { Network, Container, Cloud, Code, Server } from 'lucide-react';

// Data for the Platform Engineer page content
const platformEngineerData = {
  hero: {
    title: "Platform Engineer: Building the Foundation of Innovation",
    description: "Platform Engineers create and manage the underlying infrastructure and services that software developers use to build and run applications. Their work empowers development teams to be more productive and autonomous.",
    cta: {
      primary: { text: "Schedule a Consultation", link: "/contact" },
      secondary: { text: "Explore Our Training", link: "/services/trainingcareerguidance" }
    }
  },
  roles: [
    {
      title: "Core Responsibilities",
      description: "A Platform Engineer's responsibilities include providing developers with self-service tools and a streamlined environment.",
      items: [
        "Designing and building internal developer platforms",
        "Implementing Infrastructure as Code (IaC) solutions",
        "Managing container orchestration platforms like Kubernetes",
        "Creating and maintaining CI/CD pipelines",
        "Ensuring platform security and compliance"
      ]
    },
    {
      title: "Essential Skills & Tools",
      description: "Platform Engineers require a strong background in software engineering and a deep understanding of infrastructure.",
      items: [
        "Cloud platforms (AWS, Azure, GCP)",
        "Containerization with Docker and Kubernetes",
        "IaC tools like Terraform or Pulumi",
        "Proficiency in scripting languages (e.g., Python, Bash)",
        "Experience with service meshes and API gateways"
      ]
    }
  ],
  careerPath: [
    {
      role: "Junior Platform Engineer",
      description: "Assists in maintaining platform components and helps automate routine tasks for the development team.",
      icon: <Code size={32} className="text-indigo-600 dark:text-indigo-400" />
    },
    {
      role: "Platform Engineer",
      description: "Develops and maintains core platform services, enhances automation, and supports development teams.",
      icon: <Network size={32} className="text-indigo-600 dark:text-indigo-400" />
    },
    {
      role: "Senior Platform Engineer",
      description: "Leads the design and architecture of the internal platform, mentors team members, and drives strategic initiatives.",
      icon: <Container size={32} className="text-indigo-600 dark:text-indigo-400" />
    },
    {
      role: "Head of Platform Engineering",
      description: "Oversees the entire platform strategy, manages the engineering team, and aligns the platform with business goals.",
      icon: <Cloud size={32} className="text-indigo-600 dark:text-indigo-400" />
    }
  ]
};

const PlatformEngineerPage = ({ isDarkMode }) => {
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
            {platformEngineerData.hero.title}
          </h1>
          <p className={`text-lg ${textClass} max-w-3xl mx-auto mb-8`}>
            {platformEngineerData.hero.description}
          </p>
          <div className="flex justify-center space-x-4">
            <Link to={platformEngineerData.hero.cta.primary.link}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
              {platformEngineerData.hero.cta.primary.text}
            </Link>
            <Link to={platformEngineerData.hero.cta.secondary.link}
              className="bg-white dark:bg-gray-900 border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
              {platformEngineerData.hero.cta.secondary.text}
            </Link>
          </div>
        </section>

        {/* What They Do & Essential Skills Section */}
        <section className="mt-16 text-center">
          <h2 className={`text-3xl font-bold ${headingClass} mb-8`}>
            Responsibilities & Core Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformEngineerData.roles.map((section, index) => (
              <div key={index} className={`p-8 ${cardClass}`}>
                <div className="flex justify-center mb-4 text-indigo-600 dark:text-indigo-400">
                  <Server size={48} />
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
            Career Path of a Platform Engineer
          </h2>
          <div className="flex flex-col md:grid md:grid-cols-4 gap-8">
            {platformEngineerData.careerPath.map((step, index) => (
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
            Ready to build the future of software development?
          </h2>
          <p className={`text-lg ${textClass} mb-6 max-w-2xl mx-auto`}>
            Our expert-led training will equip you with the skills to design, build, and manage scalable developer platforms.
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

export default PlatformEngineerPage;
