"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';

// Experience section component
// Notes:
// - This file is marked as a client component (required when using framer-motion or DOM hooks in Next.js app router)
// - We attach the intersection-observer `ref` to a plain div to avoid ref-forwarding issues
// - Variants are used instead of inline animate objects for stability

export const Experience = () => {
  // use the object form of the hook which is compatible across versions
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const headerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // sideVariant uses a function for `visible` so we can accept a custom delay via the `custom` prop
  const sideVariant = {
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    visible: (custom = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: custom },
    }),
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      {/* Attach observer ref to this plain container */}
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={headerVariant}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Professional Experience */}
          <motion.div
            variants={sideVariant}
            initial="hiddenLeft"
            animate={inView ? 'visible' : 'hiddenLeft'}
            custom={0.2}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Briefcase className="mr-2" /> Professional Experience
            </h3>

            {/* New Internship */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold">Machine Learning Intern</h4>
              <p className="text-gray-600 dark:text-gray-400">TechnoHacks Solutions Pvt. Ltd</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">Jul 2025 – Aug 2025</p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600 dark:text-gray-400">
                <li>Built a Linear Regression model to predict target variables using Python and Scikit-learn.</li>
                <li>Developed a web-based ML prediction tool using Flask.</li>
                <li>Created and shared a demo walkthrough on LinkedIn showcasing tool capabilities.</li>
              </ul>
            </div>

            {/* Existing Internship - SkillCraft */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold">Data Scientist Intern</h4>
              <p className="text-gray-600 dark:text-gray-400">SkillCraft Technology | IT Product & Services</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">01 Apr, 2025 – 30 Apr, 2025</p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                <strong>Key Skills:</strong> NumPy, Reporting, EDA, Data Cleaning, Statistical Analysis, Pandas, Matplotlib, Seaborn, Data Preprocessing
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600 dark:text-gray-400">
                <li>As a Data Science Intern, I worked on real-world datasets to apply and enhance my skills in data analysis, visualization, and exploratory data analysis (EDA).</li>
                <li>My responsibilities included cleaning datasets, extracting insights using visualizations, and presenting analytical findings to support data-driven decisions.</li>
                <li>I completed three major tasks during the internship.</li>
              </ul>
            </div>

            {/* Existing Internship - HEX */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold">Data Scientist Intern</h4>
              <p className="text-gray-600 dark:text-gray-400">HEX SOFTWARES INNOVATE</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">February 2025 – March 2025 | Remote</p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600 dark:text-gray-400">
                <li>Worked on data-driven solutions using statistical analysis and ML algorithms</li>
                <li>Conducted data preprocessing and feature engineering</li>
                <li>Performed EDA to derive actionable insights</li>
                <li>Created reports using Python (Pandas, Matplotlib, Seaborn)</li>
              </ul>
            </div>

            {/* Existing Internship - CodSoft */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold">AI Intern</h4>
              <p className="text-gray-600 dark:text-gray-400">CodSoft</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">October 2024 – November 2024 | Remote</p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600 dark:text-gray-400">
                <li>Developed AI applications focusing on NLP and Computer Vision</li>
                <li>Created a Rule-Based Chatbot Response System</li>
                <li>Built Face Detection System using OpenCV</li>
                <li>Engineered AI Caption & Hashtag Generator</li>
              </ul>
            </div>
          </motion.div>

          {/* Right Side - Education & Certifications */}
          <motion.div
            variants={sideVariant}
            initial="hiddenRight"
            animate={inView ? 'visible' : 'hiddenRight'}
            custom={0.4}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <GraduationCap className="mr-2" /> Education & Certifications
            </h3>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold">Bachelor of Engineering (B.E.)</h4>
              <p className="text-gray-600 dark:text-gray-400">Artificial Intelligence and Data Science</p>
              <p className="text-gray-600 dark:text-gray-400">RNS Institute of Technology, Bengaluru</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">December 2022 – 2026</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold">Certifications</h4>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600 dark:text-gray-400">
                <li>Introduction to Generative AI (Google Cloud)</li>
                <li>Introduction to Large Language Models (Google Cloud)</li>
                <li>Responsible AI Principles (Google Cloud)</li>
                <li>Operating Systems Fundamentals (Cisco)</li>
                <li>Cybersecurity Basics (Cisco)</li>
                <li>AI & Data Science Essentials (Udemy)</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
