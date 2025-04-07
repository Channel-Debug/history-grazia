
import React from 'react';
import ContentPage from '../components/ContentPage';

const PremioNobel = () => {
  const premioNobelContent = `
    <h2 class="text-2xl font-serif font-bold mb-4 text-deledda-olive">Il Nobel del 1926</h2>
    <p class="mb-4">Nel 1926, l'Accademia di Svezia assegnò a Grazia Deledda il Premio Nobel per la Letteratura "per la sua potenza di scrittrice, sostenuta da un alto ideale, che ritrae in forme plastiche la vita quale è nella sua appartata isola natale e che con profondità e con calore tratta problemi di generale interesse umano".</p>
    
    <h2 class="text-2xl font-serif font-bold mb-4 mt-6 text-deledda-olive">La cerimonia</h2>
    <p class="mb-4">A causa di problemi di salute, Grazia Deledda non poté partecipare alla cerimonia di premiazione che si tenne a Stoccolma nel dicembre del 1926. Fu suo marito, Palmiro Madesani, a ritirare il premio a suo nome.</p>
    
    <h2 class="text-2xl font-serif font-bold mb-4 mt-6 text-deledda-olive">Impatto e significato</h2>
    <p class="mb-4">Il riconoscimento del Nobel a Deledda fu un momento significativo non solo per la sua carriera personale, ma anche per la letteratura italiana e per la rappresentazione delle donne nel mondo letterario. Fu la seconda donna in assoluto (dopo Selma Lagerlöf) e la prima italiana a ricevere questo prestigioso premio.</p>
  `;

  return (
    <ContentPage 
      title="Il Premio Nobel"
      initialContent={premioNobelContent}
    />
  );
};

export default PremioNobel;
