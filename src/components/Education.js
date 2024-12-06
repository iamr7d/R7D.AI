import React from 'react';
import { FaBook, FaUniversity, FaLaptopCode, FaAtom, FaAward, FaMedal, FaFilm } from 'react-icons/fa';

const educationData = [
  {
    degree: "MTech in Computer Science & Engineering",
    institution: "Digital University Kerala (Formerly IIITMK)",
    specialization: "With specialization in AI",
    duration: "August 2022 - August 2024",
    department: "",
    icon: <FaLaptopCode className="text-blue-400 text-2xl mr-4" />, 
    awards: [
      { title: "Outstanding Student Award", icon: <FaAward className="mr-2" /> },
      { title: "Fifth Rank", icon: <FaMedal className="mr-2" /> }
    ],
    skills: ["Machine Learning", "Deep Learning", "Natural Language Processing"]
  },
  {
    degree: "Post Graduate Diploma Data Science & Analytics",
    institution: "Kannur University",
    specialization: "",
    duration: "August 2021 - July 2022",
    department: "Department of IT",
    icon: <FaUniversity className="text-blue-400 text-2xl mr-4" />, 
    awards: [
      { title: "Third Rank", icon: <FaMedal className="mr-2" /> }
    ],
    skills: ["Data Analysis", "Statistical Modeling", "Data Visualization"]
  },
  {
    degree: "Master of Science in Physics",
    institution: "Kannur University",
    specialization: "",
    duration: "July 2019 - July 2021",
    department: "Department of Physics",
    icon: <FaAtom className="text-blue-400 text-2xl mr-4" />, 
    awards: [
      { title: "Best Screenplay, Kannur University Kalolsavam", icon: <FaFilm className="mr-2" /> }
    ],
    skills: ["Quantum Mechanics", "Electrodynamics", "Statistical Physics"]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 flex justify-center items-center">
            <FaBook className="text-blue-500 mr-2" />
            Education
          </h2>
        </div>
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-300 flex items-center">
              {edu.icon}
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-blue-400 mb-2">{edu.degree}</h3>
                <p className="text-lg text-gray-300 mb-1">{edu.institution}</p>
                {edu.specialization && <p className="text-sm text-gray-400 mb-1">{edu.specialization}</p>}
                {edu.department && <p className="text-sm text-gray-400 mb-1">{edu.department}</p>}
                <p className="text-sm text-gray-500">{edu.duration}</p>
                {edu.awards && edu.awards.map((award, i) => (
                  <p key={i} className="text-sm text-yellow-400 mt-2 flex items-center">{award.icon}{award.title}</p>
                ))}
                {edu.skills && <div className="mt-2">{edu.skills.map((skill, i) => (
                  <span key={i} className="inline-block bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs mr-2 mb-1">{skill}</span>
                ))}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
