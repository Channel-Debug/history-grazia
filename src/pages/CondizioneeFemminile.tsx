import React from 'react';
import ContentPage from '../components/ContentPage';

const CondizioneeFemminile = () => {
  const condizioneContent = `
    <div class="space-y-8">
      <div class="relative overflow-hidden rounded-xl border border-deledda-sand p-8 bg-gradient-to-br from-deledda-cream to-white shadow-md animate-fade-in">
        <div class="absolute top-0 right-0 w-40 h-40 bg-deledda-terracotta/20 rounded-full -translate-y-20 translate-x-20 animate-pulse-slow"></div>
        <div class="absolute bottom-0 left-0 w-28 h-28 bg-deledda-olive/20 rounded-full translate-y-14 -translate-x-14 animate-pulse-slow"></div>
        
        <div class="relative z-10">
          <h2 class="text-2xl font-serif font-bold mb-6 text-deledda-olive animate-slide-in">La condizione femminile in Italia</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="bg-white/70 p-6 rounded-lg shadow-sm border border-deledda-sand animate-slide-in">
              <h3 class="text-xl font-serif font-bold mb-4 text-deledda-terracotta">Diritti e limitazioni</h3>
              <p class="text-deledda-dark/90">
                Nel periodo in cui visse Grazia Deledda, le donne italiane erano considerate legalmente incapaci e sottoposte all'autorità del padre o del marito. Non potevano votare, non potevano accedere a molte professioni e il loro ruolo era confinato alla sfera domestica. L'istruzione superiore era un privilegio riservato a poche.
              </p>
            </div>
            
            <div class="bg-white/70 p-6 rounded-lg shadow-sm border border-deledda-sand animate-slide-in">
              <h3 class="text-xl font-serif font-bold mb-4 text-deledda-terracotta">Il movimento femminista</h3>
              <p class="text-deledda-dark/90">
                Proprio in questi anni cominciavano a nascere i primi movimenti femministi in Italia, che lottavano per il diritto all'istruzione, al lavoro e al voto. Grazia Deledda, pur non essendo un'attivista, con la sua vita e le sue opere contribuì a dimostrare che le donne potevano eccellere anche in campi tradizionalmente maschili.
              </p>
            </div>
          </div>
          
          <div class="bg-white/70 p-6 rounded-lg shadow-sm border border-deledda-sand animate-slide-in">
            <h3 class="text-xl font-serif font-bold mb-4 text-deledda-terracotta">L'eredità di Grazia Deledda</h3>
            <p class="text-deledda-dark/90">
              Il successo di Grazia Deledda come scrittrice e il Premio Nobel ricevuto nel 1926 rappresentarono un momento cruciale per l'emancipazione femminile in Italia. La sua figura dimostrò che le donne potevano raggiungere l'eccellenza anche in un contesto culturale dominato dagli uomini, ispirando generazioni di donne a perseguire i propri sogni e ambizioni.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  return (
    <ContentPage 
      title="La condizione femminile"
      initialContent={condizioneContent}
    />
  );
};

export default CondizioneeFemminile;
