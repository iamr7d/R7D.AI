import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiRadio, FiFilm, FiBook, FiCpu, FiArrowRight, FiPlay, FiDownload, FiUser, FiShare2, FiSun, FiMoon } from 'react-icons/fi';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  const projects = [
    {
      title: "AI Campus Radio",
      description: "An innovative AI-powered campus radio system that generates and broadcasts content using advanced language models.",
      longDescription: "India's first AI-powered campus radio platform that revolutionizes content creation and broadcasting. Using state-of-the-art language models, it generates engaging content, schedules programming, and delivers personalized experiences to listeners.",
      icon: <FiRadio className="w-6 h-6" />,
      technologies: ["Python", "OpenAI API", "TTS", "Flask", "React"],
      features: [
        "Real-time content generation using GPT-4",
        "Text-to-Speech integration with emotion control",
        "Dynamic programming schedule with AI optimization",
        "Web-based control interface with analytics",
        "Mobile app for listeners with personalized recommendations"
      ],
      tags: ["AI", "Broadcasting", "Innovation"],
      github: "https://github.com/iamr7d/ai-campus-radio",
      live: "https://ai-radio.duk.ac.in",
      video: "https://www.youtube.com/embed/sample-video",
      collaborators: ["Dr. Asharaf S", "Dean, Digital University Kerala"],
      testimonials: [
        "This platform has transformed our campus radio experience!",
        "The AI-generated content is both engaging and diverse."
      ],
      progress: 80,
      color: "from-blue-500 via-purple-500 to-pink-500",
      stats: {
        users: "1000+",
        broadcasts: "500+",
        satisfaction: "98%"
      }
    },
    {
      title: "Movie Success Prediction",
      description: "Machine learning algorithm that predicts movie success based on various parameters including script analysis.",
      longDescription: "Revolutionary AI system that analyzes movie scripts, market trends, and audience preferences to predict box office success. Utilizes advanced NLP and pattern recognition inspired by DNA sequencing algorithms.",
      icon: <FiFilm className="w-6 h-6" />,
      technologies: ["Python", "TensorFlow", "NLP", "Scikit-learn", "BERT"],
      features: [
        "Script sentiment and narrative structure analysis",
        "Box office prediction with 85% accuracy",
        "Genre classification and audience targeting",
        "Cast influence analysis using social metrics",
        "Market trend correlation engine"
      ],
      tags: ["Machine Learning", "Data Science", "Film Industry"],
      github: "https://github.com/iamr7d/movie-success-predictor",
      video: "https://www.youtube.com/embed/sample-video",
      collaborators: ["Dr. Asharaf S", "Dean, Digital University Kerala", "Dr. Sanil S", "Digital University Kerala"],
      testimonials: [
        "A game-changer for film producers!",
        "Accurate predictions that help in strategic planning."
      ],
      progress: 90,
      color: "from-green-500 via-teal-500 to-blue-500",
      stats: {
        accuracy: "85%",
        scripts: "1000+",
        genres: "15+"
      }
    },
    {
      title: "Real-Time Film Analysis",
      description: "AI-powered system for real-time analysis of film scenes, detecting emotions, objects, and cinematographic techniques.",
      longDescription: "Cutting-edge computer vision system that analyzes film scenes in real-time, detecting emotions, cinematographic techniques, and visual patterns. Integrates neuroscience principles to understand viewer engagement.",
      icon: <FiCpu className="w-6 h-6" />,
      technologies: ["Python", "OpenCV", "TensorFlow", "PyTorch", "YOLO"],
      features: [
        "Real-time emotion and expression detection",
        "Scene composition and technique analysis",
        "Viewer engagement prediction",
        "Cinematographic pattern recognition",
        "Neural response correlation"
      ],
      tags: ["Computer Vision", "Neuroscience", "Film Analysis"],
      github: "https://github.com/iamr7d/film-analysis-ai",
      demo: "https://film-analysis.demo.com",
      video: "https://www.youtube.com/embed/sample-video",
      collaborators: ["Charlie Davis", "Dana Lee"],
      testimonials: [
        "Incredible insights into film production.",
        "The real-time analysis is impressive and highly accurate."
      ],
      progress: 75,
      color: "from-purple-500 via-pink-500 to-red-500",
      stats: {
        fps: "30+",
        accuracy: "92%",
        techniques: "50+"
      }
    },
    {
      title: "LLM Story Writer",
      description: "An advanced story generation tool using fine-tuned language models with creative writing capabilities.",
      longDescription: "Interactive AI-powered storytelling platform that combines fine-tuned language models with gamification elements to create engaging, branching narratives that adapt to user choices.",
      icon: <FiBook className="w-6 h-6" />,
      technologies: ["Python", "Transformers", "PEFT", "LoRA", "React"],
      features: [
        "Custom fine-tuned LLM for creative writing",
        "Dynamic branching narrative system",
        "Character development AI",
        "Plot consistency checking",
        "Interactive story visualization"
      ],
      tags: ["AI", "Storytelling", "Creativity"],
      github: "https://github.com/iamr7d/llm-story-writer",
      live: "https://story-writer.demo.com",
      video: "https://www.youtube.com/embed/sample-video",
      collaborators: ["Dr. Asharaf S", "Dean, Digital University Kerala", "Prof. Mohammad Shahid Abdulla", "IIM Kozhikode"],
      testimonials: [
        "A must-have tool for writers and storytellers.",
        "The AI-generated stories are both creative and engaging."
      ],
      progress: 85,
      color: "from-yellow-500 via-orange-500 to-red-500",
      stats: {
        stories: "5000+",
        branches: "∞",
        users: "2000+"
      }
    },
    {
      title: "Unsupervised Domain Adaptation",
      description: "ICML project addressing domain adaptation challenges with innovative solutions.",
      longDescription: "A comprehensive project exploring unsupervised domain adaptation techniques, solving complex problems in transferring knowledge across different domains. Implemented novel algorithms that enhance model adaptability and accuracy.",
      icon: <FiBook className="w-6 h-6" />,
      technologies: ["Python", "TensorFlow", "PyTorch", "Domain Adaptation"],
      features: [
        "Novel domain adaptation algorithms",
        "Cross-domain knowledge transfer",
        "Enhanced model accuracy and robustness",
        "Scalable solutions for diverse applications",
        "Integration with existing ML pipelines"
      ],
      tags: ["Machine Learning", "Domain Adaptation", "Research"],
      github: "https://github.com/iamr7d/unsupervised-domain-adaptation",
      collaborators: ["Eve White", "Frank Green"],
      testimonials: [
        "A breakthrough in domain adaptation research.",
        "Innovative solutions that push the boundaries of ML."
      ],
      progress: 85,
      color: "from-yellow-500 via-orange-500 to-red-500",
      stats: {
        domains: "10+",
        algorithms: "5+",
        publications: "3"
      }
    },
    {
      title: "AI Games Using MediaPipe",
      description: "Interactive AI games leveraging MediaPipe for gesture and motion recognition.",
      longDescription: "An exciting project that develops AI-driven games using MediaPipe for real-time gesture and motion recognition. Creates engaging and interactive gaming experiences through advanced computer vision techniques.",
      icon: <FiPlay className="w-6 h-6" />,
      technologies: ["Python", "MediaPipe", "OpenCV", "Unity"],
      features: [
        "Real-time gesture recognition",
        "Interactive gameplay with AI integration",
        "Seamless motion tracking",
        "Multiplayer capabilities",
        "Cross-platform support"
      ],
      tags: ["AI", "Gaming", "Computer Vision"],
      github: "https://github.com/iamr7d/ai-games-mediapipe",
      demo: "https://ai-games.demo.com",
      video: "https://www.youtube.com/embed/sample-video",
      collaborators: ["George Brown", "Hannah Black"],
      testimonials: [
        "A fun and innovative approach to AI gaming.",
        "The gesture recognition is smooth and responsive."
      ],
      progress: 70,
      color: "from-teal-500 via-blue-500 to-indigo-500",
      stats: {
        games: "5+",
        players: "500+",
        platforms: "3+"
      }
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section className={`py-20 px-4 relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl" />
      </div>

      {/* Dark/Light Mode Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={toggleDarkMode}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-700/70 rounded-lg transition-colors duration-300"
        >
          {darkMode ? <FiSun className="w-5 h-5 text-yellow-400" /> : <FiMoon className="w-5 h-5 text-blue-400" />}
          <span className="text-gray-300">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400">
            Innovative solutions at the intersection of AI and creativity
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover={{ scale: 1.02 }}
              className={`group cursor-pointer relative overflow-hidden rounded-xl backdrop-blur-lg
                ${index === activeIndex ? 'ring-2 ring-offset-2 ring-offset-gray-900 ring-blue-500/50' : ''}`}
              onClick={() => handleProjectClick(project)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative p-6 bg-gray-800/50 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} bg-opacity-20 mr-4
                    transform group-hover:scale-110 transition-transform duration-500`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm bg-opacity-30 backdrop-blur-sm
                        ${index === activeIndex ? 'bg-blue-900 text-blue-300' : 'bg-purple-900 text-purple-300'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Stats */}
                {project.stats && (
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-blue-400">{value}</div>
                        <div className="text-sm text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Progress Indicator */}
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-blue-400">Progress</span>
                    <span className="text-sm text-gray-500">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                      onClick={e => e.stopPropagation()}
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <button
                      onClick={() => window.open(project.live, '_blank')}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600/50 hover:bg-blue-600/70 
                        rounded-lg transition-colors duration-300"
                    >
                      <FiPlay className="w-5 h-5" />
                      <span>Live Demo</span>
                    </button>
                  )}
                  <motion.button
                    onClick={() => handleProjectClick(project)}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-500"
                  >
                    Learn More <FiArrowRight />
                  </motion.button>
                  <button 
                    onClick={() => window.open(project.link, '_blank')}
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    View Project
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={e => e.stopPropagation()}
                className="bg-gray-800/90 backdrop-blur-lg rounded-xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-lg bg-gradient-to-br ${selectedProject.color} bg-opacity-20`}>
                    {selectedProject.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Project Stats in Modal */}
                {selectedProject.stats && (
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {Object.entries(selectedProject.stats).map(([key, value]) => (
                      <div key={key} className="text-center p-4 bg-gray-700/30 rounded-lg backdrop-blur-sm">
                        <div className="text-2xl font-bold text-blue-400 mb-1">{value}</div>
                        <div className="text-sm text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3 bg-gray-700/30 p-4 rounded-lg backdrop-blur-sm"
                      >
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`px-4 py-2 rounded-lg text-sm bg-gradient-to-r ${selectedProject.color} bg-opacity-30 backdrop-blur-sm
                          text-white font-medium`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Collaborators */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Collaborators</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.collaborators.map((collaborator, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700/30 rounded-lg backdrop-blur-sm"
                      >
                        <FiUser className="w-4 h-4 text-blue-400" />
                        <span className="text-gray-300">{collaborator}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Testimonials */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Testimonials</h4>
                  <div className="space-y-4">
                    {selectedProject.testimonials.map((testimonial, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 bg-gray-700/30 rounded-lg backdrop-blur-sm"
                      >
                        <p className="text-gray-300">"{testimonial}"</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Video Preview */}
                {selectedProject.video && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Video Preview</h4>
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={selectedProject.video}
                        title="Project Video Preview"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-4">
                  {selectedProject.github && (
                    <button
                      onClick={() => window.open(selectedProject.github, '_blank')}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-700/70 
                        rounded-lg transition-colors duration-300"
                    >
                      <FiGithub className="w-5 h-5" />
                      <span>View Source</span>
                    </button>
                  )}
                  {selectedProject.live && (
                    <button
                      onClick={() => window.open(selectedProject.live, '_blank')}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600/50 hover:bg-blue-600/70 
                        rounded-lg transition-colors duration-300"
                    >
                      <FiPlay className="w-5 h-5" />
                      <span>Live Demo</span>
                    </button>
                  )}
                  <button
                    onClick={() => window.open(selectedProject.resourceUrl, '_blank')}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600/50 hover:bg-green-600/70 
                      rounded-lg transition-colors duration-300"
                  >
                    <FiDownload className="w-5 h-5" />
                    <span>Download Resources</span>
                  </button>
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: selectedProject.title,
                          text: selectedProject.description,
                          url: window.location.href
                        });
                      }
                    }}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-700/70 
                      rounded-lg transition-colors duration-300"
                  >
                    <FiShare2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
