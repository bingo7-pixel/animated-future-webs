import { Code, Palette, Globe, Rocket } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites built with the latest technologies",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Reach your target audience effectively",
  },
  {
    icon: Rocket,
    title: "SEO Optimization",
    description: "Improve your search engine rankings",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-lg border border-neon-blue/20 bg-black/50 backdrop-blur-sm hover:border-neon-blue/50 transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              
              <service.icon className="w-12 h-12 text-neon-blue mb-4 animate-glow" />
              
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;