import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaFilm, FaMedal } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FaGraduationCap className="text-blue-500 text-2xl" />,
      title: "Education",
      description: "MTech in Computer Science (AI) from Digital University Kerala"
    },
    {
      icon: <FaCode className="text-green-500 text-2xl" />,
      title: "Tech Focus",
      description: "AI R&D Engineer specializing in LLMs and Computer Vision"
    },
    {
      icon: <FaFilm className="text-purple-500 text-2xl" />,
      title: "Creative",
      description: "Film Director blending technology with visual storytelling"
    },
    {
      icon: <FaMedal className="text-yellow-500 text-2xl" />,
      title: "Achievements",
      description: "Smart India Hackathon Winner & Outstanding Student Awardee"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate about merging technology with creativity. I'm an AI researcher and filmmaker,
            dedicated to pushing the boundaries of both fields.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50"
            >
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-gray-400 max-w-3xl mx-auto text-center"
        >
          <p className="mb-4">
            Currently working as an AI R&D Engineer at Kerala Blockchain Academy, where I focus on
            developing innovative solutions using Large Language Models and Computer Vision.
          </p>
          <p>
            My unique blend of technical expertise and creative vision allows me to approach problems
            from multiple perspectives, whether I'm developing AI systems or directing films.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
