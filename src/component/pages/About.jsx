import React from 'react';
import { motion } from 'framer-motion';
import { Flex, Progress } from 'antd';
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
          <li>Ant Design</li>
        </ul>
      </motion.div>
      <div className="skill ">
        <h2>Skills</h2>
        <div className="skill-block">
        <span>Figma</span>
        <Progress percent={70}  trailColor="#ffff" className="custom-progress"/>
          <span>HTML</span>
        <Progress percent={90}  trailColor="#ffff" className="custom-progress"/>
        <span>CSS</span>
          <Progress percent={70} trailColor="#ffff" className="custom-progress" />
          <span>JavaScript</span>
        <Progress percent={60} trailColor="#ffff" className="custom-progress"/>
        <span>React</span>
        <Progress percent={50} trailColor="#ffff" className="custom-progress"/>
        </div>
      </div>
    </section>
  );
}

export default About;