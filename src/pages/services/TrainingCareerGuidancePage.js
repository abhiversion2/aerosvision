import React from 'react';
import { Link } from 'react-router-dom';

const TrainingCareerGuidancePage = () => {
  // Training Programs Section
  const trainingPrograms = [
    {
      title: "Hands-On Cloud Courses",
      icon: "☁️",
      description: "Learn AWS, Azure, and GCP through practical, project-based courses designed to build real-world cloud infrastructure skills."
    },
    {
      title: "DevOps & SRE Training",
      icon: "⚙️",
      description: "Master CI/CD pipelines, Infrastructure as Code (Terraform, Ansible), and monitoring with hands-on DevOps and SRE courses."
    },
    {
      title: "Career Coaching & Mentorship",
      icon: "🎓",
      description: "Receive personalized career guidance, resume reviews, and interview preparation from industry experts to land your dream cloud role."
    },
    {
      title: "Corporate Team Training",
      icon: "🏢",
      description: "Upskill your team with customized training programs in cloud, DevOps, and SRE, tailored to your organization's needs."
    }
  ];

  // Benefits of Training
  const benefits = [
    "Practical Learning: Gain hands-on experience with real-world projects.",
    "Industry-Relevant Skills: Master tools and technologies used by top companies.",
    "Career Advancement: Get expert guidance to secure high-demand cloud roles.",
    "Flexible Learning: Choose online, self-paced, or instructor-led courses.",
    "Team Empowerment: Boost your organization's capabilities with corporate training."
  ];

  // Course Offerings
  const courses = [
    {
      name: "AWS Certified Solutions Architect",
      logo: "https://placehold.co/100x100/FF9900/FFFFFF?text=AWS",
      description: "Learn to design and deploy scalable AWS architectures with hands-on labs."
    },
    {
      name: "Azure DevOps Engineer Expert",
      logo: "https://placehold.co/100x100/0078D4/FFFFFF?text=Azure",
      description: "Master Azure DevOps, CI/CD pipelines, and infrastructure automation."
    },
    {
      name: "Google Cloud Professional DevOps",
      logo: "https://placehold.co/100x100/4285F4/FFFFFF?text=GCP",
      description: "Build expertise in GCP's DevOps tools, including Kubernetes and Cloud Build."
    },
    {
      name: "Kubernetes for SRE",
      logo: "https://placehold.co/100x100/326CE5/FFFFFF?text=Kubernetes",
      description: "Learn container orchestration and SRE practices with Kubernetes and Helm."
    }
  ];

  return (
    <main className="container mx-auto p-8 py-20 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
          🎓 Training & Career Guidance
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Unlock your potential with our hands-on training programs in Cloud, DevOps, and SRE. From real-world projects to personalized career coaching and corporate training, we empower individuals and teams to excel in the cloud era.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Enroll Today
          </Link>
          <Link
            to="/contact"
            className="bg-white dark:bg-gray-900 border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>

      {/* Training Programs Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Our Training Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainingPrograms.map((program, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              <span className="text-4xl">{program.icon}</span>
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{program.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{program.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-16 py-12 px-8 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Benefits of Our Training Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 dark:text-gray-300">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-inner">
              <span className="text-indigo-500 mr-2">✅</span> {benefit}
            </div>
          ))}
        </div>
      </div>

      {/* Course Offerings Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Featured Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              <img src={course.logo} alt={`${course.name} logo`} className="mx-auto mb-4 w-16 h-16 object-contain" />
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{course.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{course.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Build Your Cloud Career?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Join our training programs to gain in-demand skills and advance your career in Cloud, DevOps, and SRE. Contact us to start your learning journey today.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Start Learning Now
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

export default TrainingCareerGuidancePage;