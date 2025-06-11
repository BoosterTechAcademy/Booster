
import "../../App.css";
import React, { useEffect, useState } from 'react';

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkTheme);
  }, [darkTheme]);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <h1>
          Booster &gt;&gt;<span>Academy</span>
        </h1>
      </div>

      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
        &#9776;
      </button>

      <div className={`nav-content ${menuOpen ? 'show' : ''}`}>
        <ul>
          <li>
            <a href="../../main_page.html">Home</a>
          </li>
        </ul>

        <div className="actions">
          <p id="usernameDisplay" style={{ display: 'none' }}></p>
          <button id="signUpBtn">Sign Up</button>
          <button id="logoutBtn" style={{ display: 'none' }}>Logout</button>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            <img
              src={
                darkTheme
                  ? 'https://img.icons8.com/ios-filled/50/sun--v1.png'
                  : 'https://img.icons8.com/ios-filled/50/moon-symbol.png'
              }
              alt={darkTheme ? 'Light Mode' : 'Dark Mode'}
              id="themeIcon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

