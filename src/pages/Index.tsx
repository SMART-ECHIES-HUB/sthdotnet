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
import InterviewPreparation from '@/components/syllabus/interview-prep/interview-prep-js';
import { AzureCloud } from '@/components/cloud/azure-cloud';
import { DotNet } from '@/components/dotnet/dotnet';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* 3D Background Scene */}
      <Scene3D />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      <section className="py-24 px-4 relative overflow-hidden" id="cloud-syllabus">
        {/* <AzureCloud></AzureCloud> */}
      </section>

      <section className="py-24 px-4 relative overflow-hidden" id="cloud-syllabus">
        <DotNet></DotNet>
      </section>

      {/* Courses Section */}
      <CoursesSection />
      <section className="py-24 px-4 relative overflow-hidden" id="syllabus">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Course <span className="text-gradient">Syllabus</span>
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Choose the perfect course to accelerate your career growth.
          </p>
        </motion.div>
        <Accordion title="Java Script">
          <JavaScriptSyllabus />
        </Accordion>

        <Accordion title="React JS">
          <ReactSyllabus />
        </Accordion>

        <Accordion title="Programming Questions">
          <Programs />
        </Accordion>
      </section>

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

      {/* Features Section */}
      <FeaturesSection />

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden" id="testimonials">
        <CTASection />
      </section>

      {/* Contact US */}
      <section id="contact">
        <ContactUS></ContactUS>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
