import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

const profiles = [
  {
    name: 'Kaggle',
    icon: 'https://www.kaggle.com/static/images/site-logo.svg',
    url: 'https://www.kaggle.com/manish5323',
    color: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    name: 'Microsoft Learn',
    icon: 'https://learn.microsoft.com/favicon.ico',
    url: 'https://learn.microsoft.com/en-us/users/manishkumarsingh-4151/',
    color: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    name: 'Google Cloud Skills',
    icon: 'https://www.cloudskillsboost.google/favicon.ico',
    url: 'https://www.cloudskillsboost.google/public_profiles/8f9c0d63-5be3-449d-b509-4f2547eaa58e',
    color: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    name: 'LeetCode',
    icon: 'https://leetcode.com/favicon.ico',
    url: 'https://leetcode.com/u/Manishkumarsingh41/',
    color: 'bg-yellow-50 dark:bg-yellow-900/20',
  },
  {
    name: 'GitHub',
    icon: 'https://github.com/favicon.ico',
    url: 'https://github.com/Manishkumarsingh41',
    color: 'bg-gray-50 dark:bg-gray-800/40',
  },
  {
    name: 'LinkedIn',
    icon: 'https://www.linkedin.com/favicon.ico',
    url: 'https://www.linkedin.com/in/manish-kumar-singh-5a8162214/',
    color: 'bg-blue-50 dark:bg-blue-900/20',
  },
];

export const ProfessionalProfiles = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Profiles & Certifications</h2>
          <p className="text-gray-600 dark:text-gray-400">Connect with me across various platforms</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`${profile.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-3`}
            >
              <img src={profile.icon} alt={profile.name} className="w-12 h-12 object-contain" />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{profile.name}</span>
              <ExternalLink className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};