import React, { useRef, useState, useEffect } from 'react';
import { links, social } from './data.js';
import { FaBars } from 'react-icons/fa';
const Navbar = () => {
  const [show, setShow] = useState(false);
  const containerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleNavbar = () => {
    setShow(!show);
  };
  useEffect(() => {
    let linkHeight = linksRef.current.getBoundingClientRect().height;
    if (show) {
      containerRef.current.style.height = `${linkHeight}px`;
    } else {
      containerRef.current.style.height = '0';
    }
  }, [show]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <p>logo</p>
          <button onClick={toggleNavbar} className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={containerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.url}>{link.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
