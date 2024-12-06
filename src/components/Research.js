import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCpu, FiUsers, FiMonitor } from 'react-icons/fi';

const Research = () => {
  const [selectedPublication, setSelectedPublication] = useState(null);

  const publications = [
    {
      title: "Exploring the Intersection of AI and Cognitive Science in Educational Technology",
      authors: "Research at IIM Kozhikode",
      year: "2023-2024",
      type: "Research Internship",
      description: "Leading research on integrating Large Language Models (LLMs) in educational contexts, focusing on personalized learning experiences and cognitive development assessment.",
      highlights: [
        "Developed novel methodologies for implementing LLMs in education",
        "Conducted experiments with 500+ students",
        "Created adaptive learning algorithms",
        "Analyzed impact on student engagement and performance"
      ],
      technologies: ["LangChain", "PEFT", "LoRA", "Transformers"],
      collaborators: ["IIM Kozhikode", "Digital University Kerala"]
    },
    {
      title: "Brain-Computer Interface Development",
      authors: "Research Project at Digital University Kerala",
      year: "2023",
      type: "Academic Research",
      description: "Developed advanced BCI systems integrating EEG signal processing with machine learning for enhanced human-computer interaction.",
      highlights: [
        "Implemented real-time EEG signal processing",
        "Developed machine learning models for signal classification",
        "Created interactive visualization tools",
        "Achieved significant improvement in signal accuracy"
      ],
      technologies: ["Python", "TensorFlow", "EEG Processing", "Signal Analysis"],
      collaborators: ["Digital University Kerala"]
    },
    {
      title: "Monetize the Dual: A Data Analytic Approach for Native Language and Prequel Movies Popularity Analysis",
      authors: "Rahulraj P. V., Sanil J., Anoop V. S, Asharaf S",
      year: "2023",
      type: "Conference Paper",
      description: "Analyzing movie trends for commercial opportunities in prequel and native language films.",
      highlights: [
        "Analyzed data from Indian duology and native language-remake movies",
        "Identified popularity trends around sequel and remake releases",
        "Proposed strategic business opportunities based on data insights"
      ],
      technologies: ["Data Analytics", "Trend Analysis"],
      conference: "International Conference on Data Analytics and Insights (ICDAI’23)",
      collaborators: ["Sanil J.", "Anoop V. S", "Asharaf S"]
    },
    {
      title: "Changes in Atmospheric Air Quality in the Wake of a Lockdown Related to Covid–19",
      authors: "Rahulraj P V, Ebin Antony",
      year: "2021",
      type: "Journal Article",
      description: "Study on air quality changes during COVID-19 lockdown in Thiruvananthapuram, Kerala.",
      highlights: [
        "Analyzed SO2, O3, CO, PM10, PM2.5, NO2, NOX, and NO levels",
        "Observed 25% reduction in AQI during lockdown phases",
        "Identified significant improvement in air quality due to reduced anthropogenic activities"
      ],
      journal: "SSRG International Journal of Agriculture & Environmental Science",
      technologies: ["Environmental Science", "Data Analysis"],
      collaborators: ["Ebin Antony"]
    },
    {
      title: "Influence of AI in Education System",
      authors: "Rahulraj P V, Ebin Antony",
      year: "2022",
      type: "Article",
      description: "Exploration of AI's role in transforming educational practices and enhancing learning experiences.",
      highlights: [
        "Discussed AI's impact on educational efficiency and user experience",
        "Explored AI's role in educational app development during COVID-19",
        "Analyzed AI's transformative potential in the education sector"
      ],
      publication: "Emerging Trends of Psycho-Technological Approaches in Heutagogy",
      technologies: ["AI", "Education Technology"],
      collaborators: ["Ebin Antony"]
    }
  ];

  const researchAreas = [
    {
      icon: <FiMonitor className="w-8 h-8" />,
      area: "Cognitive Computing",
      description: "Exploring the intersection of human cognition and artificial intelligence",
      topics: [
        "Brain-Computer Interfaces",
        "Cognitive Science",
        "Neural Engineering",
        "Mental Models"
      ]
    },
    {
      icon: <FiCpu className="w-8 h-8" />,
      area: "AI & Machine Learning",
      description: "Advancing the boundaries of artificial intelligence and its applications",
      topics: [
        "Large Language Models",
        "Neural Networks",
        "Educational AI",
        "Signal Processing"
      ]
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      area: "Human-AI Interaction",
      description: "Creating seamless interfaces between humans and AI systems",
      topics: [
        "User Experience",
        "Adaptive Interfaces",
        "Accessibility",
        "Interactive Systems"
      ]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
            Research & Innovation
          </h2>
          <p className="text-xl text-gray-400">
            Pushing the boundaries of AI, Cognition, and Human-Computer Interaction
          </p>
        </motion.div>

        {/* Research Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative z-10">
                <div className="text-blue-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{area.area}</h3>
                <p className="text-gray-400 mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Publications */}
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedPublication(pub)}
              className="group cursor-pointer bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm mr-2">
                      {pub.type}
                    </span>
                    <span className="text-gray-400">{pub.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {pub.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{pub.authors}</p>
                  <p className="text-gray-300 mb-4">{pub.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {pub.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Publication Modal */}
        <AnimatePresence>
          {selectedPublication && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPublication(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={e => e.stopPropagation()}
                className="bg-gray-800 rounded-xl p-6 max-w-2xl max-h-[80vh] overflow-y-auto"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{selectedPublication.title}</h3>
                <p className="text-gray-400 mb-2">{selectedPublication.authors}</p>
                <p className="text-blue-400 mb-4">{selectedPublication.year}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Key Highlights</h4>
                  <ul className="space-y-2">
                    {selectedPublication.highlights.map((highlight, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPublication.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedPublication.conference && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Conference</h4>
                    <p className="text-gray-300">{selectedPublication.conference}</p>
                  </div>
                )}

                {selectedPublication.journal && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Journal</h4>
                    <p className="text-gray-300">{selectedPublication.journal}</p>
                  </div>
                )}

                {selectedPublication.publication && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Publication</h4>
                    <p className="text-gray-300">{selectedPublication.publication}</p>
                  </div>
                )}

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Collaborators</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPublication.collaborators.map((collab, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                      >
                        {collab}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Research;
