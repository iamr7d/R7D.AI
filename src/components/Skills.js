import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiTool, FiFeather } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FiCode className="w-6 h-6" />,
      skills: ['Python', 'R']
    },
    {
      title: 'Tools & Technologies',
      icon: <FiTool className="w-6 h-6" />,
      skills: [
        'Machine Learning',
        'Computer Vision',
        'Deep Learning',
        'Large Language Models (LLMs)',
        'Generative AI',
        'Natural Language Processing (NLP)',
        'Data Science & Analytics',
        'Data Visualization',
        'Statistics',
        'Prompt Engineering',
        'TensorFlow',
        'Scikit-learn',
        'Pandas',
        'PyTorch',
        'Origin Pro',
        'Figma',
        'PyQt5',
        'Streamlit',
        'Git',
        'Microsoft Office',
        'LaTeX',
        'LangChain',
        'PEFT',
        'LoRA',
        'GitHub',
        'EEG (Practical Experience)',
        'Cognitive Science',
        'Neuroscience'
      ]
    },
    {
      title: 'Creative Skills',
      icon: <FiFeather className="w-6 h-6" />,
      skills: [
        'Screenplay Writing',
        'Photography',
        'Film Direction',
        'Video Editing',
        'Poster Design',
        'PowerPoint (Presentation Specialist)'
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
          <p className="text-gray-400">A diverse set of technical and creative abilities</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-500 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
