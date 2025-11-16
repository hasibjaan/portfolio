"use client";

import { Briefcase, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      title: "AI Content Generator",
      description: "Machine learning powered content creation tool with natural language processing capabilities.",
      tech: ["React", "Python", "TensorFlow", "FastAPI"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management platform with real-time updates and team synchronization.",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization dashboard with interactive charts and customizable widgets.",
      tech: ["React", "D3.js", "GraphQL", "PostgreSQL"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-purple-500/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-purple-500/30"
            >
              <div className="flex justify-between items-start mb-4">
                <Briefcase className="text-purple-400" size={32} />
                <a href={project.link} className="text-purple-400 hover:text-purple-300 transition-colors">
                  <ExternalLink size={24} />
                </a>
              </div>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-4 py-2 rounded-full backdrop-blur-xl bg-purple-600/20 border border-purple-400/30 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}