import React from 'react';
import { CheckCircle, Target, Eye, Gift, Lightbulb, Users, Handshake } from 'lucide-react'; // Importing relevant icons

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-8 mb-12 transition-colors duration-300">
      <h1 className="text-5xl font-extrabold text-center text-indigo-700 dark:text-indigo-400 mb-6 leading-tight">
        About <span className="text-gray-900 dark:text-white">AerosVision</span>
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
        AerosVision is more than just a platform; it's a vibrant community dedicated to fostering continuous learning and innovation. We connect ambitious individuals with world-class knowledge and practical skills.
      </p>

      {/* Our Mission Section */}
      <section className="mb-12 border-t border-gray-200 dark:border-gray-700 pt-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center">
          <Target size={32} className="mr-3 text-red-500" />
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto">
          Our mission is to empower individuals and businesses globally by providing accessible, high-quality educational resources and innovative solutions. We strive to bridge the gap between theoretical knowledge and practical application, ensuring our community is always at the forefront of technological and business advancements.
        </p>
      </section>

      {/* Our Vision Section */}
      <section className="mb-12 border-t border-gray-200 dark:border-gray-700 pt-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center">
          <Eye size={32} className="mr-3 text-blue-500" />
          Our Vision
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto">
          We envision a world where anyone, regardless of their background or location, has the opportunity to learn, grow, and contribute meaningfully to the digital economy. AerosVision aims to be the leading platform for professional development in cloud technologies, DevOps, and beyond.
        </p>
      </section>

      {/* What We Offer Section */}
      <section className="mb-12 border-t border-gray-200 dark:border-gray-700 pt-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center justify-center">
          <Gift size={32} className="mr-3 text-green-500" />
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
            <Lightbulb size={48} className="text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Expert-Led Courses</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Access a wide array of courses taught by industry professionals and certified experts.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
            <Users size={48} className="text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Vibrant Community</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Join a supportive community of learners and professionals to share knowledge and collaborate.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
            <Handshake size={48} className="text-teal-500 mb-4" />
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Career Advancement</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Gain in-demand skills and certifications to accelerate your career and achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-12 border-t border-gray-200 dark:border-gray-700 pt-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center justify-center">
          <CheckCircle size={32} className="mr-3 text-emerald-500" />
          Why Choose AerosVision?
        </h2>
        <ul className="text-lg text-gray-700 dark:text-gray-300 space-y-4 max-w-3xl mx-auto list-disc pl-6">
          <li>
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">Comprehensive Curriculum:</span> Our courses are meticulously designed to cover both foundational concepts and advanced topics.
          </li>
          <li>
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">Practical, Hands-on Learning:</span> We emphasize practical application, ensuring you can immediately apply what you learn.
          </li>
          <li>
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">Flexible Learning Paths:</span> Learn at your own pace, anytime, anywhere, with our self-paced modules and flexible schedules.
          </li>
          <li>
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">Dedicated Support:</span> Our team is always ready to assist you on your learning journey, from technical queries to career guidance.
          </li>
        </ul>
      </section>

      <div className="text-center mt-12">
        <p className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Join us on our mission to make learning accessible and impactful for everyone, everywhere.
        </p>
        <a
          href="/signup"
          className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
        >
          Get Started with AerosVision
          <span className="ml-3">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
