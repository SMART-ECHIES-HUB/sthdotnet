import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function CTASection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-16 relative overflow-hidden"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full mb-6"
            >
              <Calendar className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">
                Next Batch Starts: April 8, 2026
              </span>
            </motion.div>

            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Ready to Start Your{' '}
              <span className="text-gradient">Journey?</span>
            </h2>
            <p className="text-white text-lg mb-8">
              Join hundreds of developers who have transformed their careers with our training programs. 
              Limited seats available for the upcoming batch!
            </p>

            {/* Email Signup */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 bg-background/50 border-border/50 h-12"
                />
              </div>
              <Button size="lg" className="glow-primary h-12 px-6 group">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeRE-iyhMMm5TmUCqb9LRepHelFX88qhSFRtvTD6PMjZoLyMw/viewform?usp=publish-editor">Get Started</a>
                
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <p className="text-sm text-white">
              Join 500+ students already enrolled. No spam, unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
