
export default function Problem() {
  return (
    <section className="py-24 px-6 bg-slate-950/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 mb-6">
            <i className="ri-question-line text-3xl text-purple-300"></i>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Por que você não consegue entender o que sente?
          </h2>
          <p className="text-2xl text-purple-200 max-w-4xl mx-auto">
            A resposta está na sua história — e naquilo que ninguém te ensinou.
          </p>
        </div>

        {/* Sistema Emolink Quote */}
        <div className="bg-gradient-to-r from-indigo-950/80 to-purple-950/80 border border-purple-400/30 rounded-3xl p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Segundo o Sistema Emolink:
            </h3>
          </div>
          
          <div className="space-y-6 text-center">
            <blockquote className="text-2xl md:text-3xl text-pink-300 font-semibold italic">
              "A filha invisível lê emoções como quem lê um idioma estrangeiro."
            </blockquote>
            <blockquote className="text-2xl md:text-3xl text-purple-200 font-semibold italic">
              "Ela reconhece as palavras, mas não se reconhece dentro delas."
            </blockquote>
            <blockquote className="text-2xl md:text-3xl text-pink-300 font-semibold italic">
              "Produz sons sem significado interno."
            </blockquote>
          </div>
        </div>

        {/* What This Means */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">
              Isso significa que:
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-pink-400 mt-3 flex-shrink-0"></div>
                <p className="text-xl text-purple-100">você sente, mas não consegue nomear</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-purple-400 mt-3 flex-shrink-0"></div>
                <p className="text-xl text-purple-100">você pensa, mas não consegue integrar</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-pink-400 mt-3 flex-shrink-0"></div>
                <p className="text-xl text-purple-100">você fala, mas não consegue se reconhecer</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-purple-400 mt-3 flex-shrink-0"></div>
                <p className="text-xl text-purple-100">você reage, mas não entende por quê</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-950/50 to-purple-950/50 border border-pink-400/20 rounded-2xl p-8">
            <div className="text-center">
              <i className="ri-heart-line text-5xl text-pink-400 mb-6"></i>
              <div className="space-y-4 text-xl text-white">
                <p className="font-semibold">Não é falta de força.</p>
                <p className="font-semibold">Não é falta de inteligência.</p>
                <p className="font-semibold">Não é fraqueza emocional.</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Truth */}
        <div className="text-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-3xl p-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-pink-500/30 mb-8">
            <i className="ri-lightbulb-line text-4xl text-pink-300"></i>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            É a sua alfabetização emocional que foi interrompida.
          </h3>
          
          <p className="text-3xl text-pink-300 font-semibold">
            E agora você pode reconstruí-la.
          </p>
        </div>
      </div>
    </section>
  );
}
