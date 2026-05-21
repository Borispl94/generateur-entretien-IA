import { useState, lazy, Suspense } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import logoIntelliView from './assets/intelliview.png';

const Home = lazy(() => import('./pages/Home'));
const Historique = lazy(() => import('./pages/Historique'));
const APropos = lazy(() => import('./pages/APropos'));

const stylesApp = {
  app: "min-h-screen bg-black text-neutral-300 font-sans selection:bg-[#D4AF37] selection:text-black",
  header: "w-full h-20 md:h-24 bg-black border-b border-neutral-900 pr-6 md:pr-10 pl-2 md:pl-4 flex items-center justify-between sticky top-0 z-50",
  logoLink: "group flex items-center",
  logoImage: "h-16 md:h-20 w-auto object-contain transition-all duration-300 group-hover:scale-[1.03] group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]",
  navWrapper: "flex items-center gap-10",
  nav: "flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-neutral-500",
  navActive: "text-[#D4AF37] font-bold",
  navInactive: "hover:text-neutral-200 transition-colors",
  langGroup: "flex gap-3 border-l border-neutral-800 pl-8",
  langBtn: "font-mono uppercase text-sm transition-colors hover:text-white"
};

export default function App() {
  const [lang, setLang] = useState('fr');
  const location = useLocation();

  const navLinks = [
    { path: '/', fr: 'Générateur', en: 'Generator', es: 'Generador' },
    { path: '/historique', fr: 'Historique', en: 'History', es: 'Historial' },
    { path: '/a-propos', fr: 'À Propos', en: 'About', es: 'Sobre' }
  ];

  return (
    <div className={stylesApp.app}>
      <header className={stylesApp.header}>
        <Link to="/" className={stylesApp.logoLink}>
          <img src={logoIntelliView} alt="IntelliView" className={stylesApp.logoImage} />
        </Link>

        <div className={stylesApp.navWrapper}>
          <nav className={stylesApp.nav}>
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={location.pathname === link.path ? stylesApp.navActive : stylesApp.navInactive}
              >
                {link[lang]}
              </Link>
            ))}
          </nav>

          <div className={stylesApp.langGroup}>
            {['fr', 'en', 'es'].map(l => (
              <button 
                key={l} 
                onClick={() => setLang(l)} 
                className={`${stylesApp.langBtn} ${lang === l ? "text-[#D4AF37]" : "text-neutral-600"}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="p-4 pt-10">
        <Suspense fallback={<div className="text-center text-[#D4AF37] p-20 animate-pulse uppercase tracking-widest text-xs">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/historique" element={<Historique lang={lang} />} />
            <Route path="/a-propos" element={<APropos lang={lang} />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}