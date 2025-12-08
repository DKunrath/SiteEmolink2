import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AUTHORIZED_EMAILS = [
  'anaclaudiacavalcanti.psi@gmail.com',
  'kunrath37@gmail.com'
];

export default function Login() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Normaliza o email
    const normalizedEmail = email.toLowerCase().trim();

    // Verifica se o email está autorizado
    if (AUTHORIZED_EMAILS.includes(normalizedEmail)) {
      // Salva no sessionStorage
      sessionStorage.setItem('authenticated', 'true');
      sessionStorage.setItem('userEmail', normalizedEmail);
      
      // Redireciona para o painel
      navigate('/painel');
    } else {
      setError('Email não autorizado. Acesso negado.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 px-4">
      <div className="max-w-md w-full">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white mb-4 p-3">
            <img src="/emolink_logo.png" alt="Emolink" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Área Restrita
          </h1>
          <p className="text-purple-300">
            Painel de Administração Emolink
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border-2 border-purple-500/30 rounded-3xl p-8 shadow-2xl shadow-purple-500/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-2">
                Email Autorizado
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu.email@gmail.com"
                className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-purple-300/30 text-white placeholder-purple-200/60 focus:outline-none focus:border-pink-400 text-lg transition-all duration-300"
                required
                disabled={isSubmitting}
              />
            </div>

            {error && (
              <div className="p-4 bg-red-500/20 border border-red-400/30 rounded-xl text-red-300 text-center">
                <i className="ri-error-warning-line mr-2"></i>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-pink-500/50 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {isSubmitting ? 'Verificando...' : 'Acessar Painel'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-purple-500/30">
            <p className="text-center text-purple-300 text-sm">
              <i className="ri-lock-line mr-1"></i>
              Apenas emails autorizados têm acesso
            </p>
          </div>
        </div>

        {/* Back to home */}
        <div className="mt-6 text-center">
          <a 
            href="/"
            className="text-purple-300 hover:text-pink-300 transition-colors duration-300"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            Voltar para o site
          </a>
        </div>
      </div>
    </div>
  );
}
