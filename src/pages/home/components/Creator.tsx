export default function Creator() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-indigo-950/50 to-purple-950/50">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-500/20 mb-6">
            <i className="ri-heart-pulse-line text-3xl text-pink-300"></i>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Quem Criou o Emolink
          </h2>
        </div>

        {/* Creator Card */}
        <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm border-2 border-pink-400/40 rounded-3xl overflow-hidden shadow-2xl shadow-pink-500/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative h-96 md:h-full">
              <img
                src="/foto_criadora.jpg"
                alt="Ana Cláudia Cavalcanti"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <h3 className="text-4xl font-bold text-white mb-4">
                Ana Cláudia Cavalcanti
              </h3>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-500/20">
                    <i className="ri-user-heart-line text-pink-300"></i>
                  </div>
                  <p className="text-lg text-purple-100">
                    Psicóloga
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-500/20">
                    <i className="ri-brain-line text-pink-300"></i>
                  </div>
                  <p className="text-lg text-purple-100">
                    Psicanalista
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-500/20">
                    <i className="ri-heart-3-line text-pink-300"></i>
                  </div>
                  <p className="text-lg text-purple-100">
                    Especialista em linguagem emocional e vínculos afetivos
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 rounded-2xl p-6 mb-8">
                <p className="text-lg text-white leading-relaxed">
                  Criadora da <strong className="text-pink-300">Teoria das Conexões Pluridimensionais (TCP)</strong> e do <strong className="text-pink-300">Método da Pluri-Conexão</strong>.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-4 -top-2">
                  <i className="ri-double-quotes-l text-4xl text-pink-500/30"></i>
                </div>
                <p className="text-2xl text-white italic pl-8 leading-relaxed">
                  O Emolink nasceu como uma ponte entre sentir e dizer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
