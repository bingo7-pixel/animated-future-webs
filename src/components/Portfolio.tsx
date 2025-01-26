import { motion } from "framer-motion";

const projects = [
  {
    title: "TechVision Pro",
    description: "AI-powered e-commerce platform with real-time personalization",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "E-commerce",
    technologies: ["React", "Node.js", "AI/ML"],
    completionDate: "2024",
    client: "TechCorp International"
  },
  {
    title: "MetaVerse Hub",
    description: "Virtual reality social platform with Web3 integration",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    category: "Virtual Reality",
    technologies: ["Three.js", "WebXR", "Blockchain"],
    completionDate: "2024",
    client: "MetaConnect Ltd"
  },
  {
    title: "QuantumLeap CMS",
    description: "Next-generation content management system with AI capabilities",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    category: "Enterprise",
    technologies: ["Next.js", "GraphQL", "AWS"],
    completionDate: "2023",
    client: "Quantum Systems"
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-transparent animate-pulse-scale"
      />

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent animate-glow"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-lg animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
              >
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mb-2"
                  >
                    <span className="text-neon-blue text-sm animate-pulse">{project.category}</span>
                  </motion.div>
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-xl font-semibold text-white mb-2"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="text-gray-300 mb-4"
                  >
                    {project.description}
                  </motion.p>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="flex flex-wrap gap-2 mb-4"
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 rounded-full bg-neon-blue/20 text-neon-blue animate-pulse"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-gray-400">Client: {project.client}</span>
                    <span className="text-neon-purple animate-pulse">{project.completionDate}</span>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 border-2 border-neon-blue/50 rounded-lg animate-pulse-border"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;