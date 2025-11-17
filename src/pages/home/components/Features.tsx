export default function Features() {
  const features = [
    {
      icon: 'ri-robot-2-line',
      title: 'IA das Pedras'
    },
    {
      icon: 'ri-book-open-line',
      title: 'Diário de Lava Primitiva'
    },
    {
      icon: 'ri-compass-3-line',
      title: 'Jornadas Emocionais',
      subtitle: '(Selenita, Ametista, Obsidiana, Pérola/Lava)'
    },
    {
      icon: 'ri-lungs-line',
      title: 'Exercícios de Respiração Simbólica'
    },
    {
      icon: 'ri-map-pin-range-line',
      title: 'Rotinas de Localização'
    },
    {
      icon: 'ri-chat-quote-line',
      title: 'Frases de Cristalização'
    },
    {
      icon: 'ri-file-chart-line',
      title: 'Relatório Emocional Semanal'
    },
    {
      icon: 'ri-route-line',
      title: 'Mapa de Evolução Emocional'
    },
    {
      icon: 'ri-links-line',
      title: 'Ato Simbólico do Nó',
      subtitle: '(limites)'
    },
    {
      icon: 'ri-music-line',
      title: 'Meditações Emolink'
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 mb-6">
            <i className="ri-apps-2-line text-3xl text-purple-300"></i>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            O que tem dentro do app
          </h2>
          <p className="text-2xl text-pink-300 font-semibold">
            Tudo isso por menos que uma pizza.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-pink-400/40 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <i className="ri-checkbox-circle-fill text-pink-400 text-lg"></i>
                    <h3 className="text-lg font-bold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  {feature.subtitle && (
                    <p className="text-sm text-purple-300 ml-6">
                      {feature.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
