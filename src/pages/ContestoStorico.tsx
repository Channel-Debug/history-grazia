import React from 'react';
import ContentPage from '../components/ContentPage';

const ContestoStorico = () => {
  const contestoContent = `
    <div class="space-y-8">
      <div class="relative overflow-hidden rounded-xl border border-deledda-sand p-8 bg-gradient-to-br from-deledda-cream to-white shadow-md animate-fade-in">
        <div class="absolute top-0 right-0 w-40 h-40 bg-deledda-terracotta/20 rounded-full -translate-y-20 translate-x-20 animate-pulse-slow"></div>
        <div class="absolute bottom-0 left-0 w-28 h-28 bg-deledda-olive/20 rounded-full translate-y-14 -translate-x-14 animate-pulse-slow"></div>
        
        <div class="relative z-10">
          <h2 class="text-2xl font-serif font-bold mb-6 text-deledda-olive animate-slide-in">La Sardegna tra '800 e '900</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="bg-white/70 p-6 rounded-lg shadow-sm border border-deledda-sand animate-slide-in">
              <h3 class="text-xl font-serif font-bold mb-4 text-deledda-terracotta">Il contesto sociale</h3>
              <p class="text-deledda-dark/90">
                La Sardegna in cui vive e cresce Grazia Deledda è una terra arcaica, dominata da tradizioni molto antiche, dalla religione e da una società patriarcale. Le donne avevano un ruolo secondario, erano viste come madri e mogli, destinate solo alla famiglia e ai lavori domestici.
              </p>
            </div>
            
            <div class="bg-white/70 p-6 rounded-lg shadow-sm border border-deledda-sand animate-slide-in">
              <h3 class="text-xl font-serif font-bold mb-4 text-deledda-terracotta">L'istruzione femminile</h3>
              <p class="text-deledda-dark/90">
                Non avevano accesso all'istruzione superiore e difficilmente potevano partecipare alla vita pubblica o culturale. Grazia Deledda, però, rompe questi schemi: riesce ad affermarsi come scrittrice in un mondo dominato dagli uomini.
              </p>
            </div>
          </div>
          
          <div class="bg-white/70 p-6 rounded-lg shadow-sm border border-deledda-sand animate-slide-in">
            <h3 class="text-xl font-serif font-bold mb-4 text-deledda-terracotta">Un esempio di emancipazione</h3>
            <p class="text-deledda-dark/90">
              La sua storia diventa un esempio di emancipazione e di coraggio per tutte le donne della sua epoca. Attraverso le sue opere, Deledda racconta la vita quotidiana della Sardegna, le tradizioni, i costumi e le difficoltà delle donne, offrendo una prospettiva unica e autentica.
            </p>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white/70 p-6 rounded-lg shadow-sm border border-deledda-sand animate-slide-in">
          <div class="flex items-center justify-center mb-4">
            <div class="w-16 h-16 rounded-full bg-deledda-terracotta/20 flex items-center justify-center animate-pulse-slow">
              <span class="text-deledda-terracotta font-serif font-bold text-xl">1871</span>
            </div>
          </div>
          <h4 class="text-lg font-serif font-bold text-center mb-2">Nascita a Nuoro</h4>
          <p class="text-sm text-center text-deledda-dark/90">
            Grazia Deledda nasce in una famiglia benestante, in un'epoca di grandi cambiamenti sociali.
          </p>
        </div>
        
        <div class="bg-white/70 p-6 rounded-lg shadow-sm border border-deledda-sand animate-slide-in">
          <div class="flex items-center justify-center mb-4">
            <div class="w-16 h-16 rounded-full bg-deledda-olive/20 flex items-center justify-center animate-pulse-slow">
              <span class="text-deledda-olive font-serif font-bold text-xl">1900</span>
            </div>
          </div>
          <h4 class="text-lg font-serif font-bold text-center mb-2">Trasferimento a Roma</h4>
          <p class="text-sm text-center text-deledda-dark/90">
            Si trasferisce nella capitale, dove continua la sua carriera letteraria in un contesto più aperto.
          </p>
        </div>
        
        <div class="bg-white/70 p-6 rounded-lg shadow-sm border border-deledda-sand animate-slide-in">
          <div class="flex items-center justify-center mb-4">
            <div class="w-16 h-16 rounded-full bg-deledda-terracotta/20 flex items-center justify-center animate-pulse-slow">
              <span class="text-deledda-terracotta font-serif font-bold text-xl">1926</span>
            </div>
          </div>
          <h4 class="text-lg font-serif font-bold text-center mb-2">Premio Nobel</h4>
          <p class="text-sm text-center text-deledda-dark/90">
            Riceve il Premio Nobel per la Letteratura, diventando la prima donna italiana a ricevere questo riconoscimento.
          </p>
        </div>
      </div>
    </div>
  `;

  return (
    <ContentPage 
      title="Il contesto storico e sociale"
      initialContent={contestoContent}
    />
  );
};

export default ContestoStorico;
