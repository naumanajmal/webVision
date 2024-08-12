import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Logo from "../assets/logo.svg"
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-8 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
             <img src={Logo}></img>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <div className="flex space-x-4 ">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Web Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Web Hosting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Server Security</a></li>
            </ul>
          </div>

          {/* Contact Info and Get in touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-400 mb-2">(219) 555-0114</p>
            <p className="text-gray-400 mb-4">Ixi.ong@gmail.com</p>
            
            <h3 className="text-lg font-semibold mb-4">Get in touch</h3>
            <a href="#" className="text-blue-500 hover:text-blue-400">Contact Form →</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>Copyright © 2024. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;