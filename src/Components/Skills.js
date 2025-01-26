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
import { SiExpress, SiMongodb, SiPostgresql } from "react-icons/si";

import "../Style/Skills.css";

const skillsData = {
  frontend: [
    { name: "HTML", icon: <FaHtml5 />, level: 90 },
    { name: "CSS", icon: <FaCss3Alt />, level: 85 },
    { name: "JavaScript", icon: <FaJs />, level: 80 },
    { name: "React", icon: <FaReact />, level: 75 },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs />, level: 80 },
    { name: "Express", icon: <SiExpress />, level: 70 },
    { name: "MongoDB", icon: <SiMongodb />, level: 75 },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: 60 },
  ],
  tools: [
    { name: "Git", icon: <FaGitAlt />, level: 90 },
    { name: "Docker", icon: <FaDocker />, level: 60 },
  ],
  softskills: [
    { name: "Communication", icon: "💬", level: 95 },
    { name: "Teamwork", icon: "🤝", level: 90 },
    { name: "Problem Solving", icon: "🧩", level: 85 },
  ],
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    <section className="skills-section">
      <motion.h2
        className="text-3xl font-semibold text-teal-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="skills-categories">
        <motion.button
          initial={{ opacity: 0 }}
          whileHover={{ backgroundColor: "rgb(173, 37, 37)" }}
          whileTap={{ backgroundColor: "rgb(188, 63, 63)" }}
          whileInView={{ opacity: 1 }}
          onClick={() => setActiveCategory("frontend")}
        >
          Frontend
        </motion.button>
        <motion.button
          initial={{ opacity: 0 }}
          whileHover={{ backgroundColor: "rgb(173, 37, 37))" }}
          whileTap={{ backgroundColor: "rgb(188, 63, 63)" }}
          whileInView={{ opacity: 1 }}
          onClick={() => setActiveCategory("backend")}
        >
          Backend
        </motion.button>
        <motion.button
          initial={{ opacity: 0 }}
          whileHover={{ backgroundColor: "rgba(220, 220, 220, 1)" }}
          whileTap={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
          whileInView={{ opacity: 1 }}
          onClick={() => setActiveCategory("tools")}
        >
          Tools
        </motion.button>
        <motion.button
          initial={{ opacity: 0 }}
          whileHover={{ backgroundColor: "rgba(220, 220, 220, 1)" }}
          whileTap={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
          whileInView={{ opacity: 1 }}
          onClick={() => setActiveCategory("softskills")}
        >
          Soft Skills
        </motion.button>
      </div>

      <div
        className="skills-list"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {skillsData[activeCategory].map((skill, index) => (
          <motion.div
            key={index}
            className="skill-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div
              className="icon"
              style={{ fontSize: "2rem", marginBottom: "1rem" }}
            >
              {skill.icon}
            </div>
            <h3>{skill.name}</h3>
            <p>{skill.level}%</p>
            <div>
              <div className="skill-level"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
