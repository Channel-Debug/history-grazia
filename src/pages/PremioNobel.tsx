import React from 'react';
import ContentPage from '../components/ContentPage';

const PremioNobel = () => {
  const premioNobelContent = `
    <div class="space-y-8">
      <div class="relative overflow-hidden rounded-xl border border-deledda-sand p-8 bg-gradient-to-br from-deledda-cream to-white shadow-md animate-fade-in">
        <div class="absolute top-0 right-0 w-40 h-40 bg-deledda-terracotta/20 rounded-full -translate-y-20 translate-x-20 animate-pulse-slow"></div>
        <div class="absolute bottom-0 left-0 w-28 h-28 bg-deledda-olive/20 rounded-full translate-y-14 -translate-x-14 animate-pulse-slow"></div>
        
        <h2 class="text-2xl font-serif font-bold mb-4 text-deledda-olive relative z-10 animate-slide-in">Il Nobel del 1926</h2>
        <p class="mb-4 relative z-10 animate-slide-in">
          Nel 1926, l'Accademia di Svezia assegnò a Grazia Deledda il Premio Nobel per la Letteratura "per la sua potenza di scrittrice, sostenuta da un alto ideale, che ritrae in forme plastiche la vita quale è nella sua appartata isola natale e che con profondità e con calore tratta problemi di generale interesse umano".
        </p>
        
        <div class="flex items-center justify-center mt-6 relative z-10 animate-slide-in">
          <div class="w-24 h-24 rounded-full bg-deledda-terracotta/20 flex items-center justify-center animate-pulse-slow">
            <div class="w-16 h-16 rounded-full bg-deledda-terracotta flex items-center justify-center text-white font-serif font-bold text-xl">
              1926
            </div>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white/70 p-6 rounded-lg shadow-sm border border-deledda-sand animate-slide-in">
          <h2 class="text-2xl font-serif font-bold mb-4 text-deledda-olive">La cerimonia</h2>
          <p class="mb-4">
            A causa di problemi di salute, Grazia Deledda non poté partecipare alla cerimonia di premiazione che si tenne a Stoccolma nel dicembre del 1926. Fu suo marito, Palmiro Madesani, a ritirare il premio a suo nome.
          </p>
          <div class="mt-4 flex items-center justify-center">
            <div class="w-32 h-32 rounded-lg bg-deledda-sand/30 flex items-center justify-center animate-pulse-slow">
              <span class="text-deledda-terracotta font-serif italic">Stoccolma</span>
            </div>
          </div>
        </div>
        
        <div class="bg-white/70 p-6 rounded-lg shadow-sm border border-deledda-sand animate-slide-in">
          <h2 class="text-2xl font-serif font-bold mb-4 text-deledda-olive">Impatto e significato</h2>
          <p class="mb-4">
            Il riconoscimento del Nobel a Deledda fu un momento significativo non solo per la sua carriera personale, ma anche per la letteratura italiana e per la rappresentazione delle donne nel mondo letterario. Fu la seconda donna in assoluto (dopo Selma Lagerlöf) e la prima italiana a ricevere questo prestigioso premio.
          </p>
          <div class="mt-4 flex items-center justify-center">
            <div class="w-32 h-32 rounded-lg bg-deledda-olive/30 flex items-center justify-center animate-pulse-slow">
              <span class="text-deledda-dark font-serif italic">Prima italiana</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return (
    <ContentPage 
      title="Il Premio Nobel"
      initialContent={premioNobelContent}
    />
  );
};

export default PremioNobel;
