import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Biografia from "./pages/Biografia";
import ContestoStorico from "./pages/ContestoStorico";
import PremioNobel from "./pages/PremioNobel";
import Opere from "./pages/Opere";
import CondizioneeFemminile from "./pages/CondizioneeFemminile";
import Agenda2030 from "./pages/Agenda2030";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/biografia" element={<Biografia />} />
          <Route path="/contesto-storico" element={<ContestoStorico />} />
          <Route path="/premio-nobel" element={<PremioNobel />} />
          <Route path="/opere" element={<Opere />} />
          <Route path="/condizione-femminile" element={<CondizioneeFemminile />} />
          <Route path="/agenda-2030" element={<Agenda2030 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
