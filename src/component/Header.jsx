import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './../sass/component/header.scss';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'about', 'resume', 'contact'];
    for (let id of sections) {
      const section = document.getElementById(id);
      if (section && window.scrollY + 150 >= section.offsetTop) {
        setActiveSection(id);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <aside className={`aside ${menuOpen ? 'open' : ''}`}>
        <div className="portfolio py-[40px] flex justify-center text-indigo-700 font-bold text-xl">
         Portfolio
        </div>

        <nav className="my-8 desktop-nav hidden md:block">
          <Navbar activeSection={activeSection} />
        </nav>

        <div className="media flex justify-center gap-5 border mt-5 p-1">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-linkedin"></i>
          <i className="bi bi-github"></i>
        </div>

        <div className="menuu block md:hidden cursor-pointer text-center mt-4" onClick={toggleMenu}>
          <i className="bi bi-list text-2xl"></i>
        </div>

        {menuOpen && (
          <div className="nav-items md:hidden">
            <Navbar activeSection={activeSection} />
          </div>
        )}
      </aside>
    </header>
  );
}

export default Header;