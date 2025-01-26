import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, MapPin, Clock, Globe } from "lucide-react";

const contactInfo = {
  email: "hello@futureweb.com",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, Silicon Valley, CA 94025",
  hours: "Mon-Fri: 9:00 AM - 6:00 PM PST",
  social: {
    twitter: "@futureweb",
    linkedin: "futureweb-company",
    github: "futureweb-dev"
  }
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 via-transparent to-transparent animate-pulse-scale"
      />

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent animate-glow"
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
              { icon: Mail, text: contactInfo.email, label: "Email Us" },
              { icon: Phone, text: contactInfo.phone, label: "Call Us" },
              { icon: MapPin, text: contactInfo.address, label: "Visit Us" },
              { icon: Clock, text: contactInfo.hours, label: "Business Hours" },
              { icon: Globe, text: "Global Service Available", label: "Coverage" },
              { icon: MessageSquare, text: "24/7 Live Chat Support", label: "Chat" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center"
                >
                  <item.icon className="w-6 h-6 text-neon-blue animate-glow" />
                </motion.div>
                <div>
                  <h3 className="text-neon-purple font-semibold animate-pulse">{item.label}</h3>
                  <span className="text-gray-300">{item.text}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-black/50 border border-neon-blue/20 rounded-lg focus:border-neon-blue/50 transition-colors duration-300 outline-none text-white animate-pulse-border"
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-black/50 border border-neon-blue/20 rounded-lg focus:border-neon-blue/50 transition-colors duration-300 outline-none text-white animate-pulse-border"
              />
              <motion.select
                whileFocus={{ scale: 1.02 }}
                className="w-full px-4 py-3 bg-black/50 border border-neon-blue/20 rounded-lg focus:border-neon-blue/50 transition-colors duration-300 outline-none text-white animate-pulse-border"
              >
                <option value="">Select Service</option>
                <option value="web-development">Web Development</option>
                <option value="ui-design">UI/UX Design</option>
                <option value="ecommerce">E-commerce Solutions</option>
                <option value="maintenance">Maintenance & Support</option>
              </motion.select>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-black/50 border border-neon-blue/20 rounded-lg focus:border-neon-blue/50 transition-colors duration-300 outline-none text-white resize-none animate-pulse-border"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold py-3 px-8 rounded-lg hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] transition-shadow duration-300 animate-pulse"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;