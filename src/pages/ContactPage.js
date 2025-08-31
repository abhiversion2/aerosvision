import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'; // Importing relevant icons

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.'); // Using alert for demonstration, consider a custom modal in production
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-8 mb-12 transition-colors duration-300">
      <h1 className="text-5xl font-extrabold text-center text-indigo-700 dark:text-indigo-400 mb-6 leading-tight">
        Contact <span className="text-gray-900 dark:text-white">AerosVision</span>
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
        Have questions, feedback, or need assistance? Reach out to the AerosVision team. We're always here to help you on your learning journey.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Contact Information Section */}
        <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md transition-colors duration-300">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Mail size={32} className="mr-3 text-indigo-600 dark:text-indigo-400" />
            Get in Touch Directly
          </h2>
          <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <Mail size={24} className="mr-3 text-emerald-500 flex-shrink-0 mt-1" />
              <div>
                <strong className="font-semibold text-gray-900 dark:text-white">Email Us:</strong><br />
                <a href="mailto:support@AerosVision.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">support@AerosVision.com</a>
              </div>
            </li>
            <li className="flex items-start">
              <Phone size={24} className="mr-3 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <strong className="font-semibold text-gray-900 dark:text-white">Call Us:</strong><br />
                +1 (555) 123-4567
              </div>
            </li>
            <li className="flex items-start">
              <MapPin size={24} className="mr-3 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <strong className="font-semibold text-gray-900 dark:text-white">Visit Our Office:</strong><br />
                123 Learning Lane, Knowledge City, World 00000
              </div>
            </li>
            <li className="flex items-start">
              <Clock size={24} className="mr-3 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <strong className="font-semibold text-gray-900 dark:text-white">Business Hours:</strong><br />
                Monday - Friday: 9:00 AM - 5:00 PM (EST)
              </div>
            </li>
          </ul>
          <p className="mt-8 text-md text-gray-500 dark:text-gray-400">
            We aim to respond to all inquiries within 24-48 business hours. For urgent matters, please call us.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md transition-colors duration-300">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Send size={32} className="mr-3 text-purple-600 dark:text-purple-400" />
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-md font-medium text-gray-700 dark:text-gray-200 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition-colors duration-300"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-md font-medium text-gray-700 dark:text-gray-200 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition-colors duration-300"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-md font-medium text-gray-700 dark:text-gray-200 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition-colors duration-300"
                placeholder="Inquiry about courses"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-md font-medium text-gray-700 dark:text-gray-200 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition-colors duration-300"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Send size={20} className="mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Section */}
      <section className="text-center mt-12 border-t border-gray-200 dark:border-gray-700 pt-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Connect With Us</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Follow us on social media to stay updated on our latest courses, news, and events.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com/AerosVision" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" aria-label="Facebook">
            <Facebook size={36} />
          </a>
          <a href="https://twitter.com/AerosVision" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300" aria-label="Twitter">
            <Twitter size={36} />
          </a>
          <a href="https://linkedin.com/company/AerosVision" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 transition-colors duration-300" aria-label="LinkedIn">
            <Linkedin size={36} />
          </a>
          <a href="https://instagram.com/AerosVision" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300" aria-label="Instagram">
            <Instagram size={36} />
          </a>
        </div>
      </section>

      {/* Map Embed (Placeholder) */}
      <section className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Find Us on the Map</h2>
        <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617937375765!2d-73.98566438459424!3d40.74844077932822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598c199589a1%3A0x608e64e5c2d4e7f8!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1678234567890!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
            className="w-full h-full"
          ></iframe>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
          *Map shows a placeholder location (Empire State Building) for demonstration purposes.
        </p>
      </section>
    </div>
  );
};

export default ContactPage;
