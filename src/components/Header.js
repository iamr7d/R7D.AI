import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiGlobe, FiInstagram, FiTwitter, FiSend } from 'react-icons/fi';
import { IoMdSend } from 'react-icons/io';
import { FaRobot } from 'react-icons/fa';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.REACT_APP_GROQ_API_KEY,
  dangerouslyAllowBrowser: true
});

const systemPrompt = `You are Virtual Rahulraj, an AI assistant for Rahulraj P V's portfolio website.
IMPORTANT: Keep all responses extremely short and concise (1-2 sentences max).

Education:
- MTech in Computer Science & Engineering (AI) at Digital University Kerala (2022-2024)
- Post Graduate Diploma in Data Science & Analytics from Kannur University (2021-2022)
- Master of Science in Physics from Kannur University (2019-2021)

Work Experience:
- AI R&D Engineer at Kerala Blockchain Academy (Dec 2024-Present)
- Co-Founder at KnowLumi (July 2024-Present)
- Research Intern at IIM Kozhikode (July-Dec 2023)
- Data Scientist Intern at First Principle Labs (Feb-June 2022)
- AI R&D Intern at PixDynamics (Feb-May 2022)
- Research Intern at CSIR National Physical Laboratory (Apr-June 2021)

Research Papers:
1. "Monetize the dual: A data analytic approach for native language & prequel movies popularity analysis" (ICDAI'23)
2. "Changes in Atmospheric Air Quality in the Wake of a Lockdown Related to Covid-19" (IJAES'22)

Notable Projects:
1. India's First AI Campus Radio
2. Predictive Algorithm for Movie Success
3. Real-Time Film Analysis with Computer Vision & Neuroscience
4. LLM Based Gamified Decision Tree-Based Story Writing Tool

Awards:
- Outstanding Student Award, Digital University Kerala
- Smart India Hackathon 2023 - University Level (First)
- Cisco ThingQbator National Hackathon (Second)
- Sharktank Hackathon - Google DSC (First)
- Directed 'Silent Spring' musical album (Amazon Prime)

Skills:
- Programming: Python, R
- Technologies: ML, CV, Deep Learning, LLMs, GenAI, NLP, Data Science
- Tools: TensorFlow, PyTorch, LangChain, PEFT, LoRA, GitHub
- Creative: Screenplay Writing, Film Direction, Photography

Leadership:
- Google Developer Student Club WoW Kerala State 2023 Media Team Lead
- Institution Innovation Club Student Lead at DUK
- COO of Innovation Club & Student Placement Cell coordinator at DUK

Contact:
Email: rahulraj.cs22@duk.ac.in
Phone: +91 9061360912
Website: sites.google.com/duk.ac.in/rahulrajpv/bio`;

const Header = () => {
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (answer && !isLoading) {
      const lines = answer.split('\n').filter(line => line.trim());
      setDisplayedLines(lines);
    }
  }, [answer, isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setDisplayedLines([]);

    try {
      const response = await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: message,
          },
        ],
        model: "mixtral-8x7b-32768",
        temperature: 0.7,
        max_tokens: 2048,
        stream: true,
      });

      let fullResponse = "";
      for await (const chunk of response) {
        const content = chunk.choices[0]?.delta?.content || "";
        fullResponse += content;
        const lines = fullResponse.split("\n");
        setDisplayedLines([...lines]);
      }
    } catch (err) {
      console.error("Error:", err);
      if (err.message?.includes("rate limit exceeded")) {
        setError("Rate limit exceeded. Please try again in about an hour.");
      } else {
        setError("Failed to get response. Please try again.");
      }
    } finally {
      setIsLoading(false);
      setMessage("");
    }
  };

  const socialLinks = [
    {
      name: 'Website',
      icon: <FiGlobe className="w-6 h-6" />,
      url: 'https://sites.google.com/duk.ac.in/rahulrajpv/bio'
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/rahulrajpvr7d/'
    },
    {
      name: 'GitHub',
      icon: <FiGithub className="w-6 h-6" />,
      url: 'https://github.com/iamr7d'
    },
    {
      name: 'Instagram',
      icon: <FiInstagram className="w-6 h-6" />,
      url: 'https://www.instagram.com/rahulrajpvr7d/'
    },
    {
      name: 'Twitter',
      icon: <FiTwitter className="w-6 h-6" />,
      url: 'https://x.com/iam_r7d'
    }
  ];

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex flex-col items-center justify-center px-4"
      >
        <div className="flex flex-col items-center space-y-8 mb-12">
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/80 hover:text-white transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="w-[800px] mx-auto relative min-h-[400px] flex flex-col items-center">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 text-white/90 mb-2">
              <FaRobot className="text-xl" />
              <span>Ask me anything about Rahulraj!</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="relative flex items-center w-full sticky top-0 z-10 mb-16">
            <div className="relative flex-1">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full px-6 py-3 bg-[#1e2536]/50 backdrop-blur-md text-white placeholder-gray-400 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                disabled={isLoading}
              />
            </div>
            <button
              type="submit"
              className="absolute right-0 h-full px-8 text-white rounded-r-xl flex items-center justify-center transition-all bg-[#4477ff] hover:bg-[#3366ff] disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!message.trim() || isLoading}
            >
              <FiSend className="text-xl" />
            </button>
          </form>

          <div className="absolute w-full top-32">
            <AnimatePresence>
              {(error || displayedLines.length > 0) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-2xl"
                >
                  <div className="text-white">
                    {error ? (
                      <div className="text-red-400 text-center">{error}</div>
                    ) : (
                      <motion.div 
                        className="space-y-1 text-center max-w-2xl mx-auto"
                      >
                        {displayedLines.map((line, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                          >
                            <p className="text-lg text-white/90">
                              {line.split(' ').map((word, wordIndex) => (
                                <motion.span
                                  key={wordIndex}
                                  initial={{ filter: 'blur(12px)', opacity: 0, y: 10 }}
                                  animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                                  transition={{ 
                                    duration: 0.5,
                                    delay: wordIndex * 0.05,
                                    ease: [0.4, 0.0, 0.2, 1],
                                    opacity: { duration: 0.5 },
                                    filter: { duration: 0.8 },
                                    y: { duration: 0.4 }
                                  }}
                                  className="inline-block mx-1 bg-clip-text"
                                  style={{
                                    textShadow: '0 0 10px rgba(255,255,255,0.1)'
                                  }}
                                >
                                  {word}
                                </motion.span>
                              ))}
                            </p>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
