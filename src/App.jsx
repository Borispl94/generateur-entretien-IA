import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Historique from './pages/Historique';
import APropos from './pages/APropos';

function App() {
  // L'état global de la langue de l'application
  const [lang, setLang] = useState('fr');

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black flex flex-col">
      {/* On passe lang et setLang au Header pour l'affichage et la modification */}
      <Header lang={lang} setLang={setLang} />
      
      <div className="flex-1 p-4">
        <Routes>
          {/* On passe lang à la page Home pour traduire l'interface et l'IA */}
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/historique" element={<Historique lang={lang} />} />
          <Route path="/a-propos" element={<APropos lang={lang} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;