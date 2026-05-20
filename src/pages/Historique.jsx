import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

// Dictionnaire des styles du tableau de bord
const styles = {
  container: "w-full max-w-5xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-8",
  
  // Panneau de gauche (Liste)
  sidebar: "bg-neutral-900/80 backdrop-blur-md rounded-2xl p-6 border border-[#D4AF37]/20 h-[70vh] overflow-y-auto space-y-4",
  sidebarTitle: "text-sm font-bold text-[#D4AF37] uppercase tracking-widest border-b border-neutral-800 pb-3",
  emptyText: "text-neutral-500 font-light text-sm text-center py-8",
  
  // Onglets de la liste
  itemCard: "w-full p-4 rounded-xl border transition-all duration-300 text-left flex items-start justify-between gap-2 group",
  itemActive: "bg-neutral-950 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.1)]",
  itemInactive: "bg-black/40 border-neutral-800 hover:border-neutral-600",
  
  itemPoste: "font-medium text-sm tracking-wide truncate max-w-[180px]",
  itemDate: "text-[10px] text-neutral-500 mt-1 uppercase tracking-wider",
  deleteBtn: "text-neutral-600 hover:text-red-500 transition-colors p-1 text-xs",
  
  // Panneau de droite (Visualisation)
  previewPane: "md:col-span-2 bg-neutral-900/40 backdrop-blur-md rounded-2xl p-8 border border-neutral-800 h-[70vh] overflow-y-auto relative",
  previewPlaceholder: "flex flex-col items-center justify-center h-full text-neutral-500 font-light text-sm tracking-wide",
  previewIcon: "text-[#D4AF37] text-3xl mb-3 animate-pulse",
  
  // Contenu Markdown
  resultTitle: "text-lg font-semibold mb-6 pb-4 border-b border-neutral-800 flex items-center gap-3 uppercase tracking-widest text-neutral-200",
  resultText: "prose prose-invert max-w-none prose-p:font-light prose-p:text-neutral-300 prose-headings:text-[#D4AF37] prose-headings:font-bold prose-strong:text-[#D4AF37] prose-strong:font-semibold prose-li:text-neutral-300 marker:text-[#D4AF37]"
};

// Traductions de la page d'historique
const translations = {
  fr: { title: "✦ Entretiens sauvegardés", empty: "Aucun historique disponible.", placeholder: "Sélectionnez un entretien pour afficher les détails.", labelQuestions: "Contenu de la simulation" },
  en: { title: "✦ Saved Interviews", empty: "No history available.", placeholder: "Select an interview to view details.", labelQuestions: "Simulation Content" },
  es: { title: "✦ Entrevistas guardadas", empty: "No hay historial disponible.", placeholder: "Seleccione una entrevista para ver los detalles.", labelQuestions: "Contenido de la simulación" }
};

export default function Historique({ lang }) {
  const t = translations[lang];

  // Initialisation de l'historique directement depuis le localStorage
  const [history, setHistory] = useState(() => {
    const storedHistory = localStorage.getItem('intelliview_history');
    return storedHistory ? JSON.parse(storedHistory) : [];
  });

  // Initialisation de l'ID sélectionné au premier rendu
  const [selectedId, setSelectedId] = useState(() => {
    const storedHistory = localStorage.getItem('intelliview_history');
    if (storedHistory) {
      const parsed = JSON.parse(storedHistory);
      return parsed.length > 0 ? parsed[0].id : null;
    }
    return null;
  });

  // Fonction de suppression d'un élément
  const supprimerEntretien = (id, e) => {
    e.stopPropagation(); 
    
    const nouvelHistorique = history.filter(item => item.id !== id);
    setHistory(nouvelHistorique);
    localStorage.setItem('intelliview_history', JSON.stringify(nouvelHistorique));
    
    if (selectedId === id) {
      setSelectedId(nouvelHistorique.length > 0 ? nouvelHistorique[0].id : null);
    }
  };

  // Récupération de l'entretien actif à afficher à droite
  const entretienSelectionne = history.find(item => item.id === selectedId);

  return (
    <div className={styles.container}>
      
      {
        // Colonne de Gauche : Liste des archives
      }
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>{t.title}</h2>
        
        {history.length === 0 ? (
          <p className={styles.emptyText}>{t.empty}</p>
        ) : (
          history.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`${styles.itemCard} ${selectedId === item.id ? styles.itemActive : styles.itemInactive}`}
            >
              <div className="overflow-hidden">
                <p className={`${styles.itemPoste} ${selectedId === item.id ? "text-[#D4AF37]" : "text-white"}`}>
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
            </button>
          ))
        )}
      </aside>

      {
        // Colonne de Droite : Visualiseur de contenu
      }
      <section className={styles.previewPane}>
        {entretienSelectionne ? (
          <div>
            <h2 className={styles.resultTitle}>
              <span className="text-[#D4AF37]">✦</span> {entretienSelectionne.poste}
            </h2>
            <div className={styles.resultText}>
              <ReactMarkdown>{entretienSelectionne.questions}</ReactMarkdown>
            </div>
          </div>
        ) : (
          <div className={styles.previewPlaceholder}>
            <span className={styles.previewIcon}>✦</span>
            <p>{t.placeholder}</p>
          </div>
        )}
      </section>

    </div>
  );
}