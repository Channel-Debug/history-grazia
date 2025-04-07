
import React from 'react';
import ContentPage from '../components/ContentPage';

const Biografia = () => {
  // You can now include formatted HTML content here
  const biografiaContent = `
    <h2 class="text-2xl font-serif font-bold mb-4 text-deledda-olive">Primi anni</h2>
    <p class="mb-4">Grazia Deledda nacque a Nuoro il 27 settembre 1871, in una famiglia benestante. Figlia di Giovanni Antonio Deledda e Francesca Cambosu, ebbe un'educazione limitata, come era comune per le ragazze dell'epoca in Sardegna.</p>
    
    <h2 class="text-2xl font-serif font-bold mb-4 mt-6 text-deledda-olive">Carriera letteraria</h2>
    <p class="mb-4">Iniziò a scrivere molto giovane, pubblicando il suo primo racconto a soli 15 anni. Le sue opere erano fortemente influenzate dalla vita rurale della Sardegna, con descrizioni dettagliate dei paesaggi, tradizioni e costumi locali.</p>
    
    <h2 class="text-2xl font-serif font-bold mb-4 mt-6 text-deledda-olive">Riconoscimenti e Premio Nobel</h2>
    <p class="mb-4">Nel 1926, Grazia Deledda fu insignita del Premio Nobel per la Letteratura, diventando la seconda donna a ricevere questo prestigioso riconoscimento e la prima italiana.</p>
  `;

  return (
    <ContentPage 
      title="Biografia di Grazia Deledda"
      initialContent={biografiaContent}
    />
  );
};

export default Biografia;
