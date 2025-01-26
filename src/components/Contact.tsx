import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {[
              { icon: Mail, text: "info@futureweb.com" },
              { icon: Phone, text: "+1 (555) 123-4567" },
              { icon: MessageSquare, text: "Live Chat Available" },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-neon-blue" />
                </div>
                <span className="text-gray-300">{item.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-black/50 border border-neon-blue/20 rounded-lg focus:border-neon-blue/50 transition-colors duration-300 outline-none text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-black/50 border border-neon-blue/20 rounded-lg focus:border-neon-blue/50 transition-colors duration-300 outline-none text-white"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-black/50 border border-neon-blue/20 rounded-lg focus:border-neon-blue/50 transition-colors duration-300 outline-none text-white resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold py-3 px-8 rounded-lg hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] transition-shadow duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;