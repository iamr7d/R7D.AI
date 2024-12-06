import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiGlobe, FiInstagram, FiTwitter } from 'react-icons/fi';

const Header = () => {
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

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          
        </motion.div>

        <motion.div 
          className="flex justify-center space-x-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="text-gray-300 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          
        </motion.div>

        {/* Scroll indicator */}
      
      <div className="absolute bottom-10 w-full flex justify-center">
        
      </div>
      </div>
    </header>
  );
};

export default Header;
