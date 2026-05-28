import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#courses', label: 'Courses' },
  { href: '#cloud-syllabus', label: 'Syllabus' },
  { href: '#interview-preparation', label: 'Interview Preparation' },
  { href: '#features', label: 'Features' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-lg">
                <BookOpen></BookOpen>
              </span>
            </div>
            <span className="font-display font-bold text-xl hidden sm:block">
              Smart<span className="text-primary"> Techies </span>Hub
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="glow-primary">
              
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeRE-iyhMMm5TmUCqb9LRepHelFX88qhSFRtvTD6PMjZoLyMw/viewform?usp=publish-editor">Enroll Now</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-foreground transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="glow-primary w-full mt-2">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeRE-iyhMMm5TmUCqb9LRepHelFX88qhSFRtvTD6PMjZoLyMw/viewform?usp=publish-editor">Enroll Now</a></Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
