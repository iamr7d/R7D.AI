import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiInstagram, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail className="text-2xl" />,
      label: "Email",
      value: "rahulrajpvr7d.here@gmail.com",
      link: "mailto:rahulrajpvr7d.here@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FiPhone className="text-2xl" />,
      label: "Phone",
      value: "+91 9061360912",
      link: "tel:+919061360912",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <HiLocationMarker className="text-2xl" />,
      label: "Location",
      value: "Kerala, India",
      color: "from-red-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      icon: <FiInstagram className="text-2xl" />,
      label: "Instagram",
      link: "https://www.instagram.com/rahulrajpvr7d/",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FiLinkedin className="text-2xl" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/rahulrajpvr7d/",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: <FiGithub className="text-2xl" />,
      label: "GitHub",
      link: "https://github.com/iamr7d",
      color: "from-gray-700 to-gray-500"
    },
    {
      icon: <FiTwitter className="text-2xl" />,
      label: "Twitter",
      link: "https://x.com/iam_r7d",
      color: "from-blue-400 to-cyan-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello! 
            I'm always excited to connect with fellow creators and innovators.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              variants={itemVariants}
              className={`bg-gradient-to-r ${info.color} p-[1px] rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300`}
            >
              <div className="bg-gray-900 p-6 h-full rounded-xl">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center mb-4`}>
                    {info.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{info.label}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-400">{info.value}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Connect on Social Media</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className={`w-12 h-12 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center transform hover:scale-110 transition-transform duration-300`}
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
