import { motion } from "framer-motion";

const posts = [
  {
    title: "The Future of Web Design",
    excerpt: "Exploring upcoming trends in digital experiences",
    image: "https://source.unsplash.com/random/800x600?cyberpunk",
    date: "2024-03-15",
  },
  {
    title: "AI in Web Development",
    excerpt: "How artificial intelligence is shaping the web",
    image: "https://source.unsplash.com/random/800x600?technology",
    date: "2024-03-10",
  },
  {
    title: "Gaming-Inspired Interfaces",
    excerpt: "Creating immersive web experiences",
    image: "https://source.unsplash.com/random/800x600?gaming",
    date: "2024-03-05",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent"
        >
          Latest Insights
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-black/50 backdrop-blur-sm border border-neon-blue/20 rounded-b-lg">
                <time className="text-neon-blue text-sm">{post.date}</time>
                <h3 className="text-xl font-semibold mt-2 mb-2 text-white group-hover:text-neon-blue transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-400">{post.excerpt}</p>
              </div>
              <div className="absolute inset-0 border-2 border-neon-blue/0 group-hover:border-neon-blue/50 transition-colors duration-300 rounded-lg" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;