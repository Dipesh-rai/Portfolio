import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import image from './../assets/dipesh.png'; 
import "./../sass/component/home.scss"

function Banner() {
  return (
    <section className="banner-container" id="home">
      <div className="text-content">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hey, I'm <span className="highlight">Dipesh Rai</span>
        </motion.h1>

        <TypeAnimation
          sequence={[
            'Front-End Developer',
            2000,
            'React Enthusiast',
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          wrapper="h2"
          className="type-text"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          I create modern, responsive websites and smooth user interfaces using React, Tailwind, SCSS & more.
        </motion.p>

        <motion.button
          className="cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
         <a href={`#contact`}> Let's Talk </a>
        </motion.button>
      </div>
 
      <div className="image-container">
        <motion.img
          src={image}
          alt="Dipesh Rai"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </div>
    </section>
  );
}

export default Banner;
