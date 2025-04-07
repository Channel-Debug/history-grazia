import React from 'react';
import ContentPage from '../components/ContentPage';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';

const Agenda2030 = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <ContentPage 
      title="Agenda 2030 e il contributo di Grazia Deledda alla parità di genere"
      initialContent={`
        <div class="mb-10 space-y-6">
          <div class="relative overflow-hidden rounded-xl border border-deledda-sand p-8 bg-gradient-to-br from-deledda-cream to-white shadow-md animate-fade-in">
            <div class="absolute top-0 right-0 w-40 h-40 bg-deledda-terracotta/20 rounded-full -translate-y-20 translate-x-20 animate-pulse-slow"></div>
            <div class="absolute bottom-0 left-0 w-28 h-28 bg-deledda-olive/20 rounded-full translate-y-14 -translate-x-14 animate-pulse-slow"></div>
            
            <h2 class="text-2xl font-serif font-bold text-deledda-dark relative z-10 mb-6 animate-slide-in">Cos'è l'Agenda 2030?</h2>
            
            <div class="prose prose-lg relative z-10 animate-slide-in">
              <p class="text-deledda-dark/90">
                L'<span class="font-semibold text-deledda-terracotta">Agenda 2030</span> è un programma d'azione per le persone, 
                il pianeta e la prosperità sottoscritto nel settembre 2015 dai governi dei 193 Paesi membri dell'ONU. 
                Comprende <span class="font-semibold">17 Obiettivi</span> per lo Sviluppo Sostenibile da raggiungere entro il 2030.
              </p>
            </div>
            
            <div class="flex flex-wrap gap-3 mt-8 justify-center relative z-10 animate-slide-in">
              ${Array.from({ length: 17 }).map((_, i) => `
                <div 
                  class="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold shadow-sm transition-all duration-300 hover:scale-110
                    ${i === 4 ? 'bg-deledda-terracotta ring-2 ring-offset-2 ring-deledda-terracotta/50 scale-110 animate-bounce-slow' : 'bg-deledda-olive/80'}"
                >
                  ${i + 1}
                </div>
              `).join('')}
            </div>
          </div>
          
          <div class="relative">
            <div class="border-2 border-deledda-terracotta overflow-hidden animate-slide-in">
              <div class="bg-deledda-terracotta p-4 text-white flex items-center justify-between">
                <h3 class="text-xl font-serif font-semibold">Obiettivo 5: Parità di genere</h3>
                <button class="rounded-full w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/30 transition-colors" onclick="toggleContent()">
                  <svg class="h-5 w-5 transition-transform duration-300" id="chevron-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
              
              <div class="p-0">
                <div class="p-6 bg-gradient-to-br from-white to-deledda-cream/50" id="content-section">
                  <div class="space-y-4">
                    <p class="text-deledda-dark/90">
                      L'<strong>Obiettivo 5</strong> dell'Agenda 2030 mira a raggiungere l'uguaglianza di genere e l'empowerment di tutte le donne e le ragazze.
                      Questo obiettivo riconosce che pari diritti e opportunità sono fondamentali non solo come diritto umano di base, ma anche come elemento essenziale per un mondo pacifico, prospero e sostenibile.
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div class="bg-white/70 p-4 rounded-lg shadow-sm border border-deledda-sand animate-slide-in">
                        <h4 class="font-serif font-semibold text-deledda-olive mb-2">Target principali:</h4>
                        <ul class="list-disc list-inside space-y-1 text-sm">
                          <li>Porre fine a ogni forma di discriminazione verso le donne</li>
                          <li>Eliminare ogni forma di violenza contro le donne</li>
                          <li>Garantire piena partecipazione femminile alla vita politica ed economica</li>
                          <li>Valorizzare il lavoro di cura non retribuito</li>
                          <li>Garantire accesso universale alla salute sessuale e riproduttiva</li>
                        </ul>
                      </div>
                      <div class="bg-white/70 p-4 rounded-lg shadow-sm border border-deledda-sand flex items-center animate-slide-in">
                        <div class="relative w-full h-32">
                          <div class="absolute left-0 h-full w-3/5 bg-deledda-terracotta/80 rounded-l-lg flex items-center justify-center text-white font-bold animate-pulse-slow">
                            60%
                          </div>
                          <div class="absolute right-0 h-full w-2/5 bg-deledda-olive/80 rounded-r-lg flex items-center justify-center text-white font-bold animate-pulse-slow">
                            40%
                          </div>
                          <div class="absolute inset-0 flex items-center justify-center font-serif text-xs text-white font-semibold">
                            Divario di genere<br />a livello globale
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-8 p-6 bg-white rounded-lg shadow-sm border border-deledda-sand animate-slide-in">
            <div class="flex items-center gap-3 mb-4">
              <div class="h-8 w-2 bg-deledda-terracotta"></div>
              <h3 class="text-xl font-serif font-semibold text-deledda-dark">Grazia Deledda e la parità di genere</h3>
            </div>
            
            <p class="text-deledda-dark/90">
              Grazia Deledda può essere collegata all'Obiettivo 5 dell'Agenda 2030, che riguarda la parità di genere. La sua vita e la sua opera hanno anticipato i valori moderni di uguaglianza tra uomini e donne. Con il suo esempio ha dimostrato che le donne devono avere gli stessi diritti e le stesse possibilità degli uomini, sia nella cultura che nella società. Ancora oggi, la sua storia ci insegna l'importanza di combattere gli stereotipi di genere e di valorizzare il talento e la libertà delle donne, in qualsiasi parte del mondo.
            </p>
          </div>
        </div>
      `}
    />
  );
};

export default Agenda2030;
