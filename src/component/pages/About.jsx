import React from 'react';
import { motion } from 'framer-motion';
import './../../sass/component/about.scss';

function About() {
  return (
    <section id="about" className="about-container">
      <motion.h2 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I'm Dipesh Rai, a front-end developer passionate about crafting clean, elegant, and user-friendly interfaces. I specialize in React, Tailwind, SCSS, and modern web tools.
      </motion.p>

      <motion.div 
        className="skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <h3>Skills:</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3 / SCSS</li>
          <li>JavaScript / ES6+</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
        </ul>
      </motion.div>
    </section>
  );
}

export default About;