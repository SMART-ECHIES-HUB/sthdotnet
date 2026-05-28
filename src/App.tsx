import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import InterviewPreparation from "@/components/syllabus/interview-prep/interview-prep-js";
import { AzureCloud } from "./components/cloud/azure-cloud";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/interiew-preparation" element={<IntPre />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import Scene3D from '@/components/Scene3D';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CoursesSection from '@/components/CoursesSection';
import FeaturesSection from '@/components/FeaturesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import JavaScriptSyllabus from '@/components/syllabus/JavaScriptSyllabus';
import Accordion from '@/components/syllabus/SyllabusAccordion';
import ReactSyllabus from '@/components/syllabus/react-syllabus/reactSyllabus';
import Programs from '@/components/syllabus/programs/programs';
import { motion } from 'framer-motion';
import ContactUS from '@/components/ContactUS';

const IntPre = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* 3D Background Scene */}
      <Scene3D />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      

      <section className="py-24 px-4 relative overflow-hidden" id="interview-preparation">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Interview <span className="text-gradient">Preparation</span>
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Choose the perfect course to accelerate your React journey & career growth.
          </p>
        </motion.div>
        <Accordion title="Interview Preparation">
          <InterviewPreparation />
        </Accordion>
      </section>


      {/* Footer */}
      <Footer />
    </div>
  );
};
