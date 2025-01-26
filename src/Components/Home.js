import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from "prop-types";
import '../Style/Home.css';
import ManWithComputer from '../images/man-with-computer.png';

const Home = ({name, title, info}) => {
  return (
    <div id='home'>
    <section className='hero-container'>
      <header className="home-header">
        <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay:0.8,duration: 0.8 }}>
        Hello,</motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay:0.65 ,duration: 0.8 }}>
         I am {name}
        </motion.h1>
        <motion.p
          className='home-title'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}>
          {title}
        </motion.p>
        <motion.p
          className='home-detail'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}>
          {info}
          </motion.p>
      </header>

      <div className="home-image">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            scale: { type: "spring", visualDuration: 0.8, bounce: 0.4 },
          }}>
          <img src={ManWithComputer} alt="About me illustration" />
        </motion.div>
      </div>
    </section>
    </div>
  );
}

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
