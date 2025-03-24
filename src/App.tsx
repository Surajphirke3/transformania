
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Index from "./pages/Index";
import Restore from "./pages/Restore";
import GenerativeFill from "./pages/GenerativeFill";
import ObjectRemove from "./pages/ObjectRemove";
import ObjectRecolor from "./pages/ObjectRecolor";
import BackgroundRemove from "./pages/BackgroundRemove";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/restore" element={<Restore />} />
              <Route path="/generative-fill" element={<GenerativeFill />} />
              <Route path="/object-remove" element={<ObjectRemove />} />
              <Route path="/object-recolor" element={<ObjectRecolor />} />
              <Route path="/background-remove" element={<BackgroundRemove />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
