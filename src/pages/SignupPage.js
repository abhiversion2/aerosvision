import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { User, Mail, Lock, UserPlus, XCircle, Code, Cloud, Briefcase, BookOpen, Clock, Linkedin } from 'lucide-react';

const SignupPage = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  // State for common user signup fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // State for instructor specific fields
  const [isInstructor, setIsInstructor] = useState(false);
  const [instructorCategory, setInstructorCategory] = useState('');
  const [instructorSkill, setInstructorSkill] = useState('');
  const [bio, setBio] = useState('');
  const [linkedinProfile, setLinkedinProfile] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [preferredTeachingStyle, setPreferredTeachingStyle] = useState('');


  // Dropdown options
  const technologyCategories = [
    'DevOps',
    'Cloud',
    'Programming',
    'Data Science & AI',
    'Cybersecurity',
    'Web Development',
    'Mobile Development',
    'Database Management',
    'Project Management',
  ];

  const skillsByCategory = {
    DevOps: ['Azure DevOps Engineer', 'AWS DevOps Engineer', 'GCP DevOps Engineer', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Jenkins'],
    Cloud: ['Azure Administrator Associate', 'AWS Solutions Architect', 'GCP Associate Cloud Engineer', 'Azure Developer Associate', 'AWS Certified Developer', 'GCP Professional Cloud Architect', 'Azure Security Engineer'],
    Programming: ['Python', 'Java', 'JavaScript', 'C++', 'Go', 'Rust', 'Ruby', 'C#', 'Swift', 'Kotlin', 'PHP'],
    'Data Science & AI': ['Machine Learning', 'Deep Learning', 'Data Analysis', 'Big Data', 'SQL for Data Science', 'TensorFlow', 'PyTorch', 'Natural Language Processing'],
    Cybersecurity: ['Network Security', 'Ethical Hacking', 'Cloud Security', 'CompTIA Security+', 'CISSP', 'Penetration Testing'],
    'Web Development': ['React', 'Angular', 'Vue.js', 'Node.js', 'Django', 'Ruby on Rails', 'ASP.NET Core', 'Frontend Development', 'Backend Development', 'Fullstack Development'],
    'Mobile Development': ['iOS Development (Swift/Objective-C)', 'Android Development (Kotlin/Java)', 'React Native', 'Flutter', 'Xamarin'],
    'Database Management': ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Cassandra', 'Redis', 'Database Design'],
    'Project Management': ['Agile Scrum', 'PMP', 'Jira', 'Confluence', 'Risk Management', 'Stakeholder Management'],
  };

  const teachingStyles = ['Lecture-based', 'Hands-on Labs', 'Project-based', 'Interactive Discussions', 'Hybrid'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError(''); // Clear previous errors

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match!');
      return;
    }

    if (isInstructor) {
      console.log('Instructor Signup attempt:', {
        fullName,
        email,
        password,
        instructorCategory,
        instructorSkill,
        bio,
        linkedinProfile,
        yearsOfExperience,
        preferredTeachingStyle,
      });
      // Simulate successful signup and navigate to instructor dashboard
      alert('Instructor Signup successful! Redirecting to dashboard.');
      navigate('/instructor-dashboard'); // Navigate to the instructor dashboard
    } else {
      console.log('User Signup attempt:', { fullName, email, password });
      // Simulate successful signup for regular user
      alert('User Signup successful! You can now log in.');
      // Optionally navigate to a user dashboard or login page
      // navigate('/login');
    }

    // Clear form fields after successful submission (optional)
    // setFullName('');
    // setEmail('');
    // setPassword('');
    // setConfirmPassword('');
    // setInstructorCategory('');
    // setInstructorSkill('');
    // setBio('');
    // setLinkedinProfile('');
    // setYearsOfExperience('');
    // setPreferredTeachingStyle('');
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-600 to-indigo-500 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl dark:shadow-none dark:hover:shadow-xl dark:hover:shadow-indigo-500/20">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">
          Join <span className="text-indigo-600 dark:text-indigo-400">AerosVision</span> Today!
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          {isInstructor ? 'Become an instructor and share your expertise.' : 'Create your account and start your learning journey.'}
        </p>

        {/* Toggle between User and Instructor Signup */}
        <div className="flex justify-center mb-6 space-x-4">
          <button
            onClick={() => setIsInstructor(false)}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
              !isInstructor
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Learner Signup
          </button>
          <button
            onClick={() => setIsInstructor(true)}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
              isInstructor
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Instructor Signup
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name Input Field */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User size={20} className="text-gray-400 dark:text-gray-500" />
              </div>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                className="mt-1 block w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                aria-label="Full Name"
              />
            </div>
          </div>

          {/* Email Address Input Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail size={20} className="text-gray-400 dark:text-gray-500" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email Address"
              />
            </div>
          </div>

          {/* Password Input Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={20} className="text-gray-400 dark:text-gray-500" />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-1 block w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Password"
              />
            </div>
          </div>

          {/* Confirm Password Input Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={20} className="text-gray-400 dark:text-gray-500" />
              </div>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                className={`mt-1 block w-full pl-10 pr-4 py-2 border ${passwordError ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500`}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                aria-label="Confirm Password"
              />
            </div>
            {passwordError && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                <XCircle size={16} className="mr-1" />
                {passwordError}
              </p>
            )}
          </div>

          {/* Instructor Specific Fields (Conditional Rendering) */}
          {isInstructor && (
            <>
              <div>
                <label htmlFor="instructorCategory" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Category of Technology
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Cloud size={20} className="text-gray-400 dark:text-gray-500" />
                  </div>
                  <select
                    id="instructorCategory"
                    name="instructorCategory"
                    required
                    className="mt-1 block w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                    value={instructorCategory}
                    onChange={(e) => {
                      setInstructorCategory(e.target.value);
                      setInstructorSkill(''); // Reset skill when category changes
                    }}
                    aria-label="Category of Technology"
                  >
                    <option value="">Select a category</option>
                    {technologyCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="instructorSkill" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Skill
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Code size={20} className="text-gray-400 dark:text-gray-500" />
                  </div>
                  <select
                    id="instructorSkill"
                    name="instructorSkill"
                    required
                    className="mt-1 block w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                    value={instructorSkill}
                    onChange={(e) => setInstructorSkill(e.target.value)}
                    disabled={!instructorCategory} // Disable until a category is selected
                    aria-label="Skill"
                  >
                    <option value="">Select a skill</option>
                    {instructorCategory &&
                      skillsByCategory[instructorCategory].map((skill) => (
                        <option key={skill} value={skill}>
                          {skill}
                        </option>
                      ))}
                  </select>
                </div>
              </div>

              {/* Bio Field */}
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Short Bio
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BookOpen size={20} className="text-gray-400 dark:text-gray-500" />
                  </div>
                  <textarea
                    id="bio"
                    name="bio"
                    rows="3"
                    className="mt-1 block w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="Tell us about yourself and your teaching philosophy..."
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    aria-label="Short Bio"
                  ></textarea>
                </div>
              </div>

              {/* LinkedIn Profile Field */}
              <div>
                <label htmlFor="linkedinProfile" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  LinkedIn Profile URL
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Linkedin size={20} className="text-gray-400 dark:text-gray-500" />
                  </div>
                  <input
                    type="url"
                    id="linkedinProfile"
                    name="linkedinProfile"
                    className="mt-1 block w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="https://linkedin.com/in/yourprofile"
                    value={linkedinProfile}
                    onChange={(e) => setLinkedinProfile(e.target.value)}
                    aria-label="LinkedIn Profile URL"
                  />
                </div>
              </div>

              {/* Years of Experience Field */}
              <div>
                <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Years of Experience (Industry/Teaching)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Clock size={20} className="text-gray-400 dark:text-gray-500" />
                  </div>
                  <input
                    type="number"
                    id="yearsOfExperience"
                    name="yearsOfExperience"
                    min="0"
                    className="mt-1 block w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="e.g., 5"
                    value={yearsOfExperience}
                    onChange={(e) => setYearsOfExperience(e.target.value)}
                    aria-label="Years of Experience"
                  />
                </div>
              </div>

              {/* Preferred Teaching Style Field */}
              <div>
                <label htmlFor="preferredTeachingStyle" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Preferred Teaching Style
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Briefcase size={20} className="text-gray-400 dark:text-gray-500" /> {/* Re-using Briefcase icon */}
                  </div>
                  <select
                    id="preferredTeachingStyle"
                    name="preferredTeachingStyle"
                    className="mt-1 block w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                    value={preferredTeachingStyle}
                    onChange={(e) => setPreferredTeachingStyle(e.target.value)}
                    aria-label="Preferred Teaching Style"
                  >
                    <option value="">Select a style</option>
                    {teachingStyles.map((style) => (
                      <option key={style} value={style}>
                        {style}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </>
          )}

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-md shadow-lg flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            <UserPlus size={20} className="mr-2" />
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-200">
            Log in here
          </Link>
        </p>
      </div>
    </main>
  );
};

export default SignupPage;
