"use client"

import { Award } from 'lucide-react';

export default function Achievements() {
    const achievements = [
    {
      title: "Best Developer Award 2024",
      organization: "Tech Innovation Summit",
      description: "Recognized for outstanding contribution to open-source projects"
    },
    {
      title: "Hackathon Winner",
      organization: "Global Code Challenge",
      description: "First place in international coding competition with 500+ participants"
    },
    {
      title: "Published Author",
      organization: "Dev.to Platform",
      description: "50+ technical articles with over 100K reads"
    }
    ];

    return (
         <section id="achievements" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-purple-500/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 text-center"
              >
                <Award className="text-purple-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-purple-300 mb-3 text-sm">{achievement.organization}</p>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
    </section>
    )
     
}