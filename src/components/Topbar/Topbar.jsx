import "../../App.css";
import React, { useEffect, useState } from "react";

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [email, setEmail] = useState("");
  const [signedIn, setSignedIn] = useState(() => {
    return !!localStorage.getItem("userEmail");
  });
  const [showSignupForm, setShowSignupForm] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkTheme);
    localStorage.setItem("theme", darkTheme ? "dark" : "light");
  }, [darkTheme]);

  const toggleTheme = () => setDarkTheme((prev) => !prev);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleSignupClick = () => {
    setShowSignupForm(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setSignedIn(false);
    setShowSignupForm(false);
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save in localStorage for UI toggle
    localStorage.setItem("userEmail", email);
    setSignedIn(true);
    setShowSignupForm(false);

    // Submit form manually to Netlify
    const form = e.target;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      body: data,
    }).catch((error) => alert("Form submission error: " + error));
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

      <div className={`nav-content ${menuOpen ? "show" : ""}`}>
        <ul>
          <li>
            <a href="../../main_page.html">Home</a>
          </li>
        </ul>

        <div className="actions">
          {signedIn ? (
            <>
              <p id="usernameDisplay">Signed in as: {localStorage.getItem("userEmail")}</p>
              <button id="logoutBtn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button id="signUpBtn" onClick={handleSignupClick}>Sign Up</button>
              {showSignupForm && (
              <form
    name="signup"
    method="POST"
    data-netlify="true"
    onSubmit={handleSubmit}
    className="signup-form"
  >
    <button
      type="button"
      className="close-btn"
      onClick={() => setShowSignupForm(false)}
      aria-label="Close"
    >
      &times;
    </button>
    
    <input type="hidden" name="form-name" value="signup" />
    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    <button type="submit">Submit</button>
  </form>
              )}
            </>
          )}

          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            <img
              src={
                darkTheme
                  ? "https://img.icons8.com/ios-filled/50/sun--v1.png"
                  : "https://img.icons8.com/ios-filled/50/moon-symbol.png"
              }
              alt={darkTheme ? "Light Mode" : "Dark Mode"}
              id="themeIcon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
