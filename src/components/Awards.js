import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const Awards = () => {
  const awards = [
    {
      title: 'Outstanding Student Award',
      organization: 'Digital University Kerala',
      year: '2022-24 Batch'
    },
    {
      title: 'Smart India Hackathon 2023',
      organization: 'University Level',
      achievement: 'First Place'
    },
    {
      title: 'Cisco ThingQbator National Level',
      organization: 'Tech Quiz & Sustainability Hackathon',
      achievement: 'Second Place'
    },
    {
      title: 'Sharktank Hackathon',
      organization: 'Google Developer Student Club, WoW Kerala',
      achievement: 'First Place'
    },
    {
      title: 'Creative Achievement',
      description: 'Directed the Malayalam musical album "Silent Spring", which received significant critical acclaim & was selected for publication on Amazon Prime.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <FiAward className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-white">Awards & Achievements</h2>
        </motion.div>

        <div className="space-y-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
              {award.organization && (
                <p className="text-yellow-400 mb-1">{award.organization}</p>
              )}
              {award.achievement && (
                <p className="text-green-400 mb-1">{award.achievement}</p>
              )}
              {award.year && (
                <p className="text-gray-400">{award.year}</p>
              )}
              {award.description && (
                <p className="text-gray-300 mt-2">{award.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
