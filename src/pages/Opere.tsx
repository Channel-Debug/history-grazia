
import React from 'react';
import ContentPage from '../components/ContentPage';

const Opere = () => {
    // You can now include formatted HTML content here
    const biografiaContent = `
    <h2 class="text-2xl font-serif font-bold mb-4 text-deledda-olive">Le sue opere Principali</h2>
    <p class="mb-4">Tra le opere più importanti di Grazia Deledda troviamo Canne al vento, pubblicato nel 1913, che racconta la storia di una famiglia nobile in decadenza e mette al centro il tema del destino, che domina la vita degli uomini, considerati fragili come delle canne mosse dal vento.
Un’altra opera fondamentale è La madre, scritta nel 1920, che parla del difficile rapporto tra dovere religioso e desiderio personale, rappresentato da un giovane prete che si innamora.
Infine, Elias Portolu, pubblicato nel 1903, racconta una storia d’amore impossibile e dolorosa, vissuta in un contesto di religione, sacrificio e senso di colpa.
</p>
    
    <h2 class="text-2xl font-serif font-bold mb-4 mt-6 text-deledda-olive">Canne al vento (1913)</h2>
    <p class="mb-4">Canne al vento è il suo romanzo più famoso. Racconta la storia di una famiglia nobile decaduta e di come il destino (paragonato al vento) travolge la vita degli uomini, deboli e fragili come le canne al vento</p>
    
    <h2 class="text-2xl font-serif font-bold mb-4 mt-6 text-deledda-olive">La madre (1920)</h2>
    <p class="mb-4">La madre racconta il conflitto interiore di un giovane prete che si innamora, vissuto con senso di colpa e dolore. Anche qui c’è il tema della religione e della sofferenza.

     <h2 class="text-2xl font-serif font-bold mb-4 mt-6 text-deledda-olive">Elias Portolu (1903)</h2>
    <p class="mb-4">Elias Portolu racconta la storia di un giovane che si innamora della moglie del fratello. Si tratta di un amore impossibile che porterà sofferenza e sacrificio.

</p>
  `;
  return (
    <ContentPage 
    title="Le sue opere principali"
    initialContent={biografiaContent}
    />
  );
};

export default Opere;
