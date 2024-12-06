import React from 'react';
import { motion } from 'framer-motion';
import { FaFilm, FaAward, FaPalette, FaSpaceShuttle } from 'react-icons/fa';

const CreativeWorks = () => {
  const works = [
    {
      title: "Silent Spring",
      icon: <FaFilm className="text-purple-500 text-4xl" />,
      description: "A Malayalam music video exploring the nuanced love story of an introverted girl. This project delves into the silent yet profound world of introverted emotions, brought to life through layered narrative and aesthetic visuals.",
      achievements: [
        "Quarter-Finalist at WideScreen Film & Music Video Festival",
        "Selected for Amazon Prime UK Publishing",
        "Selected for Multiple Lift-Off Filmmaker Sessions (Sept-Oct 2022)",
        "Selected for Student World Impact Film Festival, New York",
        "Best Screenplay - Kannur University Kalolsavam 2020 (Third Place)",
        "Best Screenplay - Kannur University Media Fest Ad Astra (2021, 2022)",
        "Best Ad Film - Kannur University Media Fest Ad Astra",
        "Best Camp Member - Kerala State Level Film Camp"
      ],
      link: "nzZc5e7ADHU"
    },
    {
      title: "How Colors are Made",
      icon: <FaPalette className="text-red-500 text-4xl" />,
      description: "A PSA and mobile short film inspired by Rachel Houston's quote about embracing life's diversity. The film advocates for celebrating unique gender identities, aligning with WHO's perspective on gender as a social construct.",
      achievements: [
        "Selected for Multiple Lift-Off Filmmaker Sessions (Aug-Nov 2022)",
        "Selected for First-Time Filmmaker Sessions",
        "Selected for Student World Impact Film Festival, New York"
      ],
      link: "pHpgFu6dbaI"
    },
    {
      title: "SKYLAB - Sleepless nights",
      icon: <FaSpaceShuttle className="text-cyan-500 text-4xl" />,
      description: "A documentary exploring NASA's pioneering space station launched in 1973. The film chronicles Skylab's missions, operations, and its eventual fate in 1979 as it disintegrated in Earth's atmosphere.",
      achievements: ["Director's Cut"],
      link: "q_uo5tu4X4M"
    }
  ];

  return (
    <section id="creative-works" className="relative py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="absolute bg-gradient-to-r from-blue-500 to-purple-500 w-96 h-96 rounded-full blur-3xl opacity-30 top-1/3 left-1/4 animate-pulse" />
        <div className="absolute bg-gradient-to-r from-pink-500 to-yellow-500 w-96 h-96 rounded-full blur-3xl opacity-30 top-2/3 left-3/4 animate-pulse" />
      </motion.div>
      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Creative Works</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            From directing musical projects to innovative film analysis using AI, each piece here reflects my passion 
            for exploring beyond conventional boundaries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 30 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeInOut' }}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-transform"
            >
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  {work.icon}
                  <h3 className="text-2xl font-semibold text-white">{work.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{work.description}</p>
                <div className="space-y-2">
                  {work.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center gap-2 text-yellow-500">
                      <FaAward />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
                {work.link && (
                  <div className="mt-6 relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${work.link}`}
                      title={work.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-blue-500/10 border border-blue-500/20 rounded-lg px-6 py-3">
            <p className="text-blue-400">
              Featured at Student World Impact Film Festival, New York - Selected among 5,000+ submissions from 100+ countries
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeWorks;
