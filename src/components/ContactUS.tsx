import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CONTACT_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSeRE-iyhMMm5TmUCqb9LRepHelFX88qhSFRtvTD6PMjZoLyMw/viewform";

export default function ContactUs() {
  return (
    <section className="relative overflow-hidden py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card relative p-8 md:p-16"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            {/* Heading */}
            <h2 className="font-display mb-4 text-3xl font-bold md:text-5xl">
              Contact <span className="text-gradient">Us</span>
            </h2>

            <p className="mb-12 text-lg text-white">
              Join hundreds of developers who transformed their careers with our
              training programs. Limited seats available for the next batch.
            </p>

            {/* Contact Rows */}
            <div className="space-y-6">
              <ContactRow
                icon={PhoneCall}
                label="Call us"
                value="74 16 27 27 37"
                href="tel:+917416272737"
                external
              />

              <ContactRow
                icon={MessageCircle}
                label="WhatsApp"
                value="Chat with us on WhatsApp"
                href="https://wa.me/917416272737"
                external
              />

              <ContactRow
                icon={Mail}
                label="Email"
                value="sth.connectus@gmail.com"
                href="mailto:sth.connectus@gmail.com"
                external
              />
            </div>

            {/* CTA */}
            <div className="mt-12">
              <Button
                asChild
                size="lg"
                className="glow-primary group px-8"
              >
                <a href={CONTACT_FORM} target="_blank" rel="noreferrer">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* Reusable contact row */
function ContactRow({ icon: Icon, label, value, href, external }) {
  return (
    <div className="mx-auto flex max-w-md items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>

      <div className="flex-1 text-left">
        <p className="text-sm text-white">{label}</p>
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className="font-medium hover:text-primary transition-colors"
        >
          {value}
        </a>
      </div>
    </div>
  );
}
