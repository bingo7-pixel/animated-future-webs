import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-neon-blue/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent mb-4">
              FutureWeb
            </h3>
            <p className="text-gray-400">
              Creating digital experiences for the future
            </p>
          </div>
          
          {["Services", "Company", "Support"].map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section}</h4>
              <ul className="space-y-2">
                {[1, 2, 3].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                      {section} Link {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-neon-blue/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 FutureWeb. All rights reserved.
            </p>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;