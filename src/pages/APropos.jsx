import { Link } from 'react-router-dom';

import photoProfil from '../assets/photo_paly.jpg';
import logoTailwind from '../assets/tailwind.jpeg';
import logoMistral from '../assets/Mistral_AI_logo_(2025–).png';
import logoReact from '../assets/react.svg';
import logoVite from '../assets/vite.png';

const styles = {
  container: "w-full max-w-3xl mx-auto pt-10 pb-20 px-6 flex flex-col items-center animate-in fade-in duration-700 selection:bg-[#D4AF37] selection:text-black",
  
  heroSection: "text-center mb-16 w-full",
  mainTitle: "text-4xl md:text-5xl font-bold mb-6 tracking-tighter text-white",
  goldGradientText: "text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFF8DC]",

  techSection: "w-full text-center mb-16 flex flex-col items-center",
  sectionLabel: "text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em] mb-6 block",
  techText: "text-neutral-400 font-light leading-relaxed text-base md:text-lg max-w-2xl",
  
  stackSection: "w-full flex flex-col items-center pt-10 border-t border-neutral-900 mb-20 overflow-hidden",
  marqueeContainer: "w-full max-w-2xl overflow-hidden relative flex py-8 mask-fade",

  profileSection: "w-full flex flex-col items-center text-center pt-10 border-t border-neutral-900",
  imageWrapper: "relative w-32 h-32 mb-6",
  profileImage: "w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ring-2 ring-[#D4AF37]/30 ring-offset-8 ring-offset-black",
  
  profileName: "text-2xl font-bold text-white mb-3",
  profileBio: "text-neutral-400 text-sm font-light leading-relaxed mb-8 max-w-lg",

  ctaBadge: "inline-flex flex-col items-center w-full max-w-sm p-6 bg-[#D4AF37] rounded-2xl text-black transition-transform hover:scale-[1.02] duration-300 shadow-[0_0_30px_rgba(212,175,55,0.15)]",
  ctaStatus: "text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-2",
  ctaMain: "font-bold text-[15px] leading-tight text-center",
  ctaLoc: "text-xs mt-3 font-medium opacity-80",

  footer: "mt-24 pt-10 border-t border-neutral-900 w-full flex justify-center"
};

const translations = {
  fr: {
    hero1: "L'intelligence artificielle",
    hero2: "au service du recrutement.",
    techLabel: "L'Architecture",
    techDesc: "IntelliView est une application front-end autonome (React 18 / Tailwind CSS) illustrant le concept de Privacy by Design. L'interface communique avec l'API Mistral AI via un Prompt Engineering avancé pour structurer l'analyse technique. Afin de garantir la confidentialité absolue des simulations, l'architecture ne repose sur aucune base de données tierce (Backend) : l'état applicatif, la sérialisation de l'historique et la compilation des exports (PDF/Markdown) sont exécutés localement via les API natives du navigateur (LocalStorage, Blob).",
    creatorLabel: "Conception & Développement",
    profileName: "Boris PALY",
    profileBio: "Étudiant ingénieur à l'ESILV Paris en mobilité à Riga. Passionné par les systèmes d'information complexes, le traitement de données massives et la sécurisation des infrastructures.",
    ctaStatus: "Disponibilité Stage",
    ctaMain: "Data Science / Cybersécurité (3 mois)",
    ctaLoc: "📍 Allemagne · Belgique · Juillet 2026",
    back: "Retour au générateur"
  },
  en: {
    hero1: "Artificial intelligence serving",
    hero2: "the recruitment process.",
    techLabel: "The Architecture",
    techDesc: "IntelliView is a standalone frontend application (React 18 / Tailwind CSS) illustrating the concept of Privacy by Design. The interface communicates with the Mistral AI API through advanced Prompt Engineering to structure technical analysis. To ensure absolute confidentiality of simulations, the architecture does not rely on any third-party databases (Backend): the application state, history serialization, and export compilation (PDF/Markdown) are executed locally via the browser's native APIs (LocalStorage, Blob).",
    creatorLabel: "Design & Development",
    profileName: "Boris PALY",
    profileBio: "Engineering student at ESILV Paris currently in Riga. Passionate about complex information systems, large-scale data analytics, and infrastructure security.",
    ctaStatus: "Internship availability",
    ctaMain: "Data Science / Cybersecurity (3 months)",
    ctaLoc: "📍 Germany · Belgium · July 2026",
    back: "Back to Home"
  },
  es: {
    hero1: "La inteligencia artificial al servicio",
    hero2: "del reclutamiento.",
    techLabel: "La Arquitectura",
    techDesc: "IntelliView es una aplicación frontend autónoma (React 18 / Tailwind CSS) que ilustra el concepto de Privacidad por Diseño. La interfaz se comunica con la API de Mistral AI a través de un Prompt Engineering avanzado para estructurar el análisis técnico. Para garantizar la confidencialidad absoluta de las simulaciones, la arquitectura no depende de bases de datos de terceros (Backend): el estado de la aplicación, la serialización del historial y la compilación de los exports (PDF/Markdown) se ejecutan localmente a través de las APIs nativas del navegador (LocalStorage, Blob).",
    creatorLabel: "Diseño y Desarrollo",
    profileName: "Boris PALY",
    profileBio: "Estudiante de ingeniería en ESILV París en movilidad en Riga. Apasionado por los sistemas de información complejos, el análisis de datos y la seguridad de los datos.",
    ctaStatus: "Disponibilidad de prácticas",
    ctaMain: "Data Science / Ciberseguridad (3 meses)",
    ctaLoc: "📍 Alemania · Bélgica · Julio 2026",
    back: "Volver al inicio"
  }
};

export default function APropos({ lang }) {
  const t = translations[lang];

  // Classe de base pour tous les logos
  const baseLogoClass = "w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer";

  // Configuration fine pour harmoniser les tailles et annuler le vide interne des images
  const stackLogos = [
    { src: logoReact, alt: "React", extraClasses: "h-10 md:h-12" },
    { src: logoVite, alt: "Vite", extraClasses: "h-10 md:h-12" },
    // Agrandissement massif via scale pour que le visuel annule les marges blanches du JPEG
    { src: logoTailwind, alt: "Tailwind CSS", extraClasses: "h-10 md:h-12 scale-[1.4] md:scale-[1.7]" },
    // Légère réduction de hauteur pour Mistral qui est plus massif horizontalement
    { src: logoMistral, alt: "Mistral AI", extraClasses: "h-7 md:h-9" }
  ];

  return (
    <div className={styles.container}>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .mask-fade {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        .marquee-group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
      
      <header className={styles.heroSection}>
        <h1 className={styles.mainTitle}>
          {t.hero1} <br />
          <span className={styles.goldGradientText}>{t.hero2}</span>
        </h1>
      </header>

      <section className={styles.techSection}>
        <span className={styles.sectionLabel}>{t.techLabel}</span>
        <div className={styles.techText}>
          <p dangerouslySetInnerHTML={{ __html: t.techDesc.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>') }} />
        </div>
      </section>

      <section className={styles.stackSection}>
        <span className={styles.sectionLabel}>Stack</span>
        
        <div className={`marquee-group ${styles.marqueeContainer}`}>
          {/* L'astuce de la boucle parfaite : 
            gap-16 (espace entre logos) + pr-16 (espace à la fin du groupe) = transition invisible 
          */}
          <div className="flex items-center justify-start gap-16 md:gap-24 pr-16 md:pr-24 shrink-0 min-w-full animate-marquee">
            {stackLogos.map((logo, index) => (
              <img key={`g1-${index}`} src={logo.src} alt={logo.alt} className={`${baseLogoClass} ${logo.extraClasses}`} />
            ))}
          </div>
          
          <div className="flex items-center justify-start gap-16 md:gap-24 pr-16 md:pr-24 shrink-0 min-w-full animate-marquee" aria-hidden="true">
            {stackLogos.map((logo, index) => (
              <img key={`g2-${index}`} src={logo.src} alt={logo.alt} className={`${baseLogoClass} ${logo.extraClasses}`} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.profileSection}>
        <span className={styles.sectionLabel}>{t.creatorLabel}</span>
        
        <div className={styles.imageWrapper}>
          <img 
            src={photoProfil} 
            alt={t.profileName}
            className={styles.profileImage}
          />
        </div>
        
        <h3 className={styles.profileName}>{t.profileName}</h3>
        <p className={styles.profileBio}>{t.profileBio}</p>

        <a href="#" className={styles.ctaBadge}>
          <span className={styles.ctaStatus}>{t.ctaStatus}</span>
          <span className={styles.ctaMain}>{t.ctaMain}</span>
          <span className={styles.ctaLoc}>{t.ctaLoc}</span>
        </a>
      </section>

      <footer className={styles.footer}>
        <Link to="/" className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 hover:text-[#D4AF37] transition-colors">
          {t.back}
        </Link>
      </footer>

    </div>
  );
}