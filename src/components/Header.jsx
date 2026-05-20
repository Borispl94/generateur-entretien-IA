import { Link, useLocation } from 'react-router-dom';

const translations = {
  fr: { home: "Accueil", history: "Historique", about: "À propos" },
  en: { home: "Home", history: "History", about: "About" },
  es: { home: "Inicio", history: "Historial", about: "Acerca de" }
};

const styles = {
  header: "w-full bg-black/90 backdrop-blur-md border-b border-[#D4AF37]/20 sticky top-0 z-50",
  nav: "w-full px-8 md:px-16 h-20 flex items-center justify-between",
  
  // Logo non pointable
  logoContainer: "flex items-center gap-2 cursor-default select-none group",
  logoIcon: "text-[#D4AF37] text-2xl group-hover:scale-110 transition-transform duration-300",
  logoText: "text-white font-bold tracking-widest uppercase text-sm transition-colors",
  
  rightSection: "flex items-center",
  navMenu: "flex items-center gap-8 md:gap-12",
  linkBase: "text-xs font-medium uppercase tracking-widest transition-all duration-300",
  linkActive: "text-[#D4AF37] border-b-2 border-[#D4AF37] pb-1",
  linkInactive: "text-neutral-400 hover:text-white hover:border-b-2 hover:border-neutral-600 pb-1",
  langContainer: "flex items-center gap-3 ml-10 pl-10 border-l border-neutral-800",
  langBtnActive: "text-[#D4AF37] font-bold text-xs uppercase tracking-widest cursor-default",
  langBtnInactive: "text-neutral-500 hover:text-white text-xs uppercase tracking-widest transition-colors cursor-pointer",
  langSeparator: "text-neutral-800 text-xs"
};

function Header({ lang, setLang }) {
  const location = useLocation();
  const t = translations[lang];

  const getLinkStyle = (path) => {
    return location.pathname === path 
      ? `${styles.linkBase} ${styles.linkActive}`
      : `${styles.linkBase} ${styles.linkInactive}`;
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        
        {/* Logo non cliquable */}
        <div className={styles.logoContainer}>
          <span className={styles.logoIcon}>✦</span>
          <span className={styles.logoText}>IntelliView</span>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.navMenu}>
            <Link to="/" className={getLinkStyle('/')}>{t.home}</Link>
            <Link to="/historique" className={getLinkStyle('/historique')}>{t.history}</Link>
            <Link to="/a-propos" className={getLinkStyle('/a-propos')}>{t.about}</Link>
          </div>

          <div className={styles.langContainer}>
            {['fr', 'en', 'es'].map((l, index) => (
              <div key={l} className="flex items-center gap-3">
                <button 
                  onClick={() => setLang(l)} 
                  className={lang === l ? styles.langBtnActive : styles.langBtnInactive}
                >
                  {l.toUpperCase()}
                </button>
                {/* Affiche le séparateur uniquement si ce n'est pas le dernier élément */}
                {index < 2 && <span className={styles.langSeparator}>|</span>}
              </div>
            ))}
          </div>
        </div>

      </nav>
    </header>
  );
}

export default Header;