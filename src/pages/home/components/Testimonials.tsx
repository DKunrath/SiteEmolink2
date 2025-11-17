export default function Testimonials() {
  const testimonials = [
    {
      text: 'Pela primeira vez na vida eu soube dizer o que eu estava sentindo.',
      author: 'Júlia',
      age: '31 anos'
    },
    {
      text: 'Nunca um app me entendeu tão bem.',
      author: 'Roberta',
      age: '28 anos'
    },
    {
      text: 'Sinto que minha vida emocional saiu do modo automático.',
      author: 'Marina',
      age: '42 anos'
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-purple-950/50 to-indigo-950/50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-500/20 mb-6">
            <i className="ri-chat-heart-line text-3xl text-pink-300"></i>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            O que elas dizem
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Mulheres que encontraram sua língua emocional
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-pink-400/30 rounded-2xl p-8 hover:border-pink-400/50 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-500/20 mb-6">
                <i className="ri-double-quotes-l text-2xl text-pink-300"></i>
              </div>

              {/* Testimonial Text */}
              <p className="text-xl text-white mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500/30 to-purple-500/30">
                  <i className="ri-user-heart-line text-xl text-pink-200"></i>
                </div>
                <div>
                  <p className="text-lg font-semibold text-pink-300">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-purple-200">
                    {testimonial.age}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
