import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const styles = {
  container: "w-[calc(100%+2rem)] -ml-4 -mt-4 h-[calc(100vh-80px)] flex flex-col md:flex-row overflow-hidden bg-black",
  
  sidebar: "w-full md:w-80 flex-shrink-0 bg-neutral-950/80 border-r border-neutral-900 p-6 overflow-y-auto flex flex-col gap-4",
  sidebarTitle: "text-xs font-bold text-[#D4AF37] uppercase tracking-[0.2em] border-b border-neutral-900 pb-4 sticky top-0 bg-neutral-950/80 backdrop-blur-md pt-2 z-10",
  emptyText: "text-neutral-600 font-light text-sm text-center py-10",
  
  itemCard: "w-full p-4 rounded-lg transition-all duration-200 text-left flex items-start justify-between gap-2 group border-l-2 cursor-pointer",
  itemActive: "bg-neutral-900 border-[#D4AF37] text-white shadow-sm",
  itemInactive: "border-transparent text-neutral-500 hover:bg-neutral-900/50 hover:text-neutral-300",
  
  itemPoste: "font-medium text-sm tracking-wide truncate max-w-[180px]",
  itemDate: "text-[10px] mt-1 uppercase tracking-wider opacity-60",
  deleteBtn: "text-neutral-700 hover:text-red-500 transition-colors p-1 text-xs",
  
  previewPane: "flex-1 overflow-y-auto p-10 md:p-16 relative",
  previewPlaceholder: "flex flex-col items-center justify-center h-full text-neutral-600 font-light text-sm tracking-wide text-center",
  
  resultContainer: "max-w-4xl mx-auto",
  resultTitle: "text-2xl font-bold mb-10 pb-6 border-b border-neutral-900 uppercase tracking-widest text-white",
  resultText: "prose prose-invert max-w-none prose-p:font-light prose-p:text-neutral-400 prose-p:leading-relaxed prose-headings:text-[#D4AF37] prose-headings:font-bold prose-strong:text-white prose-strong:font-semibold prose-li:text-neutral-300 marker:text-[#D4AF37]"
};

const translations = {
  fr: { title: "Entretiens", empty: "Aucun historique disponible.", placeholder: "Sélectionnez un entretien dans le menu latéral.", labelQuestions: "Contenu de la simulation" },
  en: { title: "Interviews", empty: "No history available.", placeholder: "Select an interview from the sidebar.", labelQuestions: "Simulation Content" },
  es: { title: "Entrevistas", empty: "No hay historial disponible.", placeholder: "Seleccione una entrevista en el menú lateral.", labelQuestions: "Contenido de la simulación" }
};

export default function Historique({ lang }) {
  const t = translations[lang];

  const [history, setHistory] = useState(() => {
    const storedHistory = localStorage.getItem('intelliview_history');
    return storedHistory ? JSON.parse(storedHistory) : [];
  });

  const [selectedId, setSelectedId] = useState(() => {
    const storedHistory = localStorage.getItem('intelliview_history');
    if (storedHistory) {
      const parsed = JSON.parse(storedHistory);
      return parsed.length > 0 ? parsed[0].id : null;
    }
    return null;
  });

  const supprimerEntretien = (id, e) => {
    e.stopPropagation(); 
    
    const nouvelHistorique = history.filter(item => item.id !== id);
    setHistory(nouvelHistorique);
    localStorage.setItem('intelliview_history', JSON.stringify(nouvelHistorique));
    
    if (selectedId === id) {
      setSelectedId(nouvelHistorique.length > 0 ? nouvelHistorique[0].id : null);
    }
  };

  const entretienSelectionne = history.find(item => item.id === selectedId);

  return (
    <div className={styles.container}>
      
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>{t.title}</h2>
        
        <div className="flex-1 overflow-y-auto space-y-2 pr-2">
          {history.length === 0 ? (
            <p className={styles.emptyText}>{t.empty}</p>
          ) : (
            history.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`${styles.itemCard} ${selectedId === item.id ? styles.itemActive : styles.itemInactive}`}
              >
                <div className="overflow-hidden">
                  <p className={`${styles.itemPoste} ${selectedId === item.id ? "text-white" : ""}`}>
                    {item.poste}
                  </p>
                  <p className={styles.itemDate}>{item.date}</p>
                </div>
                
                <button
                  onClick={(e) => supprimerEntretien(item.id, e)}
                  className={styles.deleteBtn}
                  title="Supprimer"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
      </aside>

      <section className={styles.previewPane}>
        {entretienSelectionne ? (
          <div className={styles.resultContainer}>
            <h2 className={styles.resultTitle}>
              {entretienSelectionne.poste}
            </h2>
            <div className={styles.resultText}>
              <ReactMarkdown>{entretienSelectionne.questions}</ReactMarkdown>
            </div>
          </div>
        ) : (
          <div className={styles.previewPlaceholder}>
            <p>{t.placeholder}</p>
          </div>
        )}
      </section>

    </div>
  );
}