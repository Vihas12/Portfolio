import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

import emailIcon from "../images/socials/envelope.svg";
import linkedinIcon from "../images/socials/linkedin.svg";
import githubIcon from "../images/socials/github.svg";

import "../Style/Footer.css";

function Footer(props) {
  const {
    email,
    gitHub,
    linkedIn,
} = props;

  return (
    <div id="contact" className="footer-container">
      <motion.div
        className="contact-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="contact-title">Feel free to reach out:</h2>
        <ul className="contact-list">
          <motion.li
            className="contact-item"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={emailIcon} alt="Email" className="contact-icon" />
            <span>Email: {email}</span>
          </motion.li>
          <motion.li
            className="contact-item"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
            <span>
              LinkedIn:{linkedIn}
            </span>
          </motion.li>
          <motion.li
            className="contact-item"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={githubIcon} alt="GitHub" className="contact-icon" />
            <span>
              GitHub: {gitHub}
              </span>
          </motion.li>
        </ul>
              </motion.div>

      <footer className="footer">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </footer>
    </div>
  );
}



Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  email: PropTypes.string,
  gitHub: PropTypes.string,
  linkedIn: PropTypes.string,
};

export default Footer;