import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaAward, FaFilm, FaHackerrank, FaUniversity } from 'react-icons/fa';
import { SiCisco, SiGooglecloud } from 'react-icons/si';

const Achievements = () => {
  const achievements = [
    {
      icon: <FaUniversity className="text-4xl text-yellow-400" />,
      title: "Outstanding Student Award",
      organization: "Digital University Kerala",
      description: "Recognized for exceptional academic performance and contributions to the university community in the 2022-24 batch.",
      date: "2022-24",
      gradient: "from-yellow-500 via-amber-500 to-orange-500"
    },
    {
      icon: <FaHackerrank className="text-4xl text-blue-400" />,
      title: "Smart India Hackathon 2023",
      organization: "University Level",
      description: "Secured First Place in the university level of India's premier hackathon, demonstrating innovative problem-solving skills and technical expertise.",
      achievement: "First Place",
      gradient: "from-blue-500 via-cyan-500 to-teal-500"
    },
    {
      icon: <SiCisco className="text-4xl text-cyan-400" />,
      title: "Cisco ThingQbator Hackathon",
      organization: "National Level",
      description: "Achieved Second Place in the national Tech Quiz & Sustainability Hackathon, showcasing knowledge in emerging technologies and sustainable solutions.",
      achievement: "Second Place",
      gradient: "from-teal-500 via-emerald-500 to-green-500"
    },
    {
      icon: <SiGooglecloud className="text-4xl text-red-400" />,
      title: "Sharktank Hackathon",
      organization: "Google Developer Student Club, WoW Kerala",
      description: "Won First Place in the startup-themed hackathon, presenting innovative solutions and business strategies.",
      achievement: "First Place",
      gradient: "from-red-500 via-rose-500 to-pink-500"
    },
    {
      icon: <FaFilm />,
      title: "Silent Spring - Malayalam Musical Album",
      organization: "Director & Creator",
      description: "Directed a critically acclaimed Malayalam musical album during Section 144 and COVID-19 lockdown, showcasing creative resilience and innovative filmmaking. The project earned multiple accolades including selection for Amazon Prime publication.",
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      achievements: [
        "Created during Section 144 and COVID-19 lockdown",
        "Selected for Amazon Prime publication",
        "Featured in regional news media",
        "Innovative remote production techniques"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 20, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 -right-40 w-96 h-96 bg-yellow-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-40 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            Achievements
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of milestones and recognition in academics, technology, and creative pursuits.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={itemVariants}
              whileHover="hover"
              className={`bg-gradient-to-r ${achievement.gradient} p-[1px] rounded-2xl overflow-hidden transform-gpu`}
            >
              <div className="bg-gray-900/95 backdrop-blur-sm p-5 h-full rounded-2xl">
                <div className="flex items-start gap-4">
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${achievement.gradient} flex items-center justify-center shrink-0 shadow-lg`}
                  >
                    {achievement.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 text-xs mb-2 flex items-center gap-2">
                      {achievement.organization}
                      {achievement.date && <span className="text-gray-500">•</span>}
                      {achievement.date && <span>{achievement.date}</span>}
                      {achievement.achievement && <span className="text-gray-500">•</span>}
                      {achievement.achievement && (
                        <span className="text-yellow-500 flex items-center gap-1">
                          <FaAward className="text-xs" />
                          {achievement.achievement}
                        </span>
                      )}
                    </p>
                    <p className="text-gray-300 text-sm mb-2">{achievement.description}</p>
                    {achievement.achievements && (
                      <ul className="space-y-1">
                        {achievement.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-gray-400 text-xs">
                            <FaAward className="text-yellow-500 text-xs mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
