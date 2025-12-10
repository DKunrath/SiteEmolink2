import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PainelHistoriasGeologicas() {
  const navigate = useNavigate();
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    // Verifica autenticação
    const isAuthenticated = sessionStorage.getItem('authenticated');
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('authenticated');
    sessionStorage.removeItem('userEmail');
    navigate('/login');
  };

  const handleRefresh = () => {
    setIframeKey(prev => prev + 1);
  };

  const userEmail = sessionStorage.getItem('userEmail');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white p-2">
                <img src="/emolink_logo.png" alt="Emolink" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Painel de Histórias Geológicas</h1>
                <p className="text-sm text-purple-300">{userEmail}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={handleRefresh}
                className="px-6 py-2 bg-purple-500/20 border border-purple-400/30 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-all duration-300"
                title="Recarregar painel"
              >
                <i className="ri-refresh-line mr-2"></i>
                Recarregar
              </button>
              <button
                onClick={handleLogout}
                className="px-6 py-2 bg-red-500/20 border border-red-400/30 text-red-300 rounded-lg hover:bg-red-500/30 transition-all duration-300"
              >
                <i className="ri-logout-box-line mr-2"></i>
                Sair
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex gap-2">
            <button
              onClick={() => navigate('/painel')}
              className="px-4 py-2 bg-purple-500/10 border border-purple-400/20 text-purple-300 rounded-lg hover:bg-purple-500/20 transition-all duration-300"
            >
              <i className="ri-survey-line mr-2"></i>
              Onboarding
            </button>
            <button
              onClick={() => navigate('/painel-videoaulas')}
              className="px-4 py-2 bg-purple-500/10 border border-purple-400/20 text-purple-300 rounded-lg hover:bg-purple-500/20 transition-all duration-300"
            >
              <i className="ri-video-line mr-2"></i>
              Vídeo-Aulas
            </button>
            <button
              className="px-4 py-2 bg-purple-500/30 border border-purple-400/50 text-white rounded-lg font-semibold"
            >
              <i className="ri-book-line mr-2"></i>
              Histórias Geológicas
            </button>
          </nav>
        </div>
      </header>

      {/* Content - Iframe do painel-historias-geologicas.html */}
      <div className="max-w-full mx-auto p-4">
        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10">
          <iframe
            key={iframeKey}
            src="/painel-historias-geologicas.html"
            className="w-full h-[calc(100vh-180px)] bg-transparent"
            title="Painel de Histórias Geológicas"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
          />
        </div>
      </div>
    </div>
  );
}
