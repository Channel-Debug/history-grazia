
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

interface ContentPageProps {
  title: string;
  initialContent?: string;
}

const ContentPage: React.FC<ContentPageProps> = ({ title, initialContent = '' }) => {
  const [content, setContent] = useState(initialContent);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 border-b border-deledda-sand">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-deledda-olive hover:text-deledda-terracotta transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            <span>Torna all'indice</span>
          </button>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-deledda-dark">{title}</h1>
        
        <div className="max-w-4xl mx-auto">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Inserisci il contenuto qui..."
            className="min-h-[400px] p-4 text-lg border-deledda-sand focus:border-deledda-olive"
          />
        </div>
      </main>
      
      <footer className="py-8 bg-deledda-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="font-serif italic mb-2">"La vita è quello che è, ma la letteratura deve essere quello che dovrebbe essere."</p>
          <p className="text-sm">© {new Date().getFullYear()} - Sito dedicato a Grazia Deledda, Premio Nobel per la Letteratura 1926</p>
        </div>
      </footer>
    </div>
  );
};

export default ContentPage;
