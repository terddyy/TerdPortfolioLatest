import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { useTheme } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Certifications from "./pages/Certifications";
import BlogPost from "./pages/BlogPost";
import { motion } from "framer-motion";

const queryClient = new QueryClient();

const App = () => {
  const { theme } = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>
          <motion.div
            key={theme} // Key prop to remount component and re-trigger animation on theme change
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="font-sans"
          >
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </motion.div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
