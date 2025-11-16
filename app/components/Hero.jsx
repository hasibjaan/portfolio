"use client"

import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Hero() {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="text-center max-w-4xl">
          <div className="mb-8 backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-purple-500/20 shadow-2xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              John Doe
            </h1>
            <p className="text-2xl md:text-3xl text-purple-300 mb-8">
              Full Stack Developer & Creative Problem Solver
            </p>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Crafting elegant solutions to complex problems. Specialized in building scalable web applications
              with modern technologies and best practices.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 rounded-full backdrop-blur-xl bg-purple-600/30 border border-purple-400/50 hover:bg-purple-600/50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
                View Projects
              </button>
              <button className="px-8 py-4 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                Contact Me
              </button>
            </div>
          </div>
          <div className="flex justify-center space-x-6 mt-8">
            {[Github, Linkedin, Twitter].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="p-4 rounded-full backdrop-blur-xl bg-white/10 border border-purple-500/20 hover:bg-purple-600/30 hover:scale-110 transition-all duration-300"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>
    )
}