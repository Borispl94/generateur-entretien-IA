const translations = {
  fr: {
    title: "✦ Historique",
    text: "Cette fonctionnalité est en cours de développement. Les entretiens générés apparaîtront ici."
  },
  en: {
    title: "✦ History",
    text: "This feature is currently under development. Generated interviews will appear here."
  },
  es: {
    title: "✦ Historial",
    text: "Esta función está en desarrollo. Las entrevistas generadas aparecerán aquí."
  }
};

export default function Historique({ lang }) {
  const t = translations[lang];

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 bg-neutral-900/80 backdrop-blur-md rounded-2xl p-8 border border-[#D4AF37]/30 shadow-[0_0_40px_rgba(212,175,55,0.05)] text-center">
      <h2 className="text-2xl font-bold mb-4 text-[#D4AF37] uppercase tracking-widest">
        {t.title}
      </h2>
      <p className="text-neutral-400 font-light">
        {t.text}
      </p>
    </div>
  );
}