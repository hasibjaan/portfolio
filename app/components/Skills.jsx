"use client"

import { Code } from 'lucide-react';

export default function Skills() {
  const skills = [
    { 
      category: "Frontend", 
      items: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Vue.js", level: 75 },
        { name: "Tailwind CSS", level: 95 },
        { name: "TypeScript", level: 80 }
      ] 
    },
    { 
      category: "Backend", 
      items: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 82 },
        { name: "Express", level: 85 },
        { name: "Django", level: 78 },
        { name: "PostgreSQL", level: 80 }
      ] 
    },
    { 
      category: "Tools", 
      items: [
        { name: "Git", level: 92 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 85 },
        { name: "Jest", level: 80 }
      ] 
    },
    { 
      category: "Soft Skills", 
      items: [
        { name: "Problem Solving", level: 95 },
        { name: "Team Leadership", level: 88 },
        { name: "Agile", level: 90 },
        { name: "Communication", level: 92 }
      ] 
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 border border-purple-500/20 hover:bg-white/15 hover:scale-105 transition-all duration-300"
            >
              <Code className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4 text-purple-300">{skillGroup.category}</h3>
              <ul className="space-y-4">
                {skillGroup.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-gray-300">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-xs text-purple-300">{item.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative overflow-hidden"
                        style={{ 
                          width: `${item.level}%`,
                          animation: 'fillBar 1.5s ease-out forwards'
                        }}
                      >
                        <div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          style={{
                            animation: 'shimmer 2s infinite',
                            animationDelay: `${itemIdx * 0.2}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fillBar {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}