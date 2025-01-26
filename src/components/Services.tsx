import { Code, Palette, Globe, Rocket, Shield, Cpu, Zap, Cloud } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Web Development",
    description: "Bespoke websites built with React, Next.js, and cutting-edge technologies. Performance-optimized and fully responsive.",
    price: "Starting at $5,000",
    features: ["Custom Design", "SEO Optimization", "Mobile-First Approach"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Immersive user interfaces with motion design and interactive elements. Focused on user engagement and conversion.",
    price: "Starting at $3,000",
    features: ["User Research", "Wireframing", "Prototyping"]
  },
  {
    icon: Globe,
    title: "E-commerce Solutions",
    description: "Full-featured online stores with secure payment processing and inventory management. Built for scale.",
    price: "Starting at $7,000",
    features: ["Payment Integration", "Inventory System", "Analytics Dashboard"]
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Speed up your existing website with our advanced optimization techniques. Boost your Google rankings.",
    price: "Starting at $2,000",
    features: ["Load Time Analysis", "Code Optimization", "CDN Setup"]
  },
  {
    icon: Shield,
    title: "Security Services",
    description: "Protect your digital assets with enterprise-grade security measures and regular security audits.",
    price: "Starting at $1,500",
    features: ["SSL Setup", "Security Audit", "DDoS Protection"]
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Enhance your website with artificial intelligence and machine learning capabilities.",
    price: "Starting at $4,000",
    features: ["Chatbots", "Predictive Analytics", "Smart Search"]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure setup and management for your web applications.",
    price: "Starting at $3,500",
    features: ["AWS/Azure Setup", "Auto-scaling", "Backup Systems"]
  },
  {
    icon: Zap,
    title: "Maintenance & Support",
    description: "24/7 website maintenance and technical support to keep your site running smoothly.",
    price: "Starting at $500/month",
    features: ["Regular Updates", "24/7 Support", "Performance Monitoring"]
  }
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
              <p className="text-gray-400 mb-4">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2"></span>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-neon-blue/20">
                <span className="text-neon-purple font-semibold">{service.price}</span>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;