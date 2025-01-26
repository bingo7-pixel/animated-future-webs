const projects = [
  {
    title: "E-commerce Platform",
    description: "Modern online shopping experience",
    image: "https://source.unsplash.com/random/800x600?tech",
  },
  {
    title: "Social Network",
    description: "Connect with your community",
    image: "https://source.unsplash.com/random/800x600?social",
  },
  {
    title: "Mobile App",
    description: "Cross-platform mobile solution",
    image: "https://source.unsplash.com/random/800x600?app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
          Our Portfolio
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
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
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