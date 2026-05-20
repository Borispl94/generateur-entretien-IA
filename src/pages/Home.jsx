import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const styles = {
  header: "mb-10 text-center",
  title: "text-4xl md:text-5xl font-extrabold mb-3 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF8DC] to-[#D4AF37]",
  subtitle: "text-neutral-400 font-light tracking-wide uppercase text-sm",
  mainCard: "w-full max-w-2xl mx-auto bg-neutral-900/80 backdrop-blur-md rounded-2xl p-8 border border-[#D4AF37]/30 shadow-[0_0_40px_rgba(212,175,55,0.05)]",
  formGroup: "space-y-6",
  label: "block text-sm font-medium text-neutral-300 mb-2 uppercase tracking-wide",
  input: "w-full px-5 py-4 bg-black border border-neutral-700 rounded-lg focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-white placeholder-neutral-600 transition-all duration-300",
  submitButton: "w-full py-4 px-6 bg-[#D4AF37] hover:bg-[#E5C158] text-black font-bold uppercase tracking-widest rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center",
  loaderContainer: "flex items-center gap-3",
  loaderIcon: "animate-spin h-5 w-5 text-black",
  errorCard: "mt-8 p-5 bg-red-950/30 border border-red-500/50 rounded-lg text-red-200 text-sm",
  errorTitle: "font-semibold uppercase tracking-wide",
  errorMessage: "mt-2 text-red-300/80",
  resultCard: "mt-10 p-8 bg-neutral-950/60 backdrop-blur-sm rounded-2xl relative overflow-hidden",
  resultTitle: "text-lg font-semibold mb-8 pb-4 border-b border-neutral-800 flex items-center gap-3 uppercase tracking-widest text-neutral-200",
  resultText: "prose prose-invert max-w-none prose-p:font-light prose-p:text-neutral-300 prose-headings:text-[#D4AF37] prose-headings:font-bold prose-strong:text-[#D4AF37] prose-strong:font-semibold prose-li:text-neutral-300 marker:text-[#D4AF37]"
};

const translations = {
  fr: { title: "Générateur d'Entretien", subtitle: "Propulsé par l'Intelligence Artificielle", label: "Poste visé", placeholder: "Ex: Architecte Cloud, Data Scientist...", btnGen: "Générer les questions", btnLoad: "Analyse en cours...", errTitle: "⚠️ Erreur de connexion", resTitle: "Questions suggérées" },
  en: { title: "Interview Generator", subtitle: "Powered by Artificial Intelligence", label: "Target Position", placeholder: "Ex: Cloud Architect, Data Scientist...", btnGen: "Generate Questions", btnLoad: "Analyzing...", errTitle: "⚠️ Connection Error", resTitle: "Suggested Questions" },
  es: { title: "Generador de Entrevistas", subtitle: "Impulsado por Inteligencia Artificial", label: "Puesto deseado", placeholder: "Ej: Arquitecto Cloud, Data Scientist...", btnGen: "Generar preguntas", btnLoad: "Analizando...", errTitle: "⚠️ Error de conexión", resTitle: "Preguntas sugeridas" }
};

const prompts = {
  fr: (poste) => `Génère une liste de 5 questions d'entretien techniques et comportementales pertinentes pour le poste de : ${poste}. Réponds en français de manière professionnelle tout en donnant une introduction, les questions typiques et des conseils.`,
  en: (poste) => `Generate a list of 5 relevant technical and behavioral interview questions for the position of: ${poste}. Respond in English professionally while providing an introduction, typical questions and advice..`,
  es: (poste) => `Genera una lista de 5 preguntas de entrevista técnicas y conductuales relevantes para el puesto de: ${poste}. Responde en español de manera profesional a la vez que se ofrece una introducción, preguntas frecuentes y consejos.`
};

export default function Home({ lang }) {
  const [poste, setPoste] = useState('');
  const [questions, setQuestions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const t = translations[lang];

  const genererEntretien = async (e) => {
    e.preventDefault();
    if (!poste.trim()) return;

    setIsLoading(true);
    setError(null);
    setQuestions(null);

    const apiKey = import.meta.env.VITE_MISTRAL_API_KEY;

    try {
      const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'mistral-tiny', 
          messages: [{ role: 'user', content: prompts[lang](poste) }],
          temperature: 0.7
        })
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      setQuestions(data.choices[0].message.content);

    } catch (err) {
      console.error(err);
      setError("Impossible de joindre l'API Mistral.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <header className={styles.header}>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </header>

      <main className={styles.mainCard}>
        <form onSubmit={genererEntretien} className={styles.formGroup}>
          <div>
            <label htmlFor="poste" className={styles.label}>{t.label}</label>
            <input
              id="poste"
              type="text"
              value={poste}
              onChange={(e) => setPoste(e.target.value)}
              placeholder={t.placeholder}
              className={styles.input}
              disabled={isLoading}
            />
          </div>

          <button type="submit" disabled={isLoading || !poste.trim()} className={styles.submitButton}>
            {isLoading ? (
              <span className={styles.loaderContainer}>
                <svg className={styles.loaderIcon} fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                {t.btnLoad}
              </span>
            ) : t.btnGen}
          </button>
        </form>

        {error && (
          <div className={styles.errorCard}>
            <p className={styles.errorTitle}>{t.errTitle}</p>
            <p className={styles.errorMessage}>{error}</p>
          </div>
        )}

        {questions && (
          <div className={styles.resultCard}>
            <h2 className={styles.resultTitle}>
              <span className="text-[#D4AF37]">✦</span> {t.resTitle}
            </h2>
            <div className={styles.resultText}>
              <ReactMarkdown>{questions}</ReactMarkdown>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}