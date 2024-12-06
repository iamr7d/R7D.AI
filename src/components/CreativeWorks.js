import React from 'react';
import { motion } from 'framer-motion';
import { FaFilm, FaAward, FaPalette, FaSpaceShuttle, FaPlay } from 'react-icons/fa';
import 'react-multi-carousel/lib/styles.css';

const CreativeWorks = () => {
  const videoWorks = [
    {
      title: "Silent Spring",
      icon: <FaFilm className="text-purple-500 text-4xl" />,
      description: "A Malayalam music video exploring the nuanced love story of an introverted girl. This project delves into the silent yet profound world of introverted emotions, brought to life through layered narrative and aesthetic visuals.",
      achievements: [
        "Quarter-Finalist at WideScreen Film & Music Video Festival",
        "Selected for Amazon Prime UK Publishing",
        "Selected for Multiple Lift-Off Filmmaker Sessions (Sept-Oct 2022)",
        "Selected for Student World Impact Film Festival, New York",
        "Featured as 'Worth Watch Music Video' by UnniVlogs"
      ],
      link: "nzZc5e7ADHU",
      gradient: "from-purple-500 via-pink-500 to-red-500"
    },
    {
      title: "UnniVlogs Worth Watch Selection",
      icon: <FaPlay className="text-green-500 text-4xl" />,
      description: "Silent Spring was selected and featured as a 'Worth Watch Music Video' by UnniVlogs, one of Kerala's prominent tech and entertainment vloggers, recognizing its artistic merit and storytelling.",
      achievements: [
        "Selected as 'Worth Watch Music Video'",
        "Featured review and analysis",
        "Recognition from prominent tech influencer"
      ],
      link: "BBq2-bTgses",
      gradient: "from-green-500 via-emerald-500 to-teal-500"
    },
    {
      title: "How Colors are Made",
      icon: <FaPalette className="text-red-500 text-4xl" />,
      description: "A PSA and mobile short film inspired by Rachel Houston's quote about embracing life's diversity. The film advocates for celebrating unique gender identities, aligning with WHO's perspective on gender as a social construct.",
      achievements: [
        "Selected for Multiple Lift-Off Filmmaker Sessions (Aug-Nov 2022)",
        "Selected for First-Time Filmmaker Sessions",
        "Selected for Student World Impact Film Festival, New York",
        "Best Ad Film - Kannur University Media Fest Ad Astra"
      ],
      link: "pHpgFu6dbaI",
      gradient: "from-red-500 via-orange-500 to-yellow-500"
    },
    {
      title: "SKYLAB - Sleepless nights",
      icon: <FaSpaceShuttle className="text-cyan-500 text-4xl" />,
      description: "A documentary exploring NASA's pioneering space station launched in 1973. The film chronicles Skylab's missions, operations, and its eventual fate in 1979 as it disintegrated in Earth's atmosphere.",
      achievements: ["Director's Cut"],
      link: "q_uo5tu4X4M",
      gradient: "from-cyan-500 via-blue-500 to-purple-500"
    },
    {
      title: "Revival",
      icon: <FaFilm className="text-blue-500 text-4xl" />,
      description: "A powerful musical tribute to the resilience of Kerala during the devastating floods of 2018. As Assistant Director, I helped bring this emotional story of survival and community strength to life.",
      achievements: [
        "Assistant Director",
        "Musical Documentary on Kerala Floods 2018"
      ],
      link: "thoVCC2T0ys",
      gradient: "from-blue-500 via-cyan-500 to-teal-500"
    },
    {
      title: "Featured on News",
      icon: <FaFilm className="text-yellow-500 text-4xl" />,
      description: "Silent Spring project was featured on major news channels, highlighting its unique creation during Section 144 and COVID-19 lockdown period. The coverage showcased the innovative approaches to filmmaking during unprecedented times.",
      achievements: [
        "Media coverage of creative filmmaking",
        "Featured story on pandemic-era production",
        "Highlighted in regional news"
      ],
      link: "LSuZC31b6v4",
      gradient: "from-yellow-500 via-amber-500 to-orange-500"
    }
  ];

  const otherWorks = [
    {
      title: "Best Screenplay Awards",
      icon: <FaAward className="text-yellow-500 text-4xl" />,
      description: "Recognition for excellence in screenplay writing at various university-level competitions, showcasing consistent achievement in narrative development and storytelling.",
      achievements: [
        "Best Screenplay - Kannur University Kalolsavam 2020 (Third Place)",
        "Best Screenplay - Kannur University Media Fest Ad Astra (2021)",
        "Best Screenplay - Kannur University Media Fest Ad Astra (2022)"
      ],
      gradient: "from-yellow-500 via-orange-500 to-red-500"
    },
    {
      title: "Film Camp Achievement",
      icon: <FaFilm className="text-green-500 text-4xl" />,
      description: "Recognition for outstanding participation and contribution at the state-level film camp, demonstrating leadership and creative excellence in collaborative filmmaking.",
      achievements: [
        "Best Camp Member - Kerala State Level Film Camp"
      ],
      gradient: "from-green-500 via-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="creative" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            Creative Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A collection of my creative endeavors in filmmaking, storytelling, and visual arts.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Featured Films
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoWorks.map((work, index) => (
              <a 
                key={work.title} 
                href={`https://www.youtube.com/watch?v=${work.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300"
              >
                <div className="relative aspect-video bg-gray-800">
                  <img 
                    src={`https://img.youtube.com/vi/${work.link}/sddefault.jpg`}
                    alt={work.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://img.youtube.com/vi/${work.link}/hqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      <FaPlay className="text-white text-4xl opacity-80 group-hover:opacity-100" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    {work.icon}
                    <h3 className="text-xl font-semibold text-white">{work.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{work.description}</p>
                  {work.achievements && (
                    <ul className="space-y-1">
                      {work.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-500 text-sm flex items-center gap-2">
                          <FaAward className="text-yellow-500 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Other Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherWorks.map((work, index) => (
              <div 
                key={work.title}
                className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800/50 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  {work.icon}
                  <h3 className="text-xl font-semibold text-white">{work.title}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">{work.description}</p>
                {work.achievements && (
                  <ul className="space-y-2">
                    {work.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-500 text-sm flex items-center gap-2">
                        <FaAward className="text-yellow-500 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeWorks;
