import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaLightbulb, FaUniversity, FaFlask } from 'react-icons/fa';

const experiences = [
  {
    title: "AI R & D Engineer",
    company: "Kerala Blockchain Academy",
    location: "Trivandrum, Kerala",
    date: "December 2024 - Present",
    description: "Working on projects related to large language models, computer vision, and other advanced technologies in collaboration with experts and researchers in blockchain & AI at KBA.",
    skills: ["Large Language Models", "Computer Vision", "Blockchain"],
    icon: <FaBriefcase className="text-blue-500 text-3xl" />
  },
  {
    title: "Co-Founder",
    company: "KnowLumi",
    location: "Kozhikode, Kerala",
    date: "July 2024 - Present",
    description: "Co-founded a platform empowering students to get opportunities like IITians using AI. Focused on developing AI tools & fostering connections with expert mentors.",
    skills: ["AI Tools Development", "Mentorship"],
    icon: <FaLightbulb className="text-yellow-500 text-3xl" />
  },
  {
    title: "Research Intern",
    company: "Indian Institute of Management–Kozhikode (IIM–Kozhikode)",
    location: "Calicut, Kerala",
    date: "July 2023 – December 2023",
    description: "Completed a project on Large Language Models under the mentorship of Dr. Mohammed Shahid Abdulla, Associate Professor in the Department of Information Systems at IIM Kozhikode.",
    skills: ["Large Language Models", "Research"],
    icon: <FaUniversity className="text-green-500 text-3xl" />
  },
  {
    title: "Data Scientist Intern",
    company: "First Principle Labs",
    location: "Calicut, Kerala",
    date: "February 2022 – June 2022",
    description: "Developed a tool for forecasting the Real-time big data of Google Trends keywords using Google Trends. For future prediction, different Machine learning techniques are used.",
    skills: ["Data Forecasting", "Machine Learning"],
    icon: <FaBriefcase className="text-blue-500 text-3xl" />
  },
  {
    title: "AI R & D Intern",
    company: "PixDynamics",
    location: "Kochi, Kerala",
    date: "February 2022 - May 2022",
    description: "Developed a program to extract data from demand drafts, passports & cheques of major banks in India under the guidance of senior AI developers in PixDynamics.",
    skills: ["Data Extraction", "AI Development"],
    icon: <FaBriefcase className="text-blue-500 text-3xl" />
  },
  {
    title: "Research Intern",
    company: "CSIR - National Physical Laboratory",
    location: "New Delhi, India",
    date: "April 2021 - June 2021",
    description: "Completed a research project on 'Impact of Covid - 19 on Angstrom Exponent using NASA's AERONET project' under the guidance of Dr. Sumit Mishra, Principal Scientist, CSIR NPL.",
    skills: ["Research", "Data Analysis"],
    icon: <FaFlask className="text-red-500 text-3xl" />
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-4 relative"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <FaBriefcase className="text-blue-500 text-5xl mx-auto mb-4" />
        </div>

        <div className="relative">
          <div className="border-l-2 border-gray-700 absolute h-full top-0 left-10 transform -translate-x-1/2"></div>
          <div className="space-y-8 ml-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transform transition-transform"
              >
                <div className="absolute left-0 top-6 transform -translate-x-1/2 bg-blue-500 w-6 h-6 rounded-full border-4 border-gray-900"></div>
                <div className="flex items-center gap-4 mb-4">
                  {exp.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <a 
                      href="#contact" 
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      {exp.company}
                    </a>
                    <p className="text-gray-400">{exp.location} | {exp.date}</p>
                  </div>
                </div>
                <p className="text-gray-300">{exp.description}</p>
                <ul className="text-gray-300 mt-2">
                  {exp.skills.map((skill, i) => (
                    <li key={i} className="inline-block mr-2 bg-gray-700 px-2 py-1 rounded-full text-sm">{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
