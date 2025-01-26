import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import { SiExpress, SiMongodb} from "react-icons/si";

import "../Style/Skills.css"

const skillsData = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 />, level: 90 },
    { name: "CSS", icon: <FaCss3Alt />, level: 85 },
    { name: "JavaScript", icon: <FaJs />, level: 80 },
    { name: "React", icon: <FaReact />, level: 85 },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs />, level: 80 },
    { name: "Express", icon: <SiExpress />, level: 70 },
    { name: "MongoDB", icon: <SiMongodb />, level: 75 },
 ],
  Tools: [
    { name: "Git & GitHub", icon: <FaGitAlt />, level: 80 },
    { name: "Docker", icon: <FaDocker />, level: 50 },
  ],
  Softskills: [
    { name: "Communication", icon: "💬", level: 80 },
    { name: "Teamwork", icon: "🤝", level: 90 },
    { name: "Problem Solving", icon: "🧩", level: 85 },
  ],
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <div className="skills-container">
        <motion.h2
        className="skill-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
    <section className="skills-section">
      

      <div className="skills-categories">
        <motion.div
        className="skill-box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          onClick={() => setActiveCategory("Frontend")}
        >
          Frontend
        </motion.div>
        <motion.div
        className="skill-box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
 
          onClick={() => setActiveCategory("Backend")}
        >
          Backend
        </motion.div>
        <motion.div
        className="skill-box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => setActiveCategory("Tools")}
        >
          Tools
        </motion.div>
        <motion.div
        className="skill-box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => setActiveCategory("Softskills")}
        >
          Soft Skills
        </motion.div>
      </div>

      <div className="skills-list">
        <h2>{activeCategory}</h2>
        {skillsData[activeCategory].map((skill, index) => (
          <motion.div
            key={index}
            className="skill-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="skill-info">
            <div className="icon">
              {skill.icon}
            </div>
            <h3>{skill.name}</h3>
            </div>
            <p>{skill.level}%</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${skill.level}%` }}></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default SkillsSection;
