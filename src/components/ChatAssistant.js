import React, { useState, useRef, useEffect } from 'react';
import Groq from 'groq-sdk';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdSend, IoMdClose } from 'react-icons/io';
import { FaRobot } from 'react-icons/fa';

const groq = new Groq({ 
  apiKey: process.env.REACT_APP_GROQ_API_KEY,
  dangerouslyAllowBrowser: true
});

const getTimeBasedGreeting = () => {
  const currentHour = new Date().getHours();
  if (currentHour < 12) return 'Good morning!';
  if (currentHour < 18) return 'Good afternoon!';
  return 'Good evening!';
};

const initialGreeting = `${getTimeBasedGreeting()} I'm Virtual Rahulraj. How can I help you?`;

const systemPrompt = `You are Virtual Rahulraj, an AI assistant for Rahulraj's portfolio website. Keep responses concise and friendly. Only provide detailed information when specifically asked.

Key Information:
- MTech student at Digital University Kerala (AI)
- AI R&D Engineer at Kerala Blockchain Academy
- Co-founder of KnowLumi
- Research focus: Generative AI and Film Analytics
- Notable projects: AI Campus Radio, Movie Success Prediction
- Skills: Python, ML, CV, DL, LLMs, Filmmaking, Chatbots, AI, Machine Learning, NLP

Respond briefly to general questions. Provide details only when users ask specific questions about education, projects, research, or achievements.`;

const suggestedTopics = [
  { label: 'Projects', query: 'Tell me about your projects' },
  { label: 'Research Papers', query: 'What research papers have you published?' },
  { label: 'Achievements', query: 'What are your notable achievements?' },
  { label: 'Future Plans', query: 'What are your future plans?' }
];

const ChatAssistant = () => {
  // Separate state for API messages and display messages
  const [messages, setMessages] = useState([
    { role: 'system', content: systemPrompt },
    { role: 'assistant', content: initialGreeting }
  ]);
  const [displayMessages, setDisplayMessages] = useState([
    { role: 'assistant', content: initialGreeting }
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleError = (error) => {
    let errorMessage = "An error occurred. Please try again.";
    
    if (error.message.includes("rate limit exceeded")) {
      errorMessage = "The AI is currently experiencing high demand. Please try again in a few minutes.";
    }
    
    setMessages(prev => [...prev, {
      role: 'assistant',
      content: errorMessage,
      error: true
    }]);
    setIsLoading(false);
  };

  const handleUserQuery = async (query) => {
    setInput('');
    const userMessage = { role: 'user', content: query };
    
    // Update both message states
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setDisplayMessages(prevMessages => [...prevMessages, userMessage]);

    setIsLoading(true);

    try {
      const completion = await groq.chat.completions.create({
        messages: [...messages, userMessage],
        model: 'llama-3.2-90b-vision-preview',
        temperature: 0.7,
        max_tokens: 1000,
        stream: false
      });

      const assistantMessage = { 
        role: 'assistant', 
        content: completion.choices[0].message.content 
      };
      
      // Update both message states
      setMessages(prevMessages => [...prevMessages, assistantMessage]);
      setDisplayMessages(prevMessages => [...prevMessages, assistantMessage]);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [displayMessages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const renderYouTubeEmbed = (url) => {
    const videoId = getYouTubeVideoId(url);
    if (!videoId) return null;
    
    return (
      <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  };

  const renderSuggestedTopics = () => (
    <div className="flex flex-col space-y-2 mt-4 items-start">
      {suggestedTopics.map((topic, index) => (
        <button
          key={index}
          className="bg-white bg-opacity-20 backdrop-blur-md text-white py-1 px-3 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105 focus:outline-none"
          onClick={() => handleUserQuery(topic.query)}
        >
          {topic.label}
        </button>
      ))}
    </div>
  );

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl flex items-center justify-center z-50 hover:scale-110 transition-transform backdrop-blur-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaRobot size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 w-96 bg-transparent bg-opacity-20 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden z-50 border border-gray-300"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 flex justify-between items-center rounded-t-xl shadow-md">
              <div className="flex items-center space-x-2">
                <FaRobot className="text-white" size={20} />
                <h2 className="text-lg font-semibold text-white">Virtual Rahulraj</h2>
              </div>
              <button 
                onClick={toggleChat}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <IoMdClose size={24} />
              </button>
            </div>
            
            {/* Messages */}
            <div 
              className="h-96 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent bg-transparent"
            >
              {displayMessages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-xl ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : msg.error ? 'bg-red-600 text-white' : 'bg-gray-700 text-white'
                  } bg-opacity-70 shadow-lg backdrop-blur-md drop-shadow-md`}>
                    {msg.content.includes('youtube.com') || msg.content.includes('youtu.be') 
                      ? (
                        <>
                          <p className="mb-2">{msg.content}</p>
                          {renderYouTubeEmbed(msg.content)}
                        </>
                      ) 
                      : msg.content
                    }
                  </div>
                </motion.div>
              ))}
              {renderSuggestedTopics()}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-300 bg-transparent backdrop-blur-lg">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleUserQuery(input)}
                  placeholder="Ask me anything..."
                  className="flex-1 p-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <motion.button
                  onClick={() => handleUserQuery(input)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md"
                >
                  {isLoading ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <IoMdSend size={20} />
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatAssistant;
