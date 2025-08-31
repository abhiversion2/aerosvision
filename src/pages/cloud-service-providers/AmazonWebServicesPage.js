import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Briefcase, Zap, Calendar, Users } from 'lucide-react'; // Added Cloud icon for overall AWS

const AmazonWebServicesPage = () => {
  const [activeTab, setActiveTab] = useState('overview'); // State to manage active horizontal tab
  const [activeTrainingSubTab, setActiveTrainingSubTab] = useState('instructorLed'); // State for vertical sub-tabs within Trainings

  // Sample Training Data for Instructor-Led Workshops
  const sampleTraining = {
    id: 'aws-devops-workshop-001',
    title: 'AWS DevOps Best Practices Workshop',
    description: 'A hands-on workshop designed to teach you how to implement CI/CD pipelines, manage infrastructure as code, and monitor applications using AWS DevOps services.',
    meetingDateTime: '2025-09-10T14:00:00', // Example date and time
    meetingMethod: 'Zoom',
    bannerUrl: 'https://placehold.co/600x300/F97316/FFFFFF?text=AWS+DevOps+Workshop', // Placeholder banner URL
    registerLink: '/register-aws-training/aws-devops-workshop-001', // Example registration link
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
              <Zap size={32} className="mr-3 text-orange-600 dark:text-orange-400" />
              Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left"> {/* Added text-center/left for responsiveness */}
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud platform,
                  offering over 200 fully featured services from data centers globally. Millions of customers—including
                  the fastest-growing startups, largest enterprises, and leading government agencies—are using AWS to
                  lower costs, become more agile, and innovate faster.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  AWS offers a vast array of services for compute, storage, databases, networking, analytics, machine learning,
                  artificial intelligence, IoT, security, and enterprise applications.
                </p>
              </div>
              <div className="flex justify-center md:justify-end"> {/* Centered on mobile, right-aligned on desktop */}
                <img
                  src="https://placehold.co/400x250/F97316/FFFFFF?text=AWS+Overview"
                  alt="AWS Overview"
                  className="rounded-lg shadow-md w-full max-w-sm md:max-w-full h-auto" // Responsive image sizing
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/F97316/FFFFFF?text=AWS+Overview"; }}
                />
              </div>
            </div>
          </section>
        );
      case 'certifications':
        return (
          <section className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center text-center">
              <Award size={32} className="mr-3 text-yellow-600 dark:text-yellow-400" />
              Certifications
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-6">
              Validate your cloud expertise with industry-recognized AWS Certifications. These credentials
              demonstrate your proficiency and enhance your career prospects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2">AWS Certified Cloud Practitioner</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  A foundational certification covering basic AWS cloud concepts, services, security, architecture, and pricing.
                </p>
                <Link to="/explore/aws/cloud-practitioner-prep" className="text-orange-600 dark:text-orange-400 hover:underline text-sm font-medium">
                  Learn More &rarr;
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2">AWS Certified Solutions Architect – Associate</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  For individuals performing a solutions architect role, covering designing distributed systems on AWS.
                </p>
                <Link to="/explore/aws/saa-prep" className="text-orange-600 dark:text-orange-400 hover:underline text-sm font-medium">
                  Learn More &rarr;
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2">AWS Certified Developer – Associate</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  For developers with one or more years of hands-on experience developing and maintaining an AWS-based application.
                </p>
                <Link to="/explore/aws/developer-associate-prep" className="text-orange-600 dark:text-orange-400 hover:underline text-sm font-medium">
                  Learn More &rarr;
                </Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/plans" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition-colors duration-300">
                View All Certification Prep Plans <Award size={20} className="ml-2" />
              </Link>
            </div>
          </section>
        );
      case 'trainings':
        return (
          <section className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center text-center">
              <BookOpen size={32} className="mr-3 text-blue-600 dark:text-blue-400" />
              Trainings
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-6">
              Our comprehensive AWS training programs are designed to provide practical, hands-on skills
              for various AWS services and use cases.
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
                          ? 'bg-orange-600 text-white shadow-md'
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
                          ? 'bg-orange-600 text-white shadow-md'
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
                      Participate in live, interactive sessions with AWS certified instructors. Ideal for in-depth learning
                      and real-time problem-solving.
                    </p>

                    {/* Sample Training Card - Styled to match image */}
                    <div className="flex flex-col md:flex-row bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden border border-gray-300 dark:border-gray-600">
                      {/* Banner/Thumbnail */}
                      <div className="md:w-1/3 w-full flex-shrink-0">
                        <img
                          src={sampleTraining.bannerUrl}
                          alt={sampleTraining.title}
                          className="w-full h-48 md:h-full object-cover"
                          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x300/F97316/FFFFFF?text=AWS+Training"; }} // Fallback image
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
                      <Link to="/all-aws-instructor-workshops" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition-colors duration-300">
                        View All Instructor-Led Workshops <BookOpen size={20} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                )}

                {activeTrainingSubTab === 'selfPaced' && (
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Self-Paced Learning Paths</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-base mb-6">
                      Learn at your convenience with our curated online content, including video tutorials, labs, and assessments.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2">AWS DevOps Engineer Path</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Comprehensive modules from beginner to advanced, covering CI/CD, IaC, and monitoring.</p>
                        <Link to="/learning-path/aws-devops" className="text-orange-600 dark:text-orange-400 hover:underline text-sm font-medium mt-3 inline-block">
                          Start Path &rarr;
                        </Link>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2">AWS Machine Learning Specialist Path</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Build and deploy intelligent solutions with AWS ML services, including SageMaker and Rekognition.</p>
                        <Link to="/learning-path/aws-ml" className="text-orange-600 dark:text-orange-400 hover:underline text-sm font-medium mt-3 inline-block">
                          Start Path &rarr;
                        </Link>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2">AWS Security Best Practices Path</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Master security best practices and services, including identity, network, and data protection on AWS.</p>
                        <Link to="/learning-path/aws-security" className="text-orange-600 dark:text-orange-400 hover:underline text-sm font-medium mt-3 inline-block">
                          Start Path &rarr;
                        </Link>
                      </div>
                    </div>
                    <div className="text-center mt-8">
                      <Link to="/explore/aws-learning-paths" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition-colors duration-300">
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
              <BookOpen size={32} className="mr-3 text-teal-600 dark:text-teal-400" />
              Courses
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-6">
              Browse our extensive catalog of individual courses covering specific AWS services and solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2">Introduction to AWS S3</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Understand scalable storage with Amazon S3 for various data types.</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Beginner | 3 hours</p>
                <Link to="/course/aws-s3" className="text-orange-600 dark:text-orange-400 hover:underline text-sm font-medium mt-3 inline-block">
                  Start Course &rarr;
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2">AWS EC2 Fundamentals</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Learn how to launch, manage, and scale virtual servers in the cloud.</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Intermediate | 5 hours</p>
                <Link to="/course/aws-ec2" className="text-orange-600 dark:text-orange-400 hover:underline text-sm font-medium mt-3 inline-block">
                  Start Course &rarr;
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2">Building Serverless APIs with AWS Lambda & API Gateway</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Develop and deploy serverless applications using AWS services.</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Advanced | 7 hours</p>
                <Link to="/course/aws-serverless" className="text-orange-600 dark:text-orange-400 hover:underline text-sm font-medium mt-3 inline-block">
                  Start Course &rarr;
                </Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/explore" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition-colors duration-300">
                Browse All AWS Courses <BookOpen size={20} className="ml-2" />
              </Link>
            </div>
          </section>
        );
      case 'jobs':
        return (
          <section>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center text-center">
              <Briefcase size={32} className="mr-3 text-red-600 dark:text-red-400" />
              AWS Job Opportunities
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-6">
              AWS skills are highly sought after in the tech industry. Here are some in-demand job roles
              where AWS expertise is critical.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2">Cloud Engineer (AWS)</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Designs, implements, and manages cloud infrastructure and services on AWS.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Key Skills:</span> EC2, S3, VPC, IAM, CloudFormation.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2">DevOps Engineer (AWS)</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Implements CI/CD pipelines, automates infrastructure, and ensures seamless software delivery on AWS.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Key Skills:</span> AWS DevOps, Jenkins, Docker, Kubernetes, Terraform.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2">AWS Solutions Architect</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Designs highly available, cost-efficient, fault-tolerant, and scalable systems on AWS.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Key Skills:</span> Architectural Design, Security Best Practices, Cost Optimization.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2">Cloud Security Specialist (AWS)</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Focuses on securing AWS environments, implementing security controls, and managing compliance.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Key Skills:</span> AWS Security Hub, WAF, KMS, GuardDuty, Network Security.
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
      <h1 className="text-5xl lg:text-5xl font-extrabold text-center text-orange-700 dark:text-orange-400 mb-10 leading-tight">
        Explore Amazon Web Services (AWS)
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 text-center max-w-full md:max-w-3xl mx-auto mb-12 px-2">
        Discover the world's most comprehensive and broadly adopted cloud platform.
        AerosVision offers extensive resources to help you master AWS.
      </p>

      {/* Horizontal Tabs Navigation */}
      <nav className="mb-12 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap justify-center -mb-px">
          <li>
            <button
              onClick={() => setActiveTab('overview')}
              className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group text-base md:text-lg font-medium transition-colors duration-200
                ${activeTab === 'overview'
                  ? 'text-orange-600 border-orange-600 dark:text-orange-400 dark:border-orange-400'
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
                  ? 'text-orange-600 border-orange-600 dark:text-orange-400 dark:border-orange-400'
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
                  ? 'text-orange-600 border-orange-600 dark:text-orange-400 dark:border-orange-400'
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
                  ? 'text-orange-600 border-orange-600 dark:text-orange-400 dark:border-orange-400'
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
                  ? 'text-orange-600 border-orange-600 dark:text-orange-400 dark:border-orange-400'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-400 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-500'
                }`}
            >
              <Briefcase size={20} className="mr-2" /> AWS Job Opportunities
            </button>
          </li>
        </ul>
      </nav>

      {/* Render content based on active tab */}
      {renderTabContent()}

    </div>
  );
};

export default AmazonWebServicesPage;
