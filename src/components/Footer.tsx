
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-deledda-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <p className="font-serif italic mb-2">"Da una muraglia nera una finestra azzurra vuota come l’occhio stesso del passato guarda il panorama melanconico roseo di sole nascente."</p>
        <p className="text-sm">© {new Date().getFullYear()} - Sito dedicato a Grazia Deledda, Premio Nobel per la Letteratura 1926</p>
      </div>
    </footer>
  );
};

export default Footer;
