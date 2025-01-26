import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Rocket, Shield, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-transparent animate-pulse-scale"
      />

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent animate-glow"
        >
          About Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Code2,
              title: "Next-Gen Development",
              description: "Crafting websites with cutting-edge technologies like React, Next.js, and Web3 integration for future-ready digital experiences.",
            },
            {
              icon: Globe,
              title: "Global Innovation Hub",
              description: "Serving clients worldwide with 24/7 support and localized solutions. Over 500+ successful projects delivered across 30+ countries.",
            },
            {
              icon: Cpu,
              title: "AI-Powered Solutions",
              description: "Leveraging artificial intelligence and machine learning to create smart, adaptive websites that evolve with your business needs.",
            },
            {
              icon: Rocket,
              title: "Lightning Performance",
              description: "Optimized for speed with sub-second load times and perfect Google Lighthouse scores for maximum user engagement.",
            },
            {
              icon: Shield,
              title: "Enterprise Security",
              description: "Bank-grade security protocols and regular penetration testing to keep your digital assets safe and compliant.",
            },
            {
              icon: Zap,
              title: "Rapid Deployment",
              description: "Quick turnaround times with our agile development process. From concept to launch in weeks, not months.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-6 rounded-lg bg-black/50 border border-neon-blue/20 backdrop-blur-sm group-hover:border-neon-blue/50 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg animate-pulse-scale" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <item.icon className="w-12 h-12 text-neon-blue mb-4 animate-glow" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;