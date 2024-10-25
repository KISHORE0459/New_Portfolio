import React, { useState } from 'react';
import { FaLinkedin, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    content: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send email using EmailJS
    emailjs.send(
      'service_ltyseb8',  // replace with your EmailJS service ID
      'template_9m1sy0l', // replace with your EmailJS template ID
      {
        user_email: formData.email,
        subject: formData.subject,
        message: formData.content,
      },
      'CkVpcum7wVONzMK0Q'   // replace with your EmailJS public key
    )
    .then(() => {
      alert('Email sent successfully!');
      setFormData({ email: '', subject: '', content: '' });  // Reset form fields
    })
    .catch((error) => {
      alert('Error sending email. Please try again later.');
      console.error('Error:', error);
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      <h1 className="text-4xl font-bold text-white mb-6">Contact Me</h1>
      
      {/* Container with Two Sections */}
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-4xl">
        
        {/* Left Section: Social Icons */}
        <div className="flex flex-col items-center w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Connect with Me</h2>
          <div className="flex flex-col justify-center items-start text-gray-700 text-2xl">
            <div className='flex flex-row justify-center items-center mb-5'>
              <a href="https://www.linkedin.com/in/kishoreb26" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <FaLinkedin />
              </a>
              <h3 className='ml-5'>linkedin</h3>
            </div>
            <div className='flex flex-row justify-center items-center mb-5'>
              <a href="https://www.instagram.com/lonely_wolf.k?igsh=azhkeXVzYTJ6MXdy" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                <FaInstagram />
              </a>
              <h3 className='ml-5'>Instagram</h3>
            </div>
            <div className='flex flex-row justify-center items-center mb-5'>
              <a href="mailto:kishorebabu200409@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                <FaEnvelope />
              </a>
              <h3 className='ml-5'>Gmail</h3>
            </div>
            <div className='flex flex-row justify-center items-center mb-5'>
              <a href="https://wa.me/+916238418876" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                <FaWhatsapp />
              </a>
              <h3 className='ml-5'>whatsapp</h3>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="flex flex-col w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
