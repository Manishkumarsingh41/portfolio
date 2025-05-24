import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

const skills = [
  { name: 'Python', value: 90 },
  { name: 'Machine Learning', value: 85 },
  { name: 'Deep Learning', value: 80 },
  { name: 'Data Analysis', value: 85 },
  { name: 'NLP', value: 75 },
  { name: 'Computer Vision', value: 80 },
];

const tools = [
  { name: 'TensorFlow', level: 85 },
  { name: 'PyTorch', level: 80 },
  { name: 'OpenCV', level: 85 },
  { name: 'Flask', level: 75 },
  { name: 'Git', level: 80 },
];

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Specialized in AI, Machine Learning, and Data Science
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-center">Core Competencies</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={skills}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar
                    name="Skills"
                    dataKey="value"
                    stroke="#4F46E5"
                    fill="#4F46E5"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">Tools & Technologies</h3>
            {tools.map((tool) => (
              <div key={tool.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{tool.name}</span>
                  <span>{tool.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${tool.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-blue-600 rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};