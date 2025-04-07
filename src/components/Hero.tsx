import React from 'react';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-deledda-cream to-deledda-sand">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          <div className="w-full md:w-1/3 flex justify-center mb-8 animate-slide-in">
            <div className="rounded-lg overflow-hidden border-4 border-deledda-sand shadow-lg transform rotate-2 transition-all duration-300 hover:rotate-0 hover:scale-105">
              <img 
                src="https://content.storicang.it/medio/2020/03/05/se-io-conto-qualcosa-nella-letteratura-italiana-lo-devo-tutto-alla-mia-isola-santa-scrisse-grazia-deledda_c1b126ba_800x1032.jpg" 
                alt="Grazia Deledda" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-deledda-dark mb-4 animate-fade-in">
              Grazia Deledda
            </h1>
            <div className="inline-block px-4 py-2 bg-deledda-terracotta text-white font-serif italic mb-6 transform -rotate-1 animate-slide-in">
              Premio Nobel per la Letteratura 1926
            </div>
            <p className="text-xl text-deledda-dark animate-slide-in">
              Scrittrice italiana che ha saputo raccontare la Sardegna e le sue tradizioni con una profondità e una sensibilità uniche, 
              diventando la seconda donna al mondo e la prima italiana a ricevere il Premio Nobel per la Letteratura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
