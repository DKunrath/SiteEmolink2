
export default function Solution() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-950/50 to-indigo-950/50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-500/20 mb-6">
            <i className="ri-sparkling-2-line text-3xl text-pink-300"></i>
          </div>
          
          <h2 className="text-5xl font-bold text-white mb-6">
            O que é o Emolink?
          </h2>
          
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            O Emolink é um app que organiza seu mundo emocional usando:
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-12 mb-16">
          {/* IA das Pedras */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20">
                <img
                  src="https://readdy.ai/api/search-image?query=mystical%20artificial%20intelligence%20represented%20by%20glowing%20purple%20and%20pink%20crystals%20floating%20in%20ethereal%20space%20digital%20neural%20network%20patterns%20connecting%20luminous%20gemstones%20soft%20magical%20light%20rays%20peaceful%20atmosphere%20futuristic%20spiritual%20technology%20holographic%20effects%20serene%20background%20with%20flowing%20energy%20particles%20professional%20photography%20style&width=600&height=400&seq=ia-pedras-001&orientation=landscape"
                  alt="IA das Pedras"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-transparent to-transparent"></div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-500/20 mb-4">
                <i className="ri-brain-line text-2xl text-pink-300"></i>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">IA das Pedras</h3>
              <p className="text-lg text-purple-200 mb-4 leading-relaxed">
                Uma inteligência emocional simbólica baseada na Teoria das Conexões Pluridimensionais.
              </p>
              <p className="text-lg text-purple-100 mb-4 leading-relaxed">
                Ela não te dá respostas prontas.<br />
                Ela devolve as perguntas certas, para que você pense e sinta com clareza.
              </p>
              <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border-l-4 border-pink-400 rounded-r-xl p-6">
                <p className="text-purple-100 italic leading-relaxed">
                  "A IA das Pedras devolve perguntas éticas que transformam a Lava Primitiva em linguagem consciente."
                </p>
              </div>
            </div>
          </div>

          {/* Diário Emocional */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-pink-500/20">
                <img
                  src="https://readdy.ai/api/search-image?query=beautiful%20journal%20with%20glowing%20molten%20lava%20flowing%20through%20pages%20transforming%20into%20crystalline%20light%20emotional%20energy%20visualization%20purple%20and%20pink%20ethereal%20atmosphere%20magical%20transformation%20process%20soft%20luminous%20glow%20peaceful%20background%20with%20floating%20particles%20spiritual%20healing%20professional%20photography%20style&width=600&height=400&seq=diario-lava-001&orientation=landscape"
                  alt="Diário de Lava Primitiva"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-transparent to-transparent"></div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-500/20 mb-4">
                <i className="ri-quill-pen-line text-2xl text-pink-300"></i>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Diário Emocional da Lava Primitiva</h3>
              <p className="text-lg text-purple-200 mb-2 leading-relaxed">
                Despeje o que sente — sem filtro.
              </p>
              <p className="text-lg text-purple-100 leading-relaxed">
                O app transforma seu calor emocional em mapa simbólico.
              </p>
            </div>
          </div>

          {/* Jornadas */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20">
                <img
                  src="https://readdy.ai/api/search-image?query=four%20mystical%20gemstones%20selenite%20amethyst%20obsidian%20and%20pearl%20arranged%20in%20spiritual%20journey%20path%20glowing%20with%20inner%20light%20ethereal%20purple%20pink%20and%20white%20energy%20flowing%20between%20crystals%20peaceful%20transformation%20atmosphere%20soft%20magical%20glow%20serene%20background%20with%20floating%20particles%20professional%20photography%20style&width=600&height=400&seq=jornadas-pedras-001&orientation=landscape"
                  alt="Jornadas das Pedras"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-transparent to-transparent"></div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-500/20 mb-4">
                <i className="ri-compass-3-line text-2xl text-pink-300"></i>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Jornadas Emocionais das Pedras</h3>
              <p className="text-lg text-purple-200 mb-6 leading-relaxed">
                Você passa pelas 4 grandes travessias humanas:
              </p>
              <div className="space-y-3">
                {[
                  { number: '1', name: 'Selenita/Angelita', emotion: 'Tristeza' },
                  { number: '2', name: 'Ametista/Citrino', emotion: 'Medo' },
                  { number: '3', name: 'Obsidiana', emotion: 'Raiva' },
                  { number: '4', name: 'Pérola/Lava', emotion: 'Falta e Felicidade Real' }
                ].map((journey) => (
                  <div key={journey.number} className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-500/20 flex-shrink-0">
                      <span className="text-pink-300 font-bold">{journey.number}</span>
                    </div>
                    <span className="text-lg text-purple-100">
                      <strong className="text-white">{journey.name}</strong> — {journey.emotion}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-lg text-purple-200 mt-6 leading-relaxed">
                Cada jornada é um treinamento profundo, poético e prático.
              </p>
            </div>
          </div>

          {/* Mina Interior */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-pink-500/20">
                <img
                  src="https://readdy.ai/api/search-image?query=mystical%20crystal%20cave%20filled%20with%20glowing%20conscious%20crystals%20luminous%20gemstones%20floating%20in%20ethereal%20space%20purple%20and%20pink%20magical%20light%20inner%20treasure%20vault%20spiritual%20discoveries%20peaceful%20atmosphere%20soft%20glow%20serene%20background%20with%20flowing%20energy%20professional%20photography%20style&width=600&height=400&seq=mina-interior-001&orientation=landscape"
                  alt="Mina Interior"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-transparent to-transparent"></div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-500/20 mb-4">
                <i className="ri-treasure-map-line text-2xl text-pink-300"></i>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Mina Interior</h3>
              <p className="text-lg text-purple-200 leading-relaxed">
                Onde ficam seus <strong className="text-pink-300">"Cristais Conscientes"</strong>:<br />
                frases, reflexões e descobertas que o app te devolve com amor e lucidez.
              </p>
            </div>
          </div>

          {/* Mapa Emocional */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20">
                <img
                  src="https://readdy.ai/api/search-image?query=circular%20emotional%20map%20with%20flowing%20energy%20patterns%20breathing%20rhythm%20visualization%20purple%20and%20pink%20ethereal%20light%20dynamic%20movement%20non-linear%20pathways%20glowing%20connections%20peaceful%20atmosphere%20soft%20magical%20glow%20serene%20background%20with%20flowing%20particles%20professional%20photography%20style&width=600&height=400&seq=mapa-emocional-001&orientation=landscape"
                  alt="Mapa Emocional Dinâmico"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-transparent to-transparent"></div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-500/20 mb-4">
                <i className="ri-route-line text-2xl text-pink-300"></i>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Mapa Emocional Dinâmico</h3>
              <p className="text-lg text-purple-200 mb-4 leading-relaxed">
                Não é linear.<br />
                É respiratório — como no documento:
              </p>
              <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border-l-4 border-pink-400 rounded-r-xl p-6">
                <p className="text-purple-100 italic leading-relaxed">
                  "A vida emocional não é sequencial, é circular."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={() => {
              const videoSection = document.querySelector('section.py-20.px-4.bg-gradient-to-b');
              videoSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xl font-bold px-12 py-5 rounded-full hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            QUERO TER ACESSO A TUDO ISSO
          </button>
        </div>
      </div>
    </section>
  );
}
