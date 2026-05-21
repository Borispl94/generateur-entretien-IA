import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { jsPDF } from 'jspdf';

const styles = {
  container: "w-full max-w-3xl mx-auto mt-16 md:mt-24 px-6 flex flex-col items-center animate-in fade-in duration-1000",
  
  header: "mb-16 text-center w-full",
  title: "text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white font-balkan",
  titleGlow: "text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFF8DC]",
  subtitle: "text-neutral-500 font-light tracking-[0.3em] uppercase text-xs md:text-sm",

  formGroup: "w-full space-y-8 relative",
  inputWrapper: "relative w-full group",
  input: "w-full px-0 py-4 bg-transparent border-b border-neutral-800 focus:outline-none focus:border-[#D4AF37] text-white text-xl md:text-2xl placeholder-neutral-800 transition-colors duration-500",
  
  submitButton: "w-full py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 flex items-center justify-center border border-neutral-800 hover:border-[#D4AF37] hover:text-[#D4AF37] text-neutral-400 disabled:opacity-0 disabled:pointer-events-none",

  loaderWrapper: "w-full mt-24 flex flex-col items-center justify-center space-y-6 animate-in fade-in duration-700",
  loaderIcon: "w-12 h-12 rounded-full border-[1px] border-neutral-900 border-t-[#D4AF37] animate-spin",
  loaderText: "text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] animate-pulse",

  resultWrapper: "w-full mt-20 animate-in slide-in-from-bottom-8 fade-in duration-1000",
  
  resultHeader: "flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-neutral-900 pb-4 gap-4",
  resultTitle: "text-xs font-bold text-neutral-500 uppercase tracking-[0.3em]",
  
  btnGroup: "flex flex-wrap gap-3",
  downloadBtn: "flex items-center justify-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-widest border border-neutral-800 text-neutral-400 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300",
  pdfBtn: "flex items-center justify-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-widest border border-[#D4AF37]/40 text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300",

  resultText: "prose prose-invert max-w-none prose-p:font-light prose-p:text-neutral-400 prose-p:leading-relaxed prose-headings:text-white prose-headings:font-bold prose-strong:text-[#D4AF37] prose-strong:font-semibold prose-li:text-neutral-300 marker:text-[#D4AF37]"
};

const translations = {
  fr: { title1: "Générateur", title2: "d'Entretien", subtitle: "Propulsé par l'IA", placeholder: "Ex: Architecte Cloud, Data Scientist...", btnGen: "Générer les questions", loading: "Analyse du poste...", resTitle: "Simulation technique", btnMarkdown: "Markdown", btnPDF: "PDF" },
  en: { title1: "Interview", title2: "Generator", subtitle: "AI Powered", placeholder: "Ex: Cloud Architect, Data Scientist...", btnGen: "Generate questions", loading: "Analyzing role...", resTitle: "Technical Simulation", btnMarkdown: "Markdown", btnPDF: "PDF" },
  es: { title1: "Generador", title2: "de Entrevistas", subtitle: "Impulsado par IA", placeholder: "Ej: Arquitecto Cloud, Data Scientist...", btnGen: "Generar preguntas", loading: "Analizando puesto...", resTitle: "Simulación Técnica", btnMarkdown: "Markdown", btnPDF: "PDF" }
};

const prompts = {
  fr: (poste) => `Tu es un expert en recrutement technique. Prépare un guide d'entretien pour le poste de : ${poste}. Réponds en français. Ta réponse DOIT suivre strictement ce format en Markdown : ### 🎯 Introduction (Rédige une brève introduction de 2 lignes maximum sur les attentes de ce poste) ### 📝 Questions d'entretien (Liste 5 questions pertinentes, mêlant technique et comportemental) ### 💡 Conseils de réussite (Donne 3 conseils clés rapides pour briller à cet entretien) Règle absolue : Arrête-toi immédiatement après le dernier conseil.`,
  en: (poste) => `You are an expert technical recruiter. Prepare an interview guide for the position of: ${poste}. Respond in English. Your response MUST strictly follow this Markdown format: ### 🎯 Introduction (Write a brief introduction of 2 lines maximum about the expectations for this role) ### 📝 Interview Questions (List 5 relevant questions, mixing technical and behavioral) ### 💡 Success Tips (Provide 3 quick key tips to shine in this interview) Absolute rule: Stop immediately after the last tip.`,
  es: (poste) => `Eres un expert en selección de personal técnico. Prepara una guía de entrevista para le puesto de: ${poste}. Responde en español. Tu respuesta DEBE suivre estrictamente este format en Markdown: ### 🎯 Introducción (Escribe una breve introducción de máximo 2 líneas sobre las expectativas de este puesto) ### 📝 Preguntas de Entrevista (Enumera 5 preguntas relevantes, mezclando técnicas y conductuales) ### 💡 Consejos de Éxito (Da 3 consejos clave rápidos para brillar en esta entrevista) Regla absoluta: Detente inmediatamente après el último consejo.`
};

export default function Home({ lang }) {
  const [poste, setPoste] = useState('');
  const [questions, setQuestions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const t = translations[lang];
  const nomFichierNettoye = poste.trim().replace(/\s+/g, '_');

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
          temperature: 0.7,
          stream: true 
        })
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      
      let accumateurTexte = "";
      let buffer = "";

      setIsLoading(false);
      setQuestions("");

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lignes = buffer.split("\n");
        
        buffer = lignes.pop();

        for (const ligne of lignes) {
          const ligneNettoyee = ligne.trim();
          
          if (ligneNettoyee === "data: [DONE]") break;
          
          if (ligneNettoyee.startsWith("data: ")) {
            try {
              const donneesJson = JSON.parse(ligneNettoyee.slice(6));
              const tokenTexte = donneesJson.choices[0]?.delta?.content || "";
              
              if (tokenTexte) {
                accumateurTexte += tokenTexte;
                setQuestions(accumateurTexte); 
              }
            } catch {
              continue;
            }
          }
        }
      }

      const nouvelEntretien = {
        id: Date.now(),
        poste: poste,
        date: new Date().toLocaleDateString(lang === 'fr' ? 'fr-FR' : lang === 'es' ? 'es-ES' : 'en-US'),
        questions: accumateurTexte
      };
      
      const historiqueActuel = JSON.parse(localStorage.getItem('intelliview_history') || '[]');
      localStorage.setItem('intelliview_history', JSON.stringify([nouvelEntretien, ...historiqueActuel]));

    } catch (err) {
      console.error(err);
      setError("Impossible de joindre l'API Mistral ou flux interrompu.");
      setIsLoading(false);
    }
  };

  const telechargerMarkdown = () => {
    if (!questions) return;
    const blob = new Blob([questions], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Entretien_${nomFichierNettoye}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const telechargerPDF = () => {
    if (!questions) return;

    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const margin = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const maxLineWidth = pageWidth - (margin * 2);
    let yPosition = 25;

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(212, 175, 55); 
    doc.text(`INTELLIVIEW : ${poste.toUpperCase()}`, margin, yPosition);
    
    yPosition += 6;
    doc.setDrawColor(230, 230, 230);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 12;

    const lignes = questions.split('\n');

    lignes.forEach((ligne) => {
      let textClean = ligne.trim();
      
      if (!textClean) {
        yPosition += 4;
        return;
      }

      if (textClean.startsWith('###') || textClean.startsWith('##')) {
        textClean = textClean.replace(/^#+\s*/, '').trim();
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(212, 175, 55);
        yPosition += 5;
      } else {
        textClean = textClean.replace(/\*\*/g, ''); 
        doc.setFont("Helvetica", "normal");
        doc.setFontSize(10.5);
        doc.setTextColor(50, 50, 50);
      }

      const textWrap = doc.splitTextToSize(textClean, maxLineWidth);
      
      textWrap.forEach((phrase) => {
        if (yPosition > 275) {
          doc.addPage();
          yPosition = 25;
        }
        doc.text(phrase, margin, yPosition);
        yPosition += 6.5;
      });
    });

    doc.save(`Entretien_${nomFichierNettoye}.pdf`);
  };

  return (
    <div className={styles.container}>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap');
        .font-balkan { font-family: 'Philosopher', sans-serif; }
      `}</style>

      <header className={styles.header}>
        <h1 className={styles.title}>
          {t.title1} <span className={styles.titleGlow}>{t.title2}</span>
        </h1>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </header>

      <form onSubmit={genererEntretien} className={styles.formGroup}>
        <div className={styles.inputWrapper}>
          <input
            id="poste"
            type="text"
            value={poste}
            onChange={(e) => setPoste(e.target.value)}
            placeholder={t.placeholder}
            className={styles.input}
            disabled={isLoading || questions !== null}
            autoComplete="off"
          />
        </div>

        {questions === null && !isLoading && (
          <button type="submit" disabled={!poste.trim()} className={styles.submitButton}>
            {t.btnGen}
          </button>
        )}
      </form>

      {error && (
        <div className="mt-10 text-red-500 text-sm tracking-wide font-light">
          {error}
        </div>
      )}

      {isLoading && (
        <div className={styles.loaderWrapper}>
          <div className={styles.loaderIcon}></div>
          <p className={styles.loaderText}>{t.loading}</p>
        </div>
      )}

      {questions !== null && (
        <div className={styles.resultWrapper}>
          
          <div className={styles.resultHeader}>
            <h2 className={styles.resultTitle}>
              {t.resTitle}
            </h2>
            
            <div className={styles.btnGroup}>
              <button onClick={telechargerMarkdown} className={styles.downloadBtn} title="Télécharger le fichier Markdown">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                {t.btnMarkdown}
              </button>
              
              <button onClick={telechargerPDF} className={styles.pdfBtn} title="Télécharger le fichier PDF">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                {t.btnPDF}
              </button>
            </div>
          </div>

          <div className={styles.resultText}>
            <ReactMarkdown>{questions}</ReactMarkdown>
          </div>
        </div>
      )}
      
    </div>
  );
}