import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollProgress from "@/components/ScrollProgress";
import Index from "./pages/Index";
import About from "./pages/About";
import Facilities from "./pages/Facilities";
import Startups from "./pages/Startups";
import Collaborate from "./pages/Collaborate";
import JoinUs from "./pages/JoinUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollProgress />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/collaborate" element={<Collaborate />} />
          <Route path="/join-us" element={<JoinUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
