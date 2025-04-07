
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface IndexItem {
  id: number;
  title: string;
  description: string;
  path: string;
  isSpecial?: boolean;
}

const indexItems: IndexItem[] = [
  {
    id: 1,
    title: "Biografia di Grazia Deledda",
    description: "La vita e il percorso della scrittrice sarda, dalle origini a Nuoro fino al successo internazionale.",
    path: "/biografia"
  },
  {
    id: 2,
    title: "Il contesto storico e sociale",
    description: "La Sardegna tra '800 e '900, le influenze culturali e sociali che hanno plasmato la poetica della Deledda.",
    path: "/contesto-storico"
  },
  {
    id: 3,
    title: "Il Premio Nobel",
    description: "Il percorso verso il riconoscimento internazionale e l'assegnazione del Premio Nobel per la Letteratura nel 1926.",
    path: "/premio-nobel"
  },
  {
    id: 4,
    title: "Le sue opere principali",
    description: "Analisi dei romanzi e delle opere che hanno segnato la carriera letteraria di Grazia Deledda.",
    path: "/opere"
  },
  {
    id: 5,
    title: "La condizione femminile",
    description: "Il ruolo delle donne nell'opera della Deledda e la sua visione sulla condizione femminile della sua epoca.",
    path: "/condizione-femminile"
  },
  {
    id: 6,
    title: "Agenda 2030 e il contributo di Grazia Deledda alla parità di genere",
    description: "Come l'eredità di Grazia Deledda si collega all'Obiettivo 5 dell'Agenda 2030 sulla parità di genere e l'empowerment femminile.",
    path: "/agenda-2030",
    isSpecial: true
  }
];

const IndexSection = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-deledda-dark">
        Indice dei Contenuti
      </h2>
      
      <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
        {indexItems.map((item) => (
          <Link 
            to={item.path}
            key={item.id}
            className={`
              relative p-6 rounded-lg transition-all duration-300 
              group hover:shadow-md cursor-pointer 
              ${item.isSpecial 
                ? 'border-2 border-deledda-terracotta bg-gradient-to-r from-deledda-sand/30 to-deledda-cream' 
                : 'border border-deledda-sand hover:border-deledda-olive bg-white'}
            `}
          >
            <div className="flex items-start gap-4">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center shrink-0
                ${item.isSpecial 
                  ? 'bg-deledda-terracotta text-white' 
                  : 'border border-deledda-olive text-deledda-olive group-hover:bg-deledda-olive group-hover:text-white'}
                transition-colors duration-300
              `}>
                <span className="font-serif font-bold">{item.id}</span>
              </div>
              
              <div className="flex-1">
                <h3 className={`
                  text-xl font-serif font-semibold mb-2
                  ${item.isSpecial ? 'text-deledda-terracotta' : 'text-deledda-dark'}
                `}>
                  {item.title}
                </h3>
                <p className="text-deledda-dark/80">
                  {item.description}
                </p>
              </div>
              
              <ChevronRight className={`
                w-5 h-5 mt-1 transition-transform duration-300
                ${item.isSpecial ? 'text-deledda-terracotta' : 'text-deledda-olive'}
                group-hover:translate-x-1
              `} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default IndexSection;
