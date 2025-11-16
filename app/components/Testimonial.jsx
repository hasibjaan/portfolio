"use client"

export default function Testimonial() {
    const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Exceptional work quality and professional attitude. Delivered our project ahead of schedule with outstanding results.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateCo",
      content: "Brilliant problem solver with excellent communication skills. A true asset to any development team.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "CTO, DataFlow Systems",
      content: "Technical expertise combined with creativity. Transformed our vision into reality beyond expectations.",
      rating: 5
    }
    ];

    return (
      <section id="testimonials" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Client Feedback
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-purple-500/20 hover:bg-white/15 hover:scale-105 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, starIdx) => (
                    <Star key={starIdx} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <MessageSquare className="text-purple-400 mr-3" size={24} />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-purple-300">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )

}