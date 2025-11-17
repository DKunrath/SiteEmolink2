export default function Benefits() {
  const benefits = [
    {
      icon: 'ri-map-pin-line',
      title: 'Você vai aprender a localizar suas emoções',
      description: 'Chega de confusão. Chega de neblina emocional.'
    },
    {
      icon: 'ri-price-tag-3-line',
      title: 'Você vai aprender a nomear o que sente',
      description: 'O nome certo transforma o caos em linguagem.'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Você vai começar a agir com consciência',
      description: 'Nada de reagir por impulso — você vai compreender antes de agir.'
    },
    {
      icon: 'ri-heart-line',
      title: 'Você vai amar sem se perder',
      description: 'Limite deixa de ser medo e vira cuidado.'
    },
    {
      icon: 'ri-eye-line',
      title: 'Você vai se enxergar pela primeira vez',
      description: 'E vai perceber que nunca foi vazia — só estava sem tradução.'
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-950/50 to-indigo-950/50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 mb-6">
            <i className="ri-sparkling-line text-3xl text-purple-300"></i>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Como o Emolink vai<br />mudar sua vida
          </h2>
        </div>

        {/* Benefits List */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 hover:border-pink-400/40 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${benefit.icon} text-3xl text-white`}></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    🔹 {index + 1}. {benefit.title}
                  </h3>
                  <p className="text-xl text-purple-200 leading-relaxed">
                    {benefit.description}
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
