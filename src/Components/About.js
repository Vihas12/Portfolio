import React from 'react';
import { motion } from 'framer-motion';

import '../Style/About.css';

const dis = "I am a Full Stack Developer with a passion for Artificial Intelligence and Machine Learning. I am persuing my B.E in Computer Science and Information Technology. I am always eager to learn new technologies.";

const skill = [
  "Problem solving",
  "Web design",
  "User experience",
  "User interface",
  "Frontend development",
  
];


const details = "I am a Full Stack Developer with a passion for Artificial Intelligence and Machine Learning. I am passionate about Learning new technologies and implementing them in real life progects.I am ready to take new challanges and learn new things";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">

        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }} 
          viewport={{ once: true, amount: 0.5 }} 
        >
          About Myself
        </motion.h2>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }} 
          viewport={{ once: true, amount: 0.4 }} 
        >
          <p className="about-text">
            {dis}
          </p>
        </motion.div>
        <hr />
        <motion.div
          className="about-content"
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }} 
          viewport={{ once: true, amount: 0.4 }} 
        >
          <ul>
            {skill.map((skills) => (
            <li key={skills}>{skills}</li>
          ))}
        </ul>
        </motion.div>
        
        <hr />
          <motion.div
            className="about-details"
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }} 
            >
              <p className='about-text'>
                {details}
              </p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
