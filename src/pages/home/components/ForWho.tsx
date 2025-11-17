
export default function ForWho() {
  const profiles = [
    {
      icon: 'ri-emotion-sad-line',
      text: 'Sentem tudo, mas não entendem o que sentem'
    },
    {
      icon: 'ri-question-line',
      text: 'Confundem tristeza, ansiedade, medo e exaustão'
    },
    {
      icon: 'ri-chat-smile-3-line',
      text: 'Dizem "estou bem" quando estão vazias'
    },
    {
      icon: 'ri-shield-cross-line',
      text: 'Não confiam em si'
    },
    {
      icon: 'ri-book-2-line',
      text: 'Entendem a teoria, mas não conseguem viver o que entendem'
    },
    {
      icon: 'ri-user-heart-line',
      text: 'Foram filhas que precisaram se calar para continuar amando'
    },
    {
      icon: 'ri-shield-line',
      text: 'Aprenderam a ser fortes demais, tempo demais'
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-indigo-950/50 to-purple-950/50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-500/20 mb-6">
            <i className="ri-user-heart-line text-3xl text-pink-300"></i>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Para quem o Emolink<br />foi feito?
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Para mulheres que:
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-pink-400/20 rounded-2xl p-6 hover:border-pink-400/50 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-500/20 flex-shrink-0">
                  <i className={`${profile.icon} text-2xl text-pink-300`}></i>
                </div>
                <p className="text-lg text-purple-100 leading-relaxed pt-2">
                  {profile.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-2 border-pink-400/40 rounded-3xl p-12">
          <p className="text-2xl text-purple-100 mb-4 leading-relaxed">
            Em outras palavras:
          </p>
          <p className="text-3xl text-white font-bold">
            para mulheres que foram invisíveis<br />até para si mesmas.
          </p>
        </div>
      </div>
    </section>
  );
}
