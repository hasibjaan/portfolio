"use client"

import { Mail } from 'lucide-react'

export default function Contact() {
    return(
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-purple-500/20">
            <p className="text-xl text-gray-300 mb-8">
              Have a project in mind? Let's create something amazing together!
            </p>
            <button className="px-10 py-5 rounded-full backdrop-blur-xl bg-purple-600/30 border border-purple-400/50 hover:bg-purple-600/50 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 text-lg font-semibold flex items-center mx-auto">
              <Mail className="mr-3" size={24} />
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    )
}