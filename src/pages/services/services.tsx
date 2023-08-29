import Footer from '@/component/Footer/Footer'
import Navbar from '@/component/Header/Navbar'
import React from 'react'
import { FaCode, FaMobileAlt, FaServer } from 'react-icons/fa';
import { FaTools , FaDatabase,FaPalette   } from 'react-icons/fa';
export default function services() {
  return (
    <div>
   <Navbar/>
   <section className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-semibold text-center text-green-400">Services</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaCode className="mr-4 text-2xl text-gray-500" />
                <h3 className="text-lg font-semibold text-green-400">Web Development</h3>
              </div>
              <p className="text-justify text-gray-600">We offer professional web development services to create modern and interactive websites using cutting-edge technologies.</p>
            </div>
          </div>
          <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaMobileAlt className="mr-4 text-2xl text-gray-500" />
                <h3 className="text-lg font-semibold text-green-400">Mobile App Development</h3>
              </div>
              <p className="text-justify text-gray-600">We specialize in developing high-quality mobile applications for iOS and Android platforms to meet your business needs.</p>
            </div>
          </div>
          <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaServer className="mr-4 text-2xl text-gray-500" />
                <h3 className="text-lg font-semibold text-green-400">Backend Development</h3>
              </div>
              <p className="text-justify text-gray-600">We provide backend development services to build robust APIs, databases, and server-side functionalities for your web or mobile applications.</p>
            </div>
          </div>

          <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaTools  className="mr-4 text-2xl text-gray-500" />
                <h3 className="text-lg font-semibold text-green-400">Website Maintenance and Support</h3>
              </div>
              <p className="text-justify text-gray-600"> This includes providing ongoing website maintenance, updates, and support services to ensure the smooth functioning and security of websites or applications.</p>
            </div>
          </div>

          <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaDatabase  className="mr-4 text-2xl text-gray-500" />
                <h3 className="text-lg font-semibold text-green-400">Content Management System (CMS) Development</h3>
              </div>
              <p className="text-justify text-gray-600">
              This involves building custom CMS solutions or integrating existing CMS platforms like WordPress, Drupal, or Joomla to manage website content.</p>
            </div>
          </div>
          <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaPalette  className="mr-4 text-2xl text-gray-500 " />
                <h3 className="text-lg font-semibold text-green-400">UI/UX Design</h3>
              </div>
              <p className="text-justify text-gray-600">This includes creating visually appealing and user-friendly user interfaces (UI) and user experiences (UX) for websites, web applications, or mobile applications.</p>
            </div>
          </div>
          
         
          
          
          {/* Add more services here */}
        </div>
      </div>
    </section>

   <Footer/> 
    </div>
  )
}