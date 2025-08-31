import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Briefcase, Zap, Calendar, Users } from 'lucide-react'; // Using Cloud for general cloud, Calendar and Users for training details

const GoogleCloudPlatformPage = () => {
  const [activeTab, setActiveTab] = useState('overview'); // State to manage active horizontal tab
  const [activeTrainingSubTab, setActiveTrainingSubTab] = useState('instructorLed'); // State for vertical sub-tabs within Trainings

  // Sample Training Data for Instructor-Led Workshops
  const sampleTraining = {
    id: 'gcp-kubernetes-workshop-001',
    title: 'Google Kubernetes Engine (GKE) Fundamentals',
    description: 'A hands-on workshop to get started with deploying, managing, and scaling containerized applications on Google Kubernetes Engine.',
    meetingDateTime: '2025-10-20T09:00:00', // Example date and time
    meetingMethod: 'Google Meet',
    bannerUrl: 'https://placehold.co/600x300/4285F4/FFFFFF?text=GCP+GKE+Workshop', // Placeholder banner URL
    registerLink: '/register-gcp-training/gcp-kubernetes-001', // Example registration link
  };

  // Helper function to format date and time
  const formatDateTime = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Function to render content based on the active horizontal tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <section className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center text-center">
              <Zap size={32} className="mr-3 text-blue-600 dark:text-blue-400" />
              Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  Google Cloud Platform (GCP) is a suite of cloud computing services that runs on the same infrastructure
                  that Google uses internally for its end-user products, such as Google Search, Gmail, and YouTube.
                  GCP provides a wide range of services for computing, data storage, data analytics, machine learning,
                  and more.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  GCP is known for its strong capabilities in data analytics, machine learning, and its global fiber network.
                  It offers highly scalable and flexible solutions for businesses of all sizes, from startups to large enterprises.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <img
                  src="https://placehold.co/400x250/4285F4/FFFFFF?text=GCP+Overview"
                  alt="GCP Overview"
                  className="rounded-lg shadow-md w-full max-w-sm md:max-w-full h-auto"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/4285F4/FFFFFF?text=GCP+Overview"; }}
                />
              </div>
            </div>
          </section>
        );
      case 'certifications':
        return (
          <section className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center text-center">
              <Award size={32} className="mr-3 text-green-600 dark:text-green-400" />
              Certifications
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-6">
              Validate your expertise with official Google Cloud Certifications. These certifications
              are highly valued and can significantly boost your career.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Associate Cloud Engineer</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Demonstrates foundational knowledge of Google Cloud services and the ability to deploy applications and monitor operations.
                </p>
                <Link to="/explore/gcp/associate-engineer-prep" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                  Learn More &rarr;
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Professional Cloud Architect</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  For individuals who design, develop, and manage robust, secure, scalable, highly available, and dynamic solutions to drive business objectives.
                </p>
                <Link to="/explore/gcp/cloud-architect-prep" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                  Learn More &rarr;
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Professional Data Engineer</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Focuses on designing, building, operationalizing, securing, and monitoring data processing systems with a particular emphasis on security and compliance.
                </p>
                <Link to="/explore/gcp/data-engineer-prep" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                  Learn More &rarr;
                </Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/plans" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                View All Certification Prep Plans <Award size={20} className="ml-2" />
              </Link>
            </div>
          </section>
        );
      case 'trainings':
        return (
          <section className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center text-center">
              <BookOpen size={32} className="mr-3 text-orange-600 dark:text-orange-400" />
              Trainings
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-6">
              Our comprehensive GCP training programs are designed to provide practical, hands-on skills
              for various Google Cloud services and solutions.
            </p>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Vertical Tabs for Training Sub-sections */}
              <div className="md:w-1/4 w-full bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Training Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setActiveTrainingSubTab('instructorLed')}
                      className={`w-full text-left px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center
                        ${activeTrainingSubTab === 'instructorLed'
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                    >
                      <Users size={18} className="mr-2" /> Instructor-Led Workshops
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTrainingSubTab('selfPaced')}
                      className={`w-full text-left px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center
                        ${activeTrainingSubTab === 'selfPaced'
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                    >
                      <BookOpen size={18} className="mr-2" /> Self-Paced Learning Paths
                    </button>
                  </li>
                </ul>
              </div>

              {/* Content Area for Training Sub-tabs */}
              <div className="md:w-3/4 w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                {activeTrainingSubTab === 'instructorLed' && (
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Instructor-Led Workshops</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-base mb-6">
                      Engage with expert instructors in live, interactive sessions. Perfect for deep dives into GCP services and best practices.
                    </p>

                    {/* Sample Training Card - Styled to match image */}
                    <div className="flex flex-col md:flex-row bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden border border-gray-300 dark:border-gray-600">
                      {/* Banner/Thumbnail */}
                      <div className="md:w-1/3 w-full flex-shrink-0">
                        <img
                          src={sampleTraining.bannerUrl}
                          alt={sampleTraining.title}
                          className="w-full h-48 md:h-full object-cover"
                          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x300/4285F4/FFFFFF?text=GCP+Training"; }} // Fallback image
                        />
                      </div>
                      {/* Content */}
                      <div className="md:w-2/3 w-full p-6 flex flex-col justify-between">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{sampleTraining.title}</h4>
                          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{sampleTraining.description}</p>
                          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                            <Calendar size={16} className="mr-2" />
                            <span>{formatDateTime(sampleTraining.meetingDateTime)}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
                            <Users size={16} className="mr-2" />
                            <span>Meeting Method: {sampleTraining.meetingMethod}</span>
                          </div>
                        </div>
                        <div className="flex justify-end"> {/* Aligned to bottom right */}
                          <Link
                            to={sampleTraining.registerLink}
                            className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-500 hover:bg-green-600 transition-colors duration-300"
                          >
                            Register
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* End Sample Training Card */}

                    <div className="text-center mt-8">
                      <Link to="/all-gcp-instructor-workshops" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                        View All Instructor-Led Workshops <BookOpen size={20} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                )}

                {activeTrainingSubTab === 'selfPaced' && (
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Self-Paced Learning Paths</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-base mb-6">
                      Learn at your own pace with our structured online content, including video lectures, labs, and quizzes.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">GCP Cloud Engineer Learning Path</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Comprehensive path covering core GCP services for cloud engineers.</p>
                        <Link to="/learning-path/gcp-cloud-engineer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium mt-3 inline-block">
                          Start Path &rarr;
                        </Link>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">GCP DevOps Learning Path</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Master DevOps practices and tools on Google Cloud Platform.</p>
                        <Link to="/learning-path/gcp-devops" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium mt-3 inline-block">
                          Start Path &rarr;
                        </Link>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">GCP Security Specialist Path</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Deep dive into securing your applications and data on GCP.</p>
                        <Link to="/learning-path/gcp-security" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium mt-3 inline-block">
                          Start Path &rarr;
                        </Link>
                      </div>
                    </div>
                    <div className="text-center mt-8">
                      <Link to="/explore/gcp-learning-paths" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                        Explore All Learning Paths <BookOpen size={20} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      case 'courses':
        return (
          <section className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center text-center">
              <BookOpen size={32} className="mr-3 text-purple-600 dark:text-purple-400" />
              Courses
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-6">
              Browse our extensive catalog of individual courses covering specific Google Cloud services and solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Introduction to Google Compute Engine</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Learn about Google's scalable virtual machines.</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Beginner | 4 hours</p>
                <Link to="/course/gcp-compute-engine" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium mt-3 inline-block">
                  Start Course &rarr;
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">BigQuery for Data Analysts</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Master Google's fully managed, petabyte-scale analytics data warehouse.</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Intermediate | 6 hours</p>
                <Link to="/course/gcp-bigquery" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium mt-3 inline-block">
                  Start Course &rarr;
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Implementing Cloud Security on GCP</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Learn how to secure your applications and data on Google Cloud.</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Advanced | 8 hours</p>
                <Link to="/course/gcp-security" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium mt-3 inline-block">
                  Start Course &rarr;
                </Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/explore" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                Browse All GCP Courses <BookOpen size={20} className="ml-2" />
              </Link>
            </div>
          </section>
        );
      case 'jobs':
        return (
          <section>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center text-center">
              <Briefcase size={32} className="mr-3 text-red-600 dark:text-red-400" />
              GCP Job Opportunities
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-6">
              Google Cloud skills are highly valued. Here are some in-demand job roles
              where GCP expertise is crucial.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">GCP Cloud Engineer</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Responsible for deploying, monitoring, and maintaining projects on Google Cloud.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Key Skills:</span> Compute Engine, Cloud Storage, VPC, IAM.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">GCP Data Engineer</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Designs and builds data processing systems, data pipelines, and machine learning models on GCP.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Key Skills:</span> BigQuery, Dataflow, Dataproc, AI Platform.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">GCP Cloud Architect</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Designs, plans, and manages solutions architecture on Google Cloud.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Key Skills:</span> Cloud Architecture, Hybrid Cloud, Security.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">GCP DevOps Engineer</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Implements and manages CI/CD pipelines, automation, and infrastructure as code practices on GCP.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Key Skills:</span> Cloud Build, GKE, Cloud Deployment Manager, Terraform.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 transition-colors duration-300">
                Connect with Recruiters <Briefcase size={20} className="ml-2" />
              </Link>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-8 mb-12 transition-colors duration-300">
      <h1 className="text-5xl lg:text-5xl font-extrabold text-center text-blue-700 dark:text-blue-400 mb-10 leading-tight">
        Explore Google Cloud Platform (GCP)
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 text-center max-w-full md:max-w-3xl mx-auto mb-12 px-2">
        Harness the power of Google's innovative cloud infrastructure.
        AerosVision provides in-depth resources to help you master GCP.
      </p>

      {/* Horizontal Tabs Navigation */}
      <nav className="mb-12 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap justify-center -mb-px">
          <li>
            <button
              onClick={() => setActiveTab('overview')}
              className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group text-base md:text-lg font-medium transition-colors duration-200
                ${activeTab === 'overview'
                  ? 'text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-400'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-400 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-500'
                }`}
            >
              <Zap size={20} className="mr-2" /> Overview
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group text-base md:text-lg font-medium transition-colors duration-200
                ${activeTab === 'certifications'
                  ? 'text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-400'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-400 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-500'
                }`}
            >
              <Award size={20} className="mr-2" /> Certifications
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('trainings')}
              className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group text-base md:text-lg font-medium transition-colors duration-200
                ${activeTab === 'trainings'
                  ? 'text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-400'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-400 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-500'
                }`}
            >
              <BookOpen size={20} className="mr-2" /> Trainings
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('courses')}
              className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group text-base md:text-lg font-medium transition-colors duration-200
                ${activeTab === 'courses'
                  ? 'text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-400'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-400 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-500'
                }`}
            >
              <BookOpen size={20} className="mr-2" /> Courses
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('jobs')}
              className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group text-base md:text-lg font-medium transition-colors duration-200
                ${activeTab === 'jobs'
                  ? 'text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-400'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-400 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-500'
                }`}
            >
              <Briefcase size={20} className="mr-2" /> GCP Job Opportunities
            </button>
          </li>
        </ul>
      </nav>

      {/* Render content based on active tab */}
      {renderTabContent()}

    </div>
  );
};

export default GoogleCloudPlatformPage;
