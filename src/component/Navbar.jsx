import React from 'react';

function Navbar({ activeSection }) {
  const navItems = [
    { id: 'home', icon: 'bi-house-fill', label: 'Home' },
    { id: 'about', icon: 'bi-file-person', label: 'About' },
    { id: 'resume', icon: 'bi-file-earmark-check', label: 'Resume' },
    { id: 'contact', icon: 'bi-person-lines-fill', label: 'Contact' },
  ];

  return (
    <ul className='p-[40px]'>
      {navItems.map(({ id, icon, label }) => (
        <li
          key={id}
          style={{ listStyleType: activeSection === id ? 'disc' : 'circle' }}
        >
          <a href={`#${id}`} className={activeSection === id ? 'active' : ''}>
            <i className={`bi ${icon}`}></i> {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
