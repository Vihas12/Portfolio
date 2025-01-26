import React from "react";
import { motion } from "framer-motion";

import "../Style/Project.css";

const projects = [
  {
    title: "Abusive Language Detection System for Blogging Website",
    description:
      "Developed a system that detects abusive language in comments on a blogging website. The system uses a machine learning model trained on a dataset of abusive and non-abusive comments.",
  },
  {
    title: "Silent Speak",
    description:
      "Silent Speak is an Indian Sign Language learning platform. It is a web application for users to learn Indian Sign Language.",
  },
];

export default function Project() {
  return (
    <div id='projects' className="project-container">
      <div className="blur-sphere sphere-1"></div>
      <div className="blur-sphere sphere-2"></div>

      <section id="projects" className="projects-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="project-card"
            >
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
