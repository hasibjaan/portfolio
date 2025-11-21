"use client"

import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook, Instagram, Send } from 'lucide-react';
import { useState } from 'react';
import { portfolioConfig } from '../config/portfolio';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer className="py-12 px-6 backdrop-blur-md bg-black/40 border-t border-purple-500/20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 items-start mb-8">
          
          {/* Section 1: Contact & Social Media */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
              Get In Touch
            </h3>
            
            <div className="space-y-2">
              <a 
                href="mailto:hello@johndoe.com" 
                className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
              >
                <div className="p-1.5 rounded-full backdrop-blur-xl bg-white/10 border border-purple-500/20">
                  <Mail size={14} />
                </div>
                <span>hello@johndoe.com</span>
              </a>
              
              <a 
                href="tel:+1234567890" 
                className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
              >
                <div className="p-1.5 rounded-full backdrop-blur-xl bg-white/10 border border-purple-500/20">
                  <Phone size={14} />
                </div>
                <span>+1 (234) 567-890</span>
              </a>
              
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <div className="p-1.5 rounded-full backdrop-blur-xl bg-white/10 border border-purple-500/20">
                  <MapPin size={14} />
                </div>
                <span>San Francisco, CA</span>
              </div>
            </div>

            <div className="pt-2">
              <h4 className="text-xs font-semibold text-purple-300 mb-2">Follow Me</h4>
              <div className="flex space-x-1.5">
                {[
                  { Icon: Github, link: "#" },
                  { Icon: Linkedin, link: "#" },
                  { Icon: Twitter, link: "#" },
                  { Icon: Facebook, link: "#" },
                  { Icon: Instagram, link: "#" }
                ].map(({ Icon, link }, idx) => (
                <a 
                    key={idx}
                    href={link}
                    className="p-2 rounded-full backdrop-blur-xl bg-white/10 border border-purple-500/20 hover:bg-purple-600/30 hover:scale-110 transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="hidden md:block w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent min-h-[200px]"></div>

          {/* Section 2: Menu Navigation */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
              Quick Links
            </h3>
            
            <nav className="space-y-1.5">
              {[
                { name: 'Home', link: '#home' },
                { name: 'Projects', link: '#projects' },
                { name: 'Skills', link: '#skills' },
                { name: 'Achievements', link: '#achievements' },
                { name: 'Testimonials', link: '#testimonials' },
                { name: 'Contact', link: '#contact' }
              ].map((item, idx) => (
              <a  
                  key={idx}
                  href={item.link}
                  className="block text-gray-300 hover:text-purple-400 hover:translate-x-2 transition-all duration-300 relative group text-sm"
                >
                  <span className="flex items-center">
                    <span className="w-0 h-0.5 bg-purple-400 group-hover:w-3 transition-all duration-300 mr-1.5"></span>
                    {item.name}
                  </span>
                </a>
              ))}
            </nav>

            <div className="pt-2">
              <h4 className="text-xs font-semibold text-purple-300 mb-1.5">Resources</h4>
              <div className="space-y-1">
                <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors duration-300 text-xs">
                  Blog
                </a>
                <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors duration-300 text-xs">
                  Portfolio
                </a>
                <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors duration-300 text-xs">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="hidden md:block w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent min-h-[200px]"></div>

          {/* Section 3: Contact Form */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-2.5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-3 py-2 rounded-lg backdrop-blur-xl bg-white/10 border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/20 transition-all duration-300 text-sm"
              />
              
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-3 py-2 rounded-lg backdrop-blur-xl bg-white/10 border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/20 transition-all duration-300 text-sm"
              />
              
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="2"
                className="w-full px-3 py-2 rounded-lg backdrop-blur-xl bg-white/10 border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/20 transition-all duration-300 resize-none text-sm"
              ></textarea>
              
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg backdrop-blur-xl bg-purple-600/30 border border-purple-400/50 hover:bg-purple-600/50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center space-x-2 font-semibold text-sm"
              >
                <span>Send</span>
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-xs">
              {portfolioConfig.copyright}
            </p>
            <div className="flex space-x-4 text-xs">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}