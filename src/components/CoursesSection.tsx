import { motion } from 'framer-motion';
import { Code2, Zap, Users, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const courses = [
  {
    title: 'Azure Cloud',
    description: 'Master Azure Cloud from scratch with hands-on projects and real-world applications.',
    icon: Code2,
    duration: '8 Weeks',
    level: 'Beginner to Advanced',
    features: [
      'Azure Native Development, VMs, Containers',
      'Cloud Infrastructure, Data Layer, Scalling',
      'Deployment - DevOps CI/CD, GitHub Actions',
      'RBAC, APIM, API Gateway, Storages & Life Cycle',
      'Event Driven Arch. (Event Grid, Azure Bus)',
    ],
    accent: 'primary',
    popular: true,
  },
  {
    title: 'React JS Fundamentals',
    description: 'Master React from scratch with hands-on projects and real-world applications.',
    icon: Code2,
    duration: '8 Weeks',
    level: 'Beginner to Advanced',
    features: [
      'Component Architecture',
      'Hooks & State Management',
      'React Router',
      'API Integration',
      'Performance Optimization',
    ],
    accent: 'primary',
    popular: false,
  },
  {
    title: 'Interview Preparation Batch',
    description: 'Comprehensive interview prep with mock interviews, DSA, and system design.',
    icon: Zap,
    duration: '6 Weeks',
    level: 'All Levels',
    features: [
      'React Interview Questions',
      'JavaScript Deep Dive',
      'DSA for Frontend',
      'System Design Basics',
      'Mock Interviews',
    ],
    accent: 'accent',
    popular: false,
  },
  {
    title: 'Advanced React Patterns',
    description: 'Learn advanced patterns, testing, and enterprise-level React development.',
    icon: Users,
    duration: '6 Weeks',
    level: 'Advanced',
    features: [
      'Design Patterns',
      'Testing with Jest',
      'State Management (Redux/Zustand)',
      'TypeScript with React',
      'CI/CD Integration',
    ],
    accent: 'primary',
    popular: false,
  },
];

export default function CoursesSection() {
  return (
    <section className="py-24 px-4 relative" id="courses">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Training Programs</span>
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Choose the perfect course to accelerate your career growth.
          </p>
        </motion.div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-card p-8 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 ${
                course.popular ? 'border-gradient' : ''
              }`}
            >
              {course.popular && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-accent/20 border border-accent/30 rounded-full">
                  <span className="text-xs font-semibold text-accent">Most Popular</span>
                </div>
              )}

              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  course.accent === 'accent' ? 'bg-accent/20' : 'bg-primary/20'
                }`}
              >
                <course.icon
                  className={`w-7 h-7 ${
                    course.accent === 'accent' ? 'text-accent' : 'text-primary'
                  }`}
                />
              </div>

              <h3 className="font-display text-2xl font-bold mb-3">{course.title}</h3>
              <p className="text-white mb-6">{course.description}</p>

              <div className="flex items-center gap-4 mb-6 text-sm text-white">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </div>
                <div>{course.level}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <CheckCircle2
                      className={`w-4 h-4 ${
                        course.accent === 'accent' ? 'text-accent' : 'text-primary'
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full group ${
                  course.accent === 'accent'
                    ? 'bg-accent hover:bg-accent/90'
                    : ''
                }`}
              >
                
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeRE-iyhMMm5TmUCqb9LRepHelFX88qhSFRtvTD6PMjZoLyMw/viewform?usp=publish-editor" style={{width:'inherit'}}>Enroll Now</a>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  course.accent === 'accent'
                    ? 'bg-gradient-to-t from-accent/10 to-transparent'
                    : 'bg-gradient-to-t from-primary/10 to-transparent'
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
