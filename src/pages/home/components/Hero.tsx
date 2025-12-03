
import { useState, useEffect } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(10);

  // Timer para o modal
  useEffect(() => {
    if (showModal && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (showModal && countdown === 0) {
      setShowModal(false);
      const videoSection = document.querySelector('section.py-20.px-4.bg-gradient-to-b');
      videoSection?.scrollIntoView({ behavior: 'smooth' });
      setCountdown(10); // Reset para próxima vez
    }
  }, [showModal, countdown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await fetch(import.meta.env.VITE_GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          origin: 'Hero',
          timestamp: new Date().toISOString()
        })
      });

      // Tracking Facebook Pixel - Evento Padrão
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'AddToWishlist', {
          content_name: 'Emolink - Teste Gratuito',
          content_category: 'Lead',
          value: 24.90,
          currency: 'BRL'
        });
      }

      // Com no-cors, não conseguimos ler a resposta, mas se não deu erro, assumimos sucesso
      setSubmitStatus('success');
      setEmail('');
      setShowModal(true);
      setCountdown(10); // Reinicia o contador

    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Limpar mensagem após 5 segundos
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(30, 27, 75, 0.95) 0%, rgba(30, 27, 75, 0.85) 40%, rgba(30, 27, 75, 0.3) 100%), url('https://readdy.ai/api/search-image?query=serene%20ethereal%20woman%20meditating%20in%20cosmic%20purple%20and%20pink%20nebula%20space%20with%20glowing%20crystals%20floating%20around%20her%20peaceful%20spiritual%20atmosphere%20soft%20dreamy%20lighting%20mystical%20energy%20flowing%20gentle%20gradient%20background%20calming%20transformative%20scene%20emotional%20healing%20visualization%20abstract%20spiritual%20journey&width=1920&height=1080&seq=hero-emolink-001&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right'
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          {/* Icon */}
          <div className="mb-8 flex items-center justify-start">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg shadow-pink-500/50 p-3">
              <img src="/emolink_logo.png" alt="Emolink" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            EMOLINK — O APP DA PLURI-CONEXÃO
          </h1>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-pink-300 font-semibold mb-8">
            A ciência emocional que devolve clareza para mulheres que sentem tudo… mas não sabem traduzir nada.
          </p>

          {/* Hero Message */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Você não é confusa.<br />
              Você é não traduzida.
            </h2>
            
            <div className="space-y-4 text-xl text-purple-100 leading-relaxed">
              <p>Por anos você aprendeu a sobreviver em silêncio.</p>
              <p>A sentir baixo para não incomodar.</p>
              <p>A entender todo mundo… menos você.</p>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 rounded-2xl">
              <p className="text-xl text-white font-semibold mb-2">
                No Emolink, você vai aprender a ler a si mesma.
              </p>
              <p className="text-lg text-pink-300">
                É como finalmente ganhar vocabulário emocional para aquilo que sempre doeu — e você não sabia nomear.
              </p>
            </div>
          </div>

          {/* CTA Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-purple-300/30 text-white placeholder-purple-200/60 focus:outline-none focus:border-pink-400 text-lg"
              required
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-pink-500/50 whitespace-nowrap cursor-pointer text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Quero Testar!'}
            </button>
          </form>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-4 p-4 bg-green-500/20 border border-green-400/30 rounded-xl text-green-300 text-center animate-fade-in">
              ✓ Email registrado com sucesso! Redirecionando...
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-4 p-4 bg-red-500/20 border border-red-400/30 rounded-xl text-red-300 text-center animate-fade-in">
              ✗ Erro ao registrar email. Tente novamente.
            </div>
          )}

          {/* Trust Badge */}
          <div className="flex items-center gap-3 text-purple-200">
            <i className="ri-smartphone-line text-2xl text-pink-400"></i>
            <span className="text-sm">Disponível para iOS • Android</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>

      {/* Modal de Sucesso */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-gradient-to-br from-purple-900/95 to-pink-900/95 border-2 border-pink-400/50 rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl shadow-pink-500/50 animate-scale-in">
            {/* Ícone de Sucesso */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-400 flex items-center justify-center">
                <i className="ri-check-line text-5xl text-green-400"></i>
              </div>
            </div>

            {/* Título */}
            <h3 className="text-3xl font-bold text-white text-center mb-4">
              Bem-vinda à Lista VIP! ✨
            </h3>

            {/* Mensagem */}
            <div className="space-y-4 text-center mb-6">
              <p className="text-xl text-pink-200 leading-relaxed">
                Você foi adicionada à lista de usuárias que serão selecionadas para o <strong className="text-pink-300">teste inicial do Emolink</strong>!
              </p>
              <p className="text-lg text-purple-200 leading-relaxed">
                Em breve você receberá um email com instruções de como acessar o app.
              </p>
            </div>

            {/* Timer */}
            <div className="text-center mb-6">
              <p className="text-purple-300 text-sm">
                Fechando em <span className="text-pink-400 font-bold text-2xl">{countdown}</span>
              </p>
            </div>

            {/* Decoração */}
            <div className="flex justify-center gap-2 text-pink-400">
              <i className="ri-heart-3-fill text-2xl animate-pulse"></i>
              <i className="ri-heart-3-fill text-2xl animate-pulse" style={{ animationDelay: '0.2s' }}></i>
              <i className="ri-heart-3-fill text-2xl animate-pulse" style={{ animationDelay: '0.4s' }}></i>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
