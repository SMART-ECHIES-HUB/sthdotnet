import { motion } from 'framer-motion';
import { 
  Video, 
  MessageSquare, 
  Award, 
  Briefcase, 
  BookOpen, 
  Headphones 
} from 'lucide-react';

const features = [
  {
    icon: Video,
    title: 'Live Sessions',
    description: 'Interactive live classes with real-time doubt solving and hands-on coding.',
  },
  {
    icon: MessageSquare,
    title: '1-on-1 Mentorship',
    description: 'Personal guidance from industry experts to accelerate your learning journey.',
  },
  {
    icon: BookOpen,
    title: 'Project-Based Learning',
    description: 'Build real-world projects that you can showcase in your portfolio.',
  },
  {
    icon: Award,
    title: 'Certification',
    description: 'Earn industry-recognized certificates upon successful completion.',
  },
  {
    icon: Briefcase,
    title: 'Placement Support',
    description: 'Resume building, interview prep, and direct company referrals.',
  },
  {
    icon: Headphones,
    title: 'Lifetime Access',
    description: 'Access to recordings, resources, and community support forever.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="features">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">Our Training?</span>
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            We provide everything you need to become a industry-ready developer.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 group hover:bg-card/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
