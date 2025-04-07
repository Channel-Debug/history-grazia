
import React from 'react';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-deledda-cream to-deledda-sand">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="w-full md:w-1/3 flex justify-center order-2 md:order-1">
            <div className="rounded-lg overflow-hidden border-4 border-deledda-sand shadow-lg transform rotate-2 transition-transform hover:rotate-0 duration-300">
              <img 
                src="https://content.storicang.it/medio/2020/03/05/se-io-conto-qualcosa-nella-letteratura-italiana-lo-devo-tutto-alla-mia-isola-santa-scrisse-grazia-deledda_c1b126ba_800x1032.jpg" 
                alt="Grazia Deledda" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left order-1 md:order-2">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-deledda-dark mb-4">
              Grazia Deledda
            </h1>
            <div className="inline-block px-4 py-2 bg-deledda-terracotta text-white font-serif italic mb-6 transform -rotate-1">
              Premio Nobel per la Letteratura 1926
            </div>
            <p className="text-xl text-deledda-dark max-w-2xl mx-auto md:mx-0">
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
