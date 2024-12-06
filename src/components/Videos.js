import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaFilm } from 'react-icons/fa';

const Videos = () => {
  const videos = [
    {
      id: 'nzZc5e7ADHU',
      title: 'Aaradhana - Music Video',
      description: 'A soulful music video directed by Rahulraj, exploring themes of devotion and spirituality through visual storytelling.',
      type: 'music'
    },
    {
      id: 'XvHy0OXk3Rw',
      title: 'Silent Spring - Music Video',
      description: 'A collaborative music video featuring Nivedhya Bharath Nambiar and Deepak Pradeep, directed by Rahulraj P V. A visual journey through emotions and storytelling.',
      type: 'music'
    }
  ];

  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Directed Works</h2>
          <p className="text-gray-400">Visual storytelling through film and music</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-gray-700/50"
            >
              <div className="relative pt-[56.25%] bg-black">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  {video.type === 'music' ? (
                    <FaYoutube className="text-red-600 text-2xl" />
                  ) : (
                    <FaFilm className="text-blue-500 text-2xl" />
                  )}
                  {video.title}
                </h3>
                <p className="text-gray-400">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
