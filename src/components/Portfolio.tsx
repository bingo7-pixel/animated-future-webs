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
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-2">
                    <span className="text-neon-blue text-sm">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 rounded-full bg-neon-blue/20 text-neon-blue"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Client: {project.client}</span>
                    <span className="text-neon-purple">{project.completionDate}</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 border-2 border-neon-blue/0 group-hover:border-neon-blue/50 transition-colors duration-300 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;