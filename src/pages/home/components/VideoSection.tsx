import { useEffect } from 'react';

export default function VideoSection() {
  useEffect(() => {
    // Carrega o script do Vturb player
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/4cb5a5ea-3324-42f2-bb72-f1731aa757e7/players/68cdc606dddf5f154bcc72d8/v4/player.js';
    script.async = true;
    document.head.appendChild(script);

    // Cleanup: remove o script quando o componente for desmontado
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-950/50 to-indigo-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Veja o Emolink em Ação
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Descubra como o app funciona e como ele pode transformar sua relação com suas emoções
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Player Vturb */}
          <div className="relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
            <div 
              dangerouslySetInnerHTML={{ 
                __html: '<vturb-smartplayer id="vid-68cdc606dddf5f154bcc72d8" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer>' 
              }} 
            />
          </div>

          {/* Elementos decorativos */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-400/30 rounded-full blur-sm"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-purple-400/30 rounded-full blur-sm"></div>
          <div className="absolute top-1/2 -left-8 w-6 h-6 bg-indigo-400/30 rounded-full blur-sm"></div>
        </div>

        <div className="text-center mt-12">
          <p className="text-purple-200 text-lg mb-6">
            "Uma demonstração vale mais que mil palavras"
          </p>
          <button 
            onClick={() => {
              const videoSection = document.querySelector('section.py-20.px-4.bg-gradient-to-b');
              videoSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
          >
            Quero Começar Agora
          </button>
        </div>
      </div>
    </section>
  );
}
