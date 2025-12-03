export default function Pricing() {
  const includes = [
    'IA das Pedras',
    'Diário Emocional',
    'Todas as Jornadas',
    'Todos os exercícios',
    'Atualizações semanais',
    'Comunidade Filhas que Deixaram de Ser Invisíveis'
  ];

  const bonuses = [
    'Jornada da Selenita completa',
    'Jornada da Ametista completa',
    'Meditação da Angelita',
    'Guia do Limite Ético da Obsidiana',
    'Mini-jornada Pérola/Lava'
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-indigo-950/50 to-purple-950/50">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-500/20 mb-6">
            <i className="ri-vip-crown-line text-3xl text-pink-300"></i>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Planos e Preços
          </h2>
          <p className="text-2xl text-purple-200">
            Assinatura Mensal
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm border-2 border-pink-400/40 rounded-3xl p-12 shadow-2xl shadow-pink-500/20">
          {/* Price */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-3xl text-purple-200">R$</span>
              <span className="text-7xl font-bold text-white">24,90</span>
              <span className="text-2xl text-purple-200">/mês</span>
            </div>
          </div>

          {/* Includes */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="ri-checkbox-circle-line text-pink-400"></i>
              Inclui:
            </h3>
            <div className="space-y-4">
              {includes.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-pink-500/20">
                    <i className="ri-check-line text-sm text-pink-300"></i>
                  </div>
                  <span className="text-lg text-purple-100">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bonuses */}
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-400/30 rounded-2xl p-8 mb-10">
            <h3 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center gap-3">
              <i className="ri-gift-line"></i>
              Bônus por tempo limitado:
            </h3>
            <div className="space-y-3">
              {bonuses.map((bonus, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-500/20">
                    <i className="ri-gift-fill text-sm text-yellow-300"></i>
                  </div>
                  <span className="text-lg text-yellow-100">{bonus}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              // Destaca o input de email após scroll
              setTimeout(() => {
                const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
                emailInput?.focus();
              }, 1000);
            }}
            className="w-full py-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-2xl font-bold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-xl shadow-pink-500/50 hover:shadow-2xl hover:shadow-pink-500/60 hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            Quero Começar Agora
          </button>
        </div>
      </div>
    </section>
  );
}
