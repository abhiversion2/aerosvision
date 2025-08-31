import React, { useState } from 'react';
import { Calendar, User, DollarSign, BookOpen, FileText, Bell, PlusCircle, Edit, Trash2, ExternalLink} from 'lucide-react'; // Added new icons

// Helper function to format date and time
const formatDateTime = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Component for the Create New Training Form
const CreateTrainingForm = ({ onCreateTraining, onCancel, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [meetingDateTime, setMeetingDateTime] = useState(initialData?.meetingDateTime || '');
  const [meetingMethod, setMeetingMethod] = useState(initialData?.meetingMethod || '');
  const [bannerUrl, setBannerUrl] = useState(initialData?.bannerUrl || '');
  const [category, setCategory] = useState(initialData?.category || '');
  const [technology, setTechnology] = useState(initialData?.technology || '');
  const [skillDomain, setSkillDomain] = useState(initialData?.skillDomain || '');
  const [duration, setDuration] = useState(initialData?.duration || '');
  const [price, setPrice] = useState(initialData?.price || '');
  const [prerequisites, setPrerequisites] = useState(initialData?.prerequisites || '');
  const [learningObjectives, setLearningObjectives] = useState(initialData?.learningObjectives?.join('\n') || '');
  const [targetAudience, setTargetAudience] = useState(initialData?.targetAudience || '');
  const [trainingType, setTrainingType] = useState(initialData?.trainingType || ''); // New field
  const [isSeries, setIsSeries] = useState(initialData?.isSeries || false); // New field
  const [isPaid, setIsPaid] = useState(initialData?.isPaid ?? true); // New field, default to paid
  const [notes, setNotes] = useState(initialData?.notes || ''); // New field for custom/other details

  // Dropdown options
  const categories = [
    'Cloud Service Provider (CSP)', 'Programming Languages', 'Cybersecurity', 'Data Science',
    'DevOps', 'Project Management', 'Database Management', 'Web Development', 'Mobile Development',
    'Networking', 'Operating Systems', 'Business & Soft Skills'
  ];
  const technologiesByCategory = {
    'Cloud Service Provider (CSP)': ['Azure', 'AWS', 'Google Cloud Platform (GCP)', 'Oracle Cloud Infrastructure (OCI)'],
    'Programming Languages': ['Python', 'Java', 'JavaScript', 'C++', 'Go', 'Rust', 'Ruby', 'C#', 'Swift', 'Kotlin', 'PHP', 'TypeScript'],
    'Cybersecurity': ['Network Security', 'Ethical Hacking', 'Cloud Security', 'Endpoint Security', 'Security Operations', 'Identity & Access Management'],
    'Data Science': ['Machine Learning', 'Deep Learning', 'Data Analysis', 'Big Data', 'SQL for Data Science', 'Data Visualization', 'Business Intelligence'],
    'DevOps': ['Azure DevOps', 'AWS DevOps', 'GCP DevOps', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Jenkins', 'Git', 'CI/CD'],
    'Project Management': ['Agile Scrum', 'PMP', 'Jira', 'Confluence', 'Risk Management', 'Stakeholder Management', 'Waterfall'],
    'Database Management': ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Cassandra', 'Redis', 'Database Design', 'NoSQL Databases'],
    'Web Development': ['React', 'Angular', 'Vue.js', 'Node.js', 'Django', 'Ruby on Rails', 'ASP.NET Core', 'Frontend Development', 'Backend Development', 'Fullstack Development'],
    'Mobile Development': ['iOS Development (Swift/Objective-C)', 'Android Development (Kotlin/Java)', 'React Native', 'Flutter', 'Xamarin'],
    'Networking': ['TCP/IP', 'Routing & Switching', 'Network Security', 'Cisco Technologies', 'CompTIA Network+'],
    'Operating Systems': ['Linux Administration', 'Windows Server Administration', 'Unix Fundamentals'],
    'Business & Soft Skills': ['Communication', 'Leadership', 'Problem Solving', 'Time Management', 'Presentation Skills'],
  };
  const skillDomainsByTechnology = {
    Azure: ['DevOps', 'Administrator', 'Data Engineer', 'AI Engineer', 'Security Engineer', 'Solutions Architect', 'Developer'],
    AWS: ['Solutions Architect', 'Developer', 'SysOps Administrator', 'DevOps Engineer', 'Data Analytics', 'Security', 'Machine Learning'],
    'Google Cloud Platform (GCP)': ['Associate Cloud Engineer', 'Professional Cloud Architect', 'Professional Data Engineer', 'Professional DevOps Engineer'],
    'Oracle Cloud Infrastructure (OCI)': ['OCI Architect', 'OCI Developer', 'OCI Administrator'],
    Python: ['Web Development (Django/Flask)', 'Data Analysis (Pandas/NumPy)', 'Machine Learning (Scikit-learn)', 'Scripting & Automation', 'Backend Development'],
    Java: ['Backend Development (Spring)', 'Android Development', 'Enterprise Applications'],
    JavaScript: ['Frontend Development (React/Angular/Vue)', 'Backend Development (Node.js)', 'Fullstack Development'],
    'Network Security': ['Firewall Management', 'Intrusion Detection/Prevention', 'VPN Configuration', 'Security Auditing'],
    'Ethical Hacking': ['Penetration Testing', 'Vulnerability Assessment', 'Web Application Hacking'],
    'Machine Learning': ['Supervised Learning', 'Unsupervised Learning', 'Deep Learning', 'Reinforcement Learning'],
    'Agile Scrum': ['Scrum Master', 'Product Owner', 'Agile Coaching', 'Kanban'],
    // Add more granular skill domains for other technologies as needed
  };
  const meetingMethods = ['Google Meet', 'Microsoft Teams', 'Zoom', 'In-Person', 'Other Online Platform'];
  const trainingTypes = ['Webinar', 'Course', 'Workshop', 'Bootcamp', 'Seminar', 'Live Class', 'On-Demand Course'];


  const handleSubmit = (e) => {
    e.preventDefault();
    const newTraining = {
      id: initialData?.id || Date.now(), // Use existing ID if editing, otherwise generate new
      title,
      description,
      meetingDateTime,
      meetingMethod,
      bannerUrl,
      category,
      technology,
      skillDomain,
      duration,
      isSeries, // New field
      isPaid,   // New field
      price: isPaid ? price : 'Free', // Set price based on isPaid
      prerequisites,
      learningObjectives: learningObjectives.split('\n').filter(Boolean),
      targetAudience,
      trainingType, // New field
      notes, // New field
      status: 'Scheduled',
    };
    onCreateTraining(newTraining);
    // Reset form fields
    setTitle('');
    setDescription('');
    setMeetingDateTime('');
    setMeetingMethod('');
    setBannerUrl('');
    setCategory('');
    setTechnology('');
    setSkillDomain('');
    setDuration('');
    setPrice('');
    setPrerequisites('');
    setLearningObjectives('');
    setTargetAudience('');
    setTrainingType('');
    setIsSeries(false);
    setIsPaid(true);
    setNotes('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        {initialData ? 'Edit Training' : 'Create New Training'}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200" />
        </div>
        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required rows="3"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"></textarea>
        </div>
        {/* Meeting Date and Time */}
        <div>
          <label htmlFor="meetingDateTime" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Meeting Date & Time</label>
          <input type="datetime-local" id="meetingDateTime" value={meetingDateTime} onChange={(e) => setMeetingDateTime(e.target.value)} required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200" />
        </div>
        {/* Meeting Method */}
        <div>
          <label htmlFor="meetingMethod" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Meeting Method</label>
          <select id="meetingMethod" value={meetingMethod} onChange={(e) => setMeetingMethod(e.target.value)} required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200">
            <option value="">Select method</option>
            {meetingMethods.map(method => <option key={method} value={method}>{method}</option>)}
          </select>
        </div>
        {/* Banner URL */}
        <div>
          <label htmlFor="bannerUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Banner Image URL</label>
          <input type="url" id="bannerUrl" value={bannerUrl} onChange={(e) => setBannerUrl(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200" />
        </div>
        {/* Training Type */}
        <div>
          <label htmlFor="trainingType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Type of Training</label>
          <select id="trainingType" value={trainingType} onChange={(e) => setTrainingType(e.target.value)} required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200">
            <option value="">Select training type</option>
            {trainingTypes.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>
        {/* Single Meeting or Series */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Meeting Format</label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="isSeries"
                value="single"
                checked={!isSeries}
                onChange={() => setIsSeries(false)}
                className="form-radio text-indigo-600 h-4 w-4"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300">Single Meeting</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="isSeries"
                value="series"
                checked={isSeries}
                onChange={() => setIsSeries(true)}
                className="form-radio text-indigo-600 h-4 w-4"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300">Series</span>
            </label>
          </div>
        </div>
        {/* Paid or Free */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Pricing Model</label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="isPaid"
                value="paid"
                checked={isPaid}
                onChange={() => setIsPaid(true)}
                className="form-radio text-indigo-600 h-4 w-4"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300">Paid</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="isPaid"
                value="free"
                checked={!isPaid}
                onChange={() => setIsPaid(false)}
                className="form-radio text-indigo-600 h-4 w-4"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300">Free</span>
            </label>
          </div>
        </div>
        {/* Price (Conditional) */}
        {isPaid && (
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price</label>
            <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required={isPaid}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200" />
          </div>
        )}
        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
          <select id="category" value={category} onChange={(e) => { setCategory(e.target.value); setTechnology(''); setSkillDomain(''); }} required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200">
            <option value="">Select category</option>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
        {/* Technology */}
        <div>
          <label htmlFor="technology" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Technology</label>
          <select id="technology" value={technology} onChange={(e) => { setTechnology(e.target.value); setSkillDomain(''); }} disabled={!category} required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200">
            <option value="">Select technology</option>
            {category && technologiesByCategory[category]?.map(tech => <option key={tech} value={tech}>{tech}</option>)}
          </select>
        </div>
        {/* Skill Domain */}
        <div>
          <label htmlFor="skillDomain" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Skill Domain</label>
          <select id="skillDomain" value={skillDomain} onChange={(e) => setSkillDomain(e.target.value)} disabled={!technology} required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200">
            <option value="">Select skill domain</option>
            {technology && skillDomainsByTechnology[technology]?.map(domain => <option key={domain} value={domain}>{domain}</option>)}
          </select>
        </div>
        {/* Duration */}
        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Duration (e.g., 2 hours, 3 days)</label>
          <input type="text" id="duration" value={duration} onChange={(e) => setDuration(e.target.value)} required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200" />
        </div>
        {/* Prerequisites */}
        <div>
          <label htmlFor="prerequisites" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Prerequisites</label>
          <textarea id="prerequisites" value={prerequisites} onChange={(e) => setPrerequisites(e.target.value)} rows="2"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            placeholder="e.g., Basic understanding of cloud concepts, Familiarity with Python"></textarea>
        </div>
        {/* Learning Objectives */}
        <div>
          <label htmlFor="learningObjectives" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Learning Objectives (one per line)</label>
          <textarea id="learningObjectives" value={learningObjectives} onChange={(e) => setLearningObjectives(e.target.value)} required rows="4"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            placeholder="e.g.,
- Understand Azure core services
- Deploy web applications
- Manage virtual networks"></textarea>
        </div>
        {/* Target Audience */}
        <div>
          <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Target Audience</label>
          <input type="text" id="targetAudience" value={targetAudience} onChange={(e) => setTargetAudience(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            placeholder="e.g., Beginners in cloud, IT professionals, Developers"></input>
        </div>
        {/* Notes/Customization */}
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Notes / Customization (Optional)</label>
          <textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} rows="2"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            placeholder="Any specific details or custom requirements for this training..."></textarea>
        </div>

        <div className="flex justify-end space-x-3 mt-6">
          <button type="button" onClick={onCancel}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-400 dark:hover:bg-gray-700 transition-colors duration-200">
            Cancel
          </button>
          <button type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200">
            {initialData ? 'Update Training' : 'Create Training'}
          </button>
        </div>
      </form>
    </div>
  );
};

// Component for Scheduled Trainings
const ScheduledTrainings = ({ addNotification }) => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [trainings, setTrainings] = useState([]);
  const [editingTraining, setEditingTraining] = useState(null); // State to hold training being edited

  const handleCreateTraining = (newTraining) => {
    setTrainings([...trainings, newTraining]);
    addNotification({ id: Date.now(), type: 'success', message: `Training "${newTraining.title}" created successfully!` });
    setShowCreateForm(false); // Hide form after creation
  };

  const handleEditTraining = (trainingId) => {
    const trainingToEdit = trainings.find(t => t.id === trainingId);
    setEditingTraining(trainingToEdit);
    setShowCreateForm(true); // Show form in edit mode
  };

  const handleUpdateTraining = (updatedTraining) => {
    setTrainings(trainings.map(t => t.id === updatedTraining.id ? updatedTraining : t));
    addNotification({ id: Date.now(), type: 'info', message: `Training "${updatedTraining.title}" updated successfully!` });
    setEditingTraining(null); // Clear editing state
    setShowCreateForm(false); // Hide form after update
  };

  const handleDeleteTraining = (trainingId) => {
    const trainingToDelete = trainings.find(t => t.id === trainingId);
    if (window.confirm(`Are you sure you want to delete training "${trainingToDelete.title}"?`)) {
      setTrainings(trainings.filter(t => t.id !== trainingId));
      addNotification({ id: Date.now(), type: 'error', message: `Training "${trainingToDelete.title}" deleted.` });
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Scheduled Trainings</h2>
        <button
          onClick={() => { setShowCreateForm(true); setEditingTraining(null); }} // Clear editing state when creating new
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center transition-colors duration-200"
        >
          <PlusCircle size={20} className="mr-2" /> Create New Training
        </button>
      </div>

      {showCreateForm ? (
        <CreateTrainingForm
          onCreateTraining={editingTraining ? handleUpdateTraining : handleCreateTraining}
          onCancel={() => { setShowCreateForm(false); setEditingTraining(null); }}
          initialData={editingTraining} // Pass initial data for editing
        />
      ) : (
        <>
          {trainings.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-400 mt-10">No trainings scheduled yet. Click "Create New Training" to get started!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainings.map((training) => (
                <div key={training.id} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col">
                  {training.bannerUrl && (
                    <img src={training.bannerUrl} alt={training.title} className="w-full h-32 object-cover rounded-md mb-4" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x200/6366F1/FFFFFF?text=Training+Banner"; }} />
                  )}
                  <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{training.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 flex-grow">{training.description}</p>
                  <div className="text-gray-600 dark:text-gray-400 text-sm space-y-1 mt-auto pt-4 border-t border-gray-200 dark:border-gray-600">
                    <p><strong>Type:</strong> {training.trainingType}</p> {/* Display new field */}
                    <p><strong>Format:</strong> {training.isSeries ? 'Series' : 'Single Meeting'}</p> {/* Display new field */}
                    <p><strong>Pricing:</strong> {training.isPaid ? 'Paid' : 'Free'}</p> {/* Display new field */}
                    {training.isPaid && <p><strong>Price:</strong> {training.price}</p>} {/* Display price conditionally */}
                    <p><strong>Date & Time:</strong> {formatDateTime(training.meetingDateTime)}</p>
                    <p><strong>Method:</strong> {training.meetingMethod}</p>
                    <p><strong>Category:</strong> {training.category}</p>
                    <p><strong>Technology:</strong> {training.technology}</p>
                    <p><strong>Skill:</strong> {training.skillDomain}</p>
                    <p><strong>Duration:</strong> {training.duration}</p>
                    {training.prerequisites && <p><strong>Prerequisites:</strong> {training.prerequisites}</p>}
                    {training.learningObjectives && training.learningObjectives.length > 0 && (
                      <div>
                        <strong>Objectives:</strong>
                        <ul className="list-disc list-inside ml-4">
                          {training.learningObjectives.map((obj, i) => <li key={i}>{obj}</li>)}
                        </ul>
                      </div>
                    )}
                    {training.targetAudience && <p><strong>Target Audience:</strong> {training.targetAudience}</p>}
                    {training.notes && <p><strong>Notes:</strong> {training.notes}</p>} {/* Display new field */}
                  </div>
                  <div className="flex justify-end space-x-2 mt-4">
                    <button onClick={() => handleEditTraining(training.id)} className="p-2 rounded-full text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                      <Edit size={18} />
                    </button>
                    <button onClick={() => handleDeleteTraining(training.id)} className="p-2 rounded-full text-red-600 hover:bg-red-100 dark:hover:bg-red-900 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

// Component for Instructor Profile
const InstructorProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    bio: 'Experienced cloud architect with a passion for teaching. Specializing in Azure and AWS solutions, I enjoy breaking down complex topics into understandable concepts. My teaching style focuses on hands-on labs and real-world project scenarios.',
    linkedin: 'https://www.linkedin.com/in/janedoe',
    yearsOfExperience: 12,
    preferredTeachingStyle: 'Hands-on Labs',
    // Add other profile fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // In a real application, you would send this data to a backend API
    console.log('Saving profile:', profile);
    alert('Profile updated successfully!'); // Placeholder
    setIsEditing(false);
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Your Profile</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            />
          ) : (
            <p className="text-lg text-gray-900 dark:text-gray-200">{profile.name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            />
          ) : (
            <p className="text-lg text-gray-900 dark:text-gray-200">{profile.email}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Bio:</label>
          {isEditing ? (
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            ></textarea>
          ) : (
            <p className="text-lg text-gray-900 dark:text-gray-200">{profile.bio}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">LinkedIn Profile:</label>
          {isEditing ? (
            <input
              type="url"
              name="linkedin"
              value={profile.linkedin}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            />
          ) : (
            <p className="text-lg text-indigo-600 dark:text-indigo-400 hover:underline">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center">
                {profile.linkedin} <ExternalLink size={16} className="ml-1" />
              </a>
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Years of Experience:</label>
          {isEditing ? (
            <input
              type="number"
              name="yearsOfExperience"
              value={profile.yearsOfExperience}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            />
          ) : (
            <p className="text-lg text-gray-900 dark:text-gray-200">{profile.yearsOfExperience} years</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Preferred Teaching Style:</label>
          {isEditing ? (
            <select
              name="preferredTeachingStyle"
              value={profile.preferredTeachingStyle}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            >
              {['Lecture-based', 'Hands-on Labs', 'Project-based', 'Interactive Discussions', 'Hybrid'].map(style => (
                <option key={style} value={style}>{style}</option>
              ))}
            </select>
          ) : (
            <p className="text-lg text-gray-900 dark:text-gray-200">{profile.preferredTeachingStyle}</p>
          )}
        </div>
      </div>
      <div className="mt-6 flex justify-end space-x-3">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-400 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

// Component for Notifications
const Notifications = ({ notifications }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Notifications</h2>
      {notifications.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No new notifications.</p>
      ) : (
        <div className="space-y-4">
          {notifications.map(notification => (
            <div
              key={notification.id}
              className={`p-4 rounded-md ${
                notification.type === 'success' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                notification.type === 'info' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
              }`}
            >
              <p className="font-medium">{notification.message}</p>
              <span className="text-xs opacity-75">{new Date(notification.id).toLocaleString()}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


// Main Instructor Dashboard Component
const InstructorDashboard = () => {
  const [activeTab, setActiveTab] = useState('scheduledTrainings'); // Default active tab
  const [notifications, setNotifications] = useState([]);

  const addNotification = (newNotification) => {
    setNotifications((prevNotifications) => [newNotification, ...prevNotifications].slice(0, 10)); // Keep last 10 notifications
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'scheduledTrainings':
        return <ScheduledTrainings addNotification={addNotification} />;
      case 'profile':
        return <InstructorProfile />;
      case 'invoices':
        return (
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Invoices</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Here you can view your past invoices and payment history.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-gray-700 rounded-lg overflow-hidden">
                <thead className="bg-gray-100 dark:bg-gray-600">
                  <tr>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Invoice ID</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amount</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-200">INV-2024-001</td>
                    <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-200">Jul 1, 2024</td>
                    <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-200">$250.00</td>
                    <td className="py-3 px-4 text-sm text-green-600 dark:text-green-400">Paid</td>
                    <td className="py-3 px-4 text-sm text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer">View PDF</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-200">INV-2024-002</td>
                    <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-200">Aug 1, 2024</td>
                    <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-200">$180.00</td>
                    <td className="py-3 px-4 text-sm text-green-600 dark:text-green-400">Paid</td>
                    <td className="py-3 px-4 text-sm text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer">View PDF</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-200">INV-2024-003</td>
                    <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-200">Sep 1, 2024</td>
                    <td className="py-3 px-4 text-sm text-yellow-600 dark:text-yellow-400">Pending</td>
                    <td className="py-3 px-4 text-sm text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer">View Details</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
              For any discrepancies or questions regarding your invoices, please contact support.
            </p>
          </div>
        );
      case 'portalGuide':
        return (
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Portal Guide</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Welcome to the AerosVision Instructor Portal Guide! This section provides comprehensive instructions
              and tips to help you navigate and utilize all features effectively.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Getting Started</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li>**Dashboard Overview:** Understand your main dashboard, quick stats, and recent activities.</li>
              <li>**Profile Setup:** Learn how to complete and optimize your instructor profile for learners.</li>
              <li>**Scheduling Trainings:** Step-by-step guide on creating, updating, and managing your training sessions.</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Managing Your Content</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li>**Uploading Materials:** How to upload presentations, code samples, and other resources.</li>
              <li>**Engaging with Learners:** Best practices for Q&A, feedback, and community interaction.</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Payments & Support</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li>**Understanding Invoices:** Details on your earnings, payment cycles, and invoice generation.</li>
              <li>**Contacting Support:** How to get help for technical issues or administrative queries.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              For more detailed information, please refer to the downloadable PDF guide or contact our support team.
            </p>
          </div>
        );
      case 'sop':
        return (
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Standard Operating Procedures (SOP)</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These Standard Operating Procedures (SOPs) ensure consistency and quality across all AerosVision trainings.
              Please adhere to these guidelines for a smooth and effective teaching experience.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1. Training Content & Delivery</h3>
            <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li>**Accuracy:** Ensure all technical information is accurate and up-to-date.</li>
              <li>**Clarity:** Present concepts clearly and concisely, avoiding jargon where possible.</li>
              <li>**Engagement:** Encourage participation and interactive learning.</li>
              <li>**Pacing:** Adjust the pace to suit the learners' understanding and questions.</li>
              <li>**Material Submission:** All training materials (slides, code, notes) must be submitted 2 days prior to the session.</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2. Technical Requirements</h3>
            <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li>**Platform Usage:** Utilize the designated meeting platform (Google Meet/Teams/Zoom) proficiently.</li>
              <li>**Audio/Video Quality:** Ensure stable internet connection, clear audio, and good video quality.</li>
              <li>**Screen Sharing:** Test screen sharing functionality before the session begins.</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3. Post-Training Procedures</h3>
            <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li>**Session Recordings:** Ensure sessions are recorded (if applicable) and links are shared promptly.</li>
              <li>**Feedback Review:** Review learner feedback and incorporate constructive criticism for future sessions.</li>
              <li>**Attendance Reporting:** Submit attendance reports within 24 hours of the training completion.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              Adherence to these SOPs helps maintain the high standards of AerosVision's educational offerings.
            </p>
          </div>
        );
      case 'notifications':
        return <Notifications notifications={notifications} />;
      default:
        return <div className="p-6 text-gray-700 dark:text-gray-300">Welcome to your Instructor Dashboard!</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-500 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
        {/* Navigation Tabs */}
        <nav className="bg-gray-100 dark:bg-gray-900 p-4 border-b border-gray-200 dark:border-gray-700">
          <ul className="flex flex-wrap justify-center gap-4">
            <li>
              <button
                onClick={() => setActiveTab('scheduledTrainings')}
                className={`flex items-center px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === 'scheduledTrainings'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <Calendar size={18} className="mr-2" /> Scheduled Trainings
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('profile')}
                className={`flex items-center px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === 'profile'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <User size={18} className="mr-2" /> Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('invoices')}
                className={`flex items-center px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === 'invoices'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <DollarSign size={18} className="mr-2" /> Invoices
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('portalGuide')}
                className={`flex items-center px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === 'portalGuide'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <BookOpen size={18} className="mr-2" /> Portal Guide
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('sop')}
                className={`flex items-center px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === 'sop'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <FileText size={18} className="mr-2" /> SOP
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`flex items-center px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === 'notifications'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <Bell size={18} className="mr-2" /> Notifications ({notifications.length})
              </button>
            </li>
          </ul>
        </nav>

        {/* Content Area */}
        <div className="p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
