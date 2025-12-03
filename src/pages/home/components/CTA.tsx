export default function CTA() {
  return (
    <section className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(236, 72, 153, 0.3) 0%, rgba(168, 85, 247, 0.3) 100%), url('https://readdy.ai/api/search-image?query=peaceful%20woman%20with%20closed%20eyes%20surrounded%20by%20glowing%20purple%20and%20pink%20energy%20crystals%20floating%20around%20her%20serene%20expression%20emotional%20transformation%20mystical%20atmosphere%20soft%20ethereal%20lighting%20spiritual%20healing%20journey%20gentle%20gradient%20background%20calming%20scene%20abstract%20energy%20flow&width=1200&height=600&seq=cta-emolink-003&orientation=landscape')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/95 via-purple-950/90 to-pink-950/95 z-0"></div>

          {/* Content */}
          <div className="relative z-10 text-center py-20 px-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-pink-500/20 mb-8">
              <i className="ri-heart-3-line text-4xl text-pink-300"></i>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Você não precisa mais<br />sentir sem entender
            </h2>

            <div className="max-w-3xl mx-auto space-y-4 mb-12">
              <p className="text-2xl text-purple-100">
                Você pode aprender a se ler.
              </p>
              <p className="text-2xl text-purple-100">
                Você pode se enxergar.
              </p>
              <p className="text-2xl text-purple-100">
                Você pode respirar com verdade.
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 rounded-2xl p-8 mb-12 max-w-2xl mx-auto">
              <p className="text-2xl text-white font-semibold">
                O Emolink é o seu primeiro dicionário emocional interno.
              </p>
              <p className="text-xl text-pink-300 mt-2">
                E ele está pronto para você.
              </p>
            </div>

            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                // Destaca o input de email após scroll
                setTimeout(() => {
                  const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
                  emailInput?.focus();
                }, 1000);
              }}
              className="px-12 py-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-2xl font-bold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-xl shadow-pink-500/50 hover:shadow-2xl hover:shadow-pink-500/60 hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              Começar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
