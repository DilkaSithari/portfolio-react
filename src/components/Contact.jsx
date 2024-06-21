import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send email using EmailJS
    emailjs.send(
      'service_03twpti',    // Replace with your EmailJS service ID
      'template_wopqvxa',   // Replace with your EmailJS template ID
      formData,
      'cXTTYbwZuPNL4dLOR'        // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('Email sent successfully:', response.status, response.text);
      // Clear form after submission if needed
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }).catch((error) => {
      console.error('Failed to send email:', error);
    });
  };

  return (
    <div className=" text-white min-h-screen py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-center gap-8">
        {/* Contact Details Section */}
        <div className="md:w-2/4">
          
        <ul className="space-y-4 text-center">
            <li className="flex items-center justify-center">
              <FaUser className="mr-2" /> Dilka Sithari
            </li>
            <li className="flex items-center justify-center">
              <FaEnvelope className="mr-2" />sitharidilka@gmail.com
            </li>
            <li className="flex items-center justify-center">
              <FaMapMarkerAlt className="mr-2" />Monaragala, Sri Lanka
            </li>
          </ul>
        </div>
        {/* Contact Form Section */}
        <div className="md:w-2/4">
          <div className=" p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 uppercase text-center">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-200"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white sm:text-sm"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white sm:text-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
