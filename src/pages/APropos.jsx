const translations = {
  fr: {
    title: "✦ À propos",
    p1: "Étudiant à l'ESILV Paris et actuellement en mobilité académique à Riga, j'ai conçu ce générateur d'entretiens pour démontrer ma capacité à intégrer des API modernes d'intelligence artificielle dans des interfaces web réactives.",
    p2: "Passionné par les environnements techniques exigeants, je suis à la recherche d'un stage de 3 mois en Data Science ou Cybersécurité en Allemagne ou en Belgique à partir de juillet 2026."
  },
  en: {
    title: "✦ About",
    p1: "As a student at ESILV Paris currently on academic exchange in Riga, I designed this interview generator to demonstrate my ability to integrate modern AI APIs into reactive web interfaces.",
    p2: "Passionate about demanding technical environments, I am looking for a 3-month internship in Data Science or Cybersecurity in Germany or Belgium starting in July 2026."
  },
  es: {
    title: "✦ Acerca de",
    p1: "Estudiante en ESILV París y actualmente en intercambio académico en Riga, diseñé este generador de entrevistas para demostrar mi capacidad de integrar APIs de IA modernas en interfaces web reactivas.",
    p2: "Apasionado por los entornos técnicos exigentes, busco una pasantía de 3 meses en Ciencia de Datos o Ciberseguridad en Alemania o Bélgica a partir de julio de 2026."
  }
};

export default function APropos({ lang }) {
  const t = translations[lang];

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 bg-neutral-900/80 backdrop-blur-md rounded-2xl p-8 border border-[#D4AF37]/30 shadow-[0_0_40px_rgba(212,175,55,0.05)] text-center">
      <h2 className="text-2xl font-bold mb-6 text-[#D4AF37] uppercase tracking-widest">
        {t.title}
      </h2>
      <p className="text-neutral-300 font-light leading-relaxed mb-4">
        {t.p1}
      </p>
      <p className="text-neutral-300 font-light leading-relaxed">
        {t.p2}
      </p>
    </div>
  );
}