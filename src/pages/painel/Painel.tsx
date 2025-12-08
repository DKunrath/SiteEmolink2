import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Painel() {
  const navigate = useNavigate();

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

  const userEmail = sessionStorage.getItem('userEmail');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white p-2">
              <img src="/emolink_logo.png" alt="Emolink" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Painel Emolink</h1>
              <p className="text-sm text-purple-300">{userEmail}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500/20 border border-red-400/30 text-red-300 rounded-lg hover:bg-red-500/30 transition-all duration-300"
          >
            <i className="ri-logout-box-line mr-2"></i>
            Sair
          </button>
        </div>
      </header>

      {/* Content - Iframe do painel-onboarding.html */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border-2 border-purple-500/30 rounded-3xl p-6 shadow-2xl shadow-purple-500/20">
          <iframe
            src="/painel-onboarding.html"
            className="w-full h-[calc(100vh-200px)] rounded-xl bg-white"
            title="Painel de Onboarding"
          />
        </div>
      </div>
    </div>
  );
}
