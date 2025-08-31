import React from 'react';
import { GraduationCap, DollarSign, Users, CheckCircle, Lightbulb, TrendingUp, Mic2, FileText } from 'lucide-react'; // Added more icons for new sections

const TeachOnAerosVisionPage = () => {
  const benefits = [
    {
      icon: <GraduationCap size={40} className="text-indigo-600 dark:text-indigo-400 mb-4" />,
      title: 'Reach a Global Audience',
      description: 'Share your expertise with thousands of eager learners from around the world, expanding your impact and influence.',
    },
    {
      icon: <DollarSign size={40} className="text-indigo-600 dark:text-indigo-400 mb-4" />,
      title: 'Earn Passive Income',
      description: 'Monetize your knowledge and skills by creating high-quality courses and earning a generous share of course sales.',
    },
    {
      icon: <Users size={40} className="text-indigo-600 dark:text-indigo-400 mb-4" />,
      title: 'Build Your Brand',
      description: 'Establish yourself as a respected thought leader in your field and grow your professional network within a vibrant community.',
    },
    {
      icon: <CheckCircle size={40} className="text-indigo-600 dark:text-indigo-400 mb-4" />,
      title: 'Flexible Teaching',
      description: 'Enjoy the freedom to create and publish courses at your own pace, on your own schedule, fitting teaching into your lifestyle.',
    },
    {
      icon: <Lightbulb size={40} className="text-indigo-600 dark:text-indigo-400 mb-4" />,
      title: 'Dedicated Support',
      description: 'Receive comprehensive support from our team, including content review, technical assistance, and marketing guidance.',
    },
    {
      icon: <TrendingUp size={40} className="text-indigo-600 dark:text-indigo-400 mb-4" />,
      title: 'Continuous Growth',
      description: 'Benefit from data-driven insights and feedback to continuously improve your courses and teaching effectiveness.',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-4 transition-colors duration-300">
      <div className="container mx-auto text-center">
        {/* Main Title Section */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
          <span className="text-indigo-600 dark:text-indigo-400">Teach</span> on AerosVision
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Join our growing community of expert instructors and share your knowledge with the world. Inspire learners, build your brand, and earn revenue by teaching what you love.
        </p>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">Why Teach with AerosVision?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl dark:shadow-none dark:hover:shadow-lg dark:hover:shadow-indigo-500/20">
                {benefit.icon}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-16 border-t border-gray-200 dark:border-gray-700 pt-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md text-center">
              <Mic2 size={48} className="text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">1. Create Your Course</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Plan your curriculum, record high-quality videos, and create engaging learning materials.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md text-center">
              <FileText size={48} className="text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">2. Submit for Review</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Our team will review your course content to ensure it meets AerosVision's quality standards.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md text-center">
              <TrendingUp size={48} className="text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">3. Publish & Earn</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Once approved, your course goes live, and you start earning from every enrollment.</p>
            </div>
          </div>
        </section>

        {/* Instructor Requirements Section */}
        <section className="mb-16 border-t border-gray-200 dark:border-gray-700 pt-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Instructor Requirements</h2>
          <ul className="text-lg text-gray-700 dark:text-gray-300 space-y-4 max-w-3xl mx-auto text-left list-disc pl-6">
            <li>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">Expertise in Your Field:</span> Demonstrate strong knowledge and practical experience in the subject you wish to teach.
            </li>
            <li>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">High-Quality Content:</span> Produce engaging, well-structured, and accurate course materials and video lectures.
            </li>
            <li>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">Commitment to Learners:</span> Be prepared to interact with students, answer questions, and provide constructive feedback.
            </li>
            <li>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">Technical Proficiency:</span> Have the necessary equipment (microphone, camera) and software to record and edit your course.
            </li>
          </ul>
        </section>


        {/* Call to Action Section */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between text-left md:text-center space-y-6 md:space-y-0 md:space-x-8 transition-colors duration-300 dark:shadow-none dark:hover:shadow-xl dark:hover:shadow-indigo-500/20">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Become an Instructor?</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Start your journey as a AerosVision instructor today. We provide all the tools and support you need to create impactful courses and reach a global audience.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
              Apply to Teach
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TeachOnAerosVisionPage;
