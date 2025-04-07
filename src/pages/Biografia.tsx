import React from 'react';
import ContentPage from '../components/ContentPage';

const Biografia = () => {
  const biografiaContent = `
    <div class="space-y-8">
      <div class="relative overflow-hidden rounded-xl border border-deledda-sand p-8 bg-gradient-to-br from-deledda-cream to-white shadow-md animate-fade-in">
        <div class="absolute top-0 right-0 w-40 h-40 bg-deledda-terracotta/20 rounded-full -translate-y-20 translate-x-20 animate-pulse-slow"></div>
        <div class="absolute bottom-0 left-0 w-28 h-28 bg-deledda-olive/20 rounded-full translate-y-14 -translate-x-14 animate-pulse-slow"></div>
        
        <div class="relative z-10">
          <div class="flex flex-col md:flex-row items-center gap-6 mb-6 animate-slide-in">
            <div class="w-full md:w-1/3">
              <img 
                src="https://www.focus.it/site_stored/imgs/0005/010/graziadeledda.jpg" 
                alt="Grazia Deledda" 
                class="w-full h-auto rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div class="w-full md:w-2/3">
              <h2 class="text-2xl font-serif font-bold mb-4 text-deledda-olive">La vita di Grazia Deledda</h2>
              <p class="text-deledda-dark/90">
                Grazia Deledda nasce a Nuoro nel 1871, in una famiglia benestante. Fin da giovane dimostra una grande passione per la scrittura, nonostante le difficoltà di una società sarda ancora molto tradizionale e patriarcale. La sua formazione è principalmente autodidatta, e questo rende ancora più straordinario il suo successo letterario.
              </p>
            </div>
          </div>
          
          <div class="space-y-4 animate-slide-in">
            <p class="text-deledda-dark/90">
              La sua carriera letteraria inizia presto, con la pubblicazione di racconti su riviste locali. Il suo primo romanzo, "Fior di Sardegna", viene pubblicato nel 1892. La sua opera è profondamente legata alla sua terra natale, la Sardegna, che descrive con grande realismo e sensibilità.
            </p>
            
            <p class="text-deledda-dark/90">
              Nel 1900 si trasferisce a Roma, dove continua a scrivere e dove vive fino alla morte nel 1936. La sua produzione letteraria è vasta e comprende romanzi, racconti e opere teatrali. Nel 1926 riceve il Premio Nobel per la Letteratura, diventando la prima donna italiana a ricevere questo prestigioso riconoscimento.
            </p>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white/70 p-6 rounded-lg shadow-sm border border-deledda-sand animate-slide-in">
          <h3 class="text-xl font-serif font-bold mb-4 text-deledda-olive">La Sardegna nelle sue opere</h3>
          <p class="text-deledda-dark/90">
            La Sardegna è il cuore pulsante delle opere di Grazia Deledda. Attraverso i suoi romanzi, la scrittrice racconta le tradizioni, i costumi e la vita quotidiana della sua terra, con una profondità e un realismo che hanno reso le sue opere uniche nel panorama letterario italiano.
          </p>
        </div>
        
        <div class="bg-white/70 p-6 rounded-lg shadow-sm border border-deledda-sand animate-slide-in">
          <h3 class="text-xl font-serif font-bold mb-4 text-deledda-olive">L'eredità letteraria</h3>
          <p class="text-deledda-dark/90">
            L'opera di Grazia Deledda ha avuto un impatto significativo sulla letteratura italiana e internazionale. La sua capacità di raccontare la Sardegna e le sue tradizioni con tanta profondità e sensibilità ha reso le sue opere un punto di riferimento per la letteratura regionale italiana.
          </p>
        </div>
      </div>
    </div>
  `;

  return (
    <ContentPage 
      title="Biografia di Grazia Deledda"
      initialContent={biografiaContent}
    />
  );
};

export default Biografia;
