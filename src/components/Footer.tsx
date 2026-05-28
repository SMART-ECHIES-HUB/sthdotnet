import { Github, Twitter, Linkedin, Mail, BookOpen } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-lg">
                  <BookOpen></BookOpen>
                </span>
              </div>
              <span className="font-display font-bold text-xl">
                Smart<span className="text-primary"> Techies </span>Hub
              </span>
            </div>
            <p className="text-white text-sm max-w-sm mb-4">
              Empowering developers with world-class React training and interview preparation. 
              Join our community and transform your career.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Courses</h4>
            <ul className="space-y-2 text-sm text-white">
              <li><a href="#" className="hover:text-foreground transition-colors">React Fundamentals</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Interview Prep</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Advanced React</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">TypeScript</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-sm text-white">
          <p>© 2026 Smart Techies Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
