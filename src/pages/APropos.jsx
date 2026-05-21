import { Link } from 'react-router-dom';

import photoProfil from '../assets/photo_paly.jpg';
import logoTailwind from '../assets/tailwind.jpeg';
import logoMistral from '../assets/Mistral_AI_logo_(2025–).png';
import logoReact from '../assets/react.svg';
import logoVite from '../assets/vite.png';
import logoEsilv from '../assets/Logo_ESILV.png';
import cvAlternance from '../assets/CV.pdf';
import cvStage from '../assets/CV_PALY.pdf';

const styles = {
  container: "w-full max-w-3xl mx-auto pt-10 pb-20 px-6 flex flex-col items-center animate-in fade-in duration-700 selection:bg-[#D4AF37] selection:text-black",
  
  heroSection: "text-center mb-16 w-full",
  mainTitle: "text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white font-balkan",
  goldGradientText: "text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFF8DC]",

  techSection: "w-full text-center mb-16 flex flex-col items-center",
  sectionLabel: "text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em] mb-6 block",
  techText: "text-neutral-400 font-light leading-relaxed text-base md:text-lg max-w-2xl",
  
  stackSection: "w-full flex flex-col items-center pt-10 border-t border-neutral-900 mb-20 overflow-hidden",
  marqueeContainer: "w-full max-w-2xl overflow-hidden relative flex py-8 mask-fade",

  profileSection: "w-full flex flex-col items-center text-center pt-10 border-t border-neutral-900",
  imageWrapper: "relative w-40 h-52 mb-8",
  profileImage: "w-full h-full rounded-xl object-cover transition-all duration-500 ring-1 ring-[#D4AF37]/30 ring-offset-8 ring-offset-black shadow-[0_0_30px_rgba(212,175,55,0.1)]",
  
  profileName: "text-2xl font-bold text-white mb-4",
  esilvLogo: "h-10 w-auto mb-6 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300",
  profileBio: "text-neutral-400 text-sm font-light leading-relaxed mb-12 max-w-xl",

  availabilitySection: "w-full flex flex-col items-center pt-6 mb-12",
  availabilityTitle: "text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em] mb-8 block",
  gridContainer: "w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-6",
  card: "p-6 border border-neutral-900 bg-neutral-950/20 rounded-xl text-center flex flex-col items-center justify-center transition-all duration-300 hover:border-[#D4AF37]/20 hover:bg-neutral-950/40",
  cardTag: "inline-block px-3 py-0.5 text-[9px] font-bold uppercase tracking-wider border border-[#D4AF37]/30 text-[#D4AF37] rounded-full mb-4",
  cardText: "text-neutral-400 text-xs font-light leading-relaxed",

  cvBtn: "flex items-center justify-center gap-2 px-6 py-2.5 mt-6 text-[10px] font-bold uppercase tracking-widest border border-[#D4AF37]/40 text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300",

  footer: "mt-24 pt-10 border-t border-neutral-900 w-full flex justify-center"
};

const translations = {
  fr: {
    hero1: "L'intelligence artificielle",
    hero2: "au service du recrutement.",
    techLabel: "L'Architecture",
    techDesc: "Conçue avec une architecture Serverless axée sur la performance, IntelliView est une Single Page Application (SPA) alimentée par React 18 et Tailwind CSS v4. Le cœur fonctionnel de l'outil s'appuie sur une intégration sécurisée de l'API Mistral AI. Un système strict de Prompt Engineering encadre le flux de données pour garantir des sorties déterministes et structurées. La persistance des sessions et la génération de documents (PDF/Markdown) sont entièrement gérées du côté client, montrant une bonne maîtrise des API modernes du navigateur.",
    creatorLabel: "Conception & Développement",
    profileName: "Boris PALY",
    profileBio: "Étudiant en deuxième année de Bachelor Informatique et Cybersécurité à l'ESILV Paris (actuellement en mobilité académique à Riga), je suis passionné par les systèmes d'information complexes, le traitement de données massives et la sécurisation des infrastructures.",
    availTitle: "Opportunités & Horizons",
    stageTag: "Stage (3 Mois)",
    stageField: "Data · Dév Web · Cybersécurité",
    stageDate: "📅 À partir du 28 Juin 2026",
    altTag: "Alternance (1 An)",
    altField: "Data · Dév Web · Cybersécurité",
    altDate: "📅 À partir du 28 Septembre 2026",
    location: "📍 Paris & Île-de-France",
    btnCvStage: "Télécharger le CV",
    btnCvAlt: "Télécharger le CV",
    back: "Retour au générateur"
  },
  en: {
    hero1: "Artificial intelligence serving",
    hero2: "the recruitment process.",
    techLabel: "The Architecture",
    techDesc: "Designed with a performance-focused serverless architecture, IntelliView is a Single Page Application (SPA) powered by React 18 and Tailwind CSS v4. The core functionality of the tool relies on a secure integration of the Mistral AI API. A rigorous Prompt Engineering system governs the data flow to ensure deterministic and structured output. Session persistence and document generation (PDF/Markdown) are handled entirely client-side, demonstrating a strong command of modern browser APIs.",
    creatorLabel: "Design & Development",
    profileName: "Boris PALY",
    profileBio: "Second-year student in the Computer Science and Cybersecurity Bachelor's program at ESILV Paris (currently on academic mobility in Riga), I am passionate about complex information systems, massive data processing, and infrastructure security.",
    availTitle: "Opportunities & Horizons",
    stageTag: "Internship (3 Months)",
    stageField: "Data · Web Dev · Cybersecurity",
    stageDate: "📅 Starting June 28, 2026",
    altTag: "Apprenticeship (1 Year)",
    altField: "Data · Web Dev · Cybersecurity",
    altDate: "📅 Starting September 28, 2026",
    location: "📍 Paris & Île-de-France",
    btnCvStage: "Download Resume",
    btnCvAlt: "Download Resume",
    back: "Back to Home"
  },
  es: {
    hero1: "La inteligencia artificial al servicio",
    hero2: "del reclutamiento.",
    techLabel: "La Arquitectura",
    techDesc: "Diseñado con una arquitectura sin servidor centrada en el rendimiento, IntelliView es una aplicación de una sola página (SPA) basada en React 18 y Tailwind CSS v4. Su funcionalidad principal se basa en una integración segura de la API de IA de Mistral. Un riguroso sistema de ingeniería de mensajes gestiona el flujo de datos para garantizar una salida determinista y estructurada. La persistencia de la sesión y la generación de documentos (PDF/Markdown) se gestionan completamente del lado del cliente, lo que demuestra un dominio avanzado de las API de los navegadores modernos.",
    creatorLabel: "Diseño y Desarrollo",
    profileName: "Boris PALY",
    profileBio: "Estudiante de segundo año de la Licenciatura en Informática y Ciberseguridad en ESILV París (actualmente en movilidad académica en Riga), me apasionan los sistemas de información complejos, el procesamiento masivo de datos y la seguridad de infraestructuras.",
    availTitle: "Oportunidades y Horizontes",
    stageTag: "Prácticas (3 Meses)",
    stageField: "Datos · Dev Web · Ciberseguridad",
    stageDate: "📅 A partir del 28 de junio de 2026",
    altTag: "Alternancia (1 Año)",
    altField: "Datos · Dev Web · Ciberseguridad",
    altDate: "📅 A partir del 28 de septiembre de 2026",
    location: "📍 París e Île-de-France",
    btnCvStage: "Descargar CV",
    btnCvAlt: "Descargar CV",
    back: "Volver al inicio"
  }
};

export default function APropos({ lang }) {
  const t = translations[lang];

  const baseLogoClass = "w-auto object-contain opacity-70";

  const stackLogos = [
    { src: logoReact, alt: "React", extraClasses: "h-10 md:h-12" },
    { src: logoVite, alt: "Vite", extraClasses: "h-10 md:h-12" },
    { src: logoTailwind, alt: "Tailwind CSS", extraClasses: "h-10 md:h-12 scale-[1.4] md:scale-[1.7]" },
    { src: logoMistral, alt: "Mistral AI", extraClasses: "h-7 md:h-9" }
  ];

  return (
    <div className={styles.container}>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap');
        .font-balkan { font-family: 'Philosopher', sans-serif; }
        
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
        
        <div className={styles.marqueeContainer}>
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
        
        <img 
          src={logoEsilv} 
          alt="ESILV Paris" 
          className={styles.esilvLogo} 
        />
        
        <p className={styles.profileBio}>{t.profileBio}</p>
      </section>

      <section className={styles.availabilitySection}>
        <span className={styles.availabilityTitle}>{t.availTitle}</span>
        <div className={styles.gridContainer}>
          <div className={styles.card}>
            <span className={styles.cardTag}>{t.stageTag}</span>
            <div className={styles.cardText}>
              <p className="text-white font-medium mb-1">{t.stageField}</p>
              <p className="text-neutral-400 mb-2">{t.stageDate}</p>
              <p className="text-neutral-500 font-medium text-[11px] uppercase tracking-wider">{t.location}</p>
            </div>
            <a href={cvStage} download="Boris_PALY_CV_Stage.pdf" className={styles.cvBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              {t.btnCvStage}
            </a>
          </div>

          <div className={styles.card}>
            <span className={styles.cardTag}>{t.altTag}</span>
            <div className={styles.cardText}>
              <p className="text-white font-medium mb-1">{t.altField}</p>
              <p className="text-neutral-400 mb-2">{t.altDate}</p>
              <p className="text-neutral-500 font-medium text-[11px] uppercase tracking-wider">{t.location}</p>
            </div>
            <a href={cvAlternance} download="Boris_PALY_CV_Alternance.pdf" className={styles.cvBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              {t.btnCvAlt}
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link to="/" className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 hover:text-[#D4AF37] transition-colors">
          {t.back}
        </Link>
      </footer>

    </div>
  );
}