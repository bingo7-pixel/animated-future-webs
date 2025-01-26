import { motion } from "framer-motion";
import { Code2, Cpu, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent"
        >
          About Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Code2,
              title: "Digital Innovation",
              description: "Pushing the boundaries of web development with cutting-edge technologies",
            },
            {
              icon: Globe,
              title: "Global Reach",
              description: "Creating digital experiences that resonate worldwide",
            },
            {
              icon: Cpu,
              title: "Future Tech",
              description: "Embracing the latest trends in digital transformation",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="p-6 rounded-lg bg-black/50 border border-neon-blue/20 backdrop-blur-sm group-hover:border-neon-blue/50 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                <item.icon className="w-12 h-12 text-neon-blue mb-4 animate-glow" />
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