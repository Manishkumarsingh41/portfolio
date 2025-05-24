import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: '🧠 BrainWave RAG Assistant 🚀 Top Project',
    description:
      'An AI assistant that supports document/code upload and gives smart answers using RAG (LangChain, FAISS, Streamlit, OpenAI).',
    tech: ['Streamlit', 'LangChain', 'FAISS', 'OpenAI'],
    demo: 'https://brainwaverag.streamlit.app/',
    github: 'https://github.com/Manishkumarsingh41/brainwave-rag-app', // Replace with your actual repo URL if public
    isFeatured: true,
  },
  {
    title: 'AI Caption & Hashtag Generator',
    description:
      'Developed an AI-powered tool to generate image captions and trending hashtags using deep learning and NLP techniques.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'PyTorch'],
    github: 'https://github.com/Manishkumarsingh41/aicaption-hastagtool',
  },
  {
    title: 'Rule-Based Chatbot Response System',
    description:
      'Created a chatbot that responds to user queries based on predefined rules and keyword recognition.',
    tech: ['Python', 'Flask', 'NLP'],
  },
  {
    title: 'Face Detection System',
    description:
      'Implemented a real-time face detection system that accurately detects and recognizes faces in images and live video feeds.',
    tech: ['Python', 'OpenCV', 'Haar Cascade Classifiers', 'XML'],
  },
  {
    title: 'Sentiment Analysis Bot',
    description:
      "Built a sentiment analysis system capable of classifying text as positive, negative, or neutral using Hugging Face's Transformer models.",
    tech: ['Python', 'Hugging Face', 'NLP'],
    demo: 'https://iamanishsinghrajput-meggi.hf.space',
  },
];


export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Showcasing my work in AI and Data Science
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            // Extract badge and clean title for featured projects
            let badge = null;
            let cleanTitle = project.title;
            if (project.isFeatured) {
              const badgeMatch = project.title.match(/(🚀 Top Project)/);
              if (badgeMatch) {
                badge = badgeMatch[1];
                cleanTitle = project.title.replace(/\s*🚀 Top Project/, '').trim();
              }
            }
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-lg shadow-lg overflow-hidden ${
                  project.isFeatured
                    ? 'bg-yellow-100 dark:bg-yellow-900 border-2 border-yellow-400'
                    : 'bg-white dark:bg-gray-900'
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center mb-2 gap-2">
                    <h3 className="text-xl font-semibold">{cleanTitle}</h3>
                    {project.isFeatured && badge && (
                      <span className="px-2 py-0.5 bg-yellow-300 dark:bg-yellow-700 text-yellow-900 dark:text-yellow-100 rounded-full text-xs font-semibold">
                        {badge}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <Github className="w-5 h-5 mr-1" /> Code
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <ExternalLink className="w-5 h-5 mr-1" /> Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
