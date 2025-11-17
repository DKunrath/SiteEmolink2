export default function Footer() {
  const links = {
    product: [
      {/*{ name: 'Recursos', href: '#features' },
      { name: 'Jornadas', href: '#features' },
      { name: 'Preços', href: '#pricing' },
      { name: 'FAQ', href: '#' }*/}
    ],
    company: [
      {/*{ name: 'Sobre', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Contato', href: '#' },
      { name: 'Suporte', href: '#' }*/}
    ],
    legal: [
      { name: 'Privacidade', href: '#' },
      { name: 'Termos de Uso', href: '#' },
      { name: 'Cookies', href: '#' }
    ]
  };

  const social = [
    { icon: 'ri-instagram-line', href: 'https://www.instagram.com/anacavalcanti.psi', label: 'Instagram' }
  ];

  return (
    <footer className="bg-slate-950 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-2">
                <img src="/emolink_logo.png" alt="Emolink" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold text-white">Emolink</span>
            </div>
            <p className="text-purple-200 mb-6 leading-relaxed">
              O app que traduz suas emoções e transforma confusão em clareza emocional.
            </p>
            <div className="flex gap-4">
              {social.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  aria-label={item.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-300 hover:bg-pink-500/30 hover:text-pink-300 transition-all duration-300 cursor-pointer"
                >
                  <i className={`${item.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Product Links 
          <div>
            <h3 className="text-white font-bold mb-4">Produto</h3>
            <ul className="space-y-3">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-purple-200 hover:text-pink-300 transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>*/}

          {/* Company Links 
          <div>
            <h3 className="text-white font-bold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-purple-200 hover:text-pink-300 transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>*/}

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-purple-200 hover:text-pink-300 transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-purple-300 text-sm">
              © 2025 Emolink. Todos os direitos reservados.
            </p>
            <a 
              href="https://www.instagram.com/dahor.mkt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 text-sm font-bold transition-colors duration-300 cursor-pointer"
            >
              Desenvolvido por DAHOR
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
