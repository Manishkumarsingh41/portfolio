import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, MapPin, Phone, ChevronDown } from 'lucide-react';

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="min-h-screen pt-20 flex items-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-64 h-64 mx-auto md:w-96 md:h-96">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                    "0 0 60px rgba(147, 51, 234, 0.5)",
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-full h-full rounded-full overflow-hidden border-4 border-blue-500/30"
              >
                <img
                  src="/manish.png"
                  alt="Manish Kumar Singh"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Hello, I'm Manish
              </span>
            </h1>
            <div className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300 h-20">
              <TypeAnimation
                sequence={[
                  'Data Scientist',
                  2000,
                  'AI Engineer',
                  2000,
                  'ML Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <div className="space-y-3 mb-8 text-gray-600 dark:text-gray-400">
              <p className="flex items-center justify-center md:justify-start">
                <Phone className="w-5 h-5 mr-3" /> +91 8539904102
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <Mail className="w-5 h-5 mr-3" /> singhmanishofficial102@gmail.com
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <MapPin className="w-5 h-5 mr-3" /> Bengaluru, Karnataka, India
              </p>
            </div>

            <div className="flex space-x-4 justify-center md:justify-start mb-8">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/Manishkumarsingh41"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/in/manishkumar-singh-5a8162214"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </div>

            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-600" />
      </motion.div>
    </section>
  );
};