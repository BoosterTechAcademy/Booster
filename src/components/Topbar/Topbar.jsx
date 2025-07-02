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
  const [showOffer, setShowOffer] = useState(false);
  // const [showThankYou, setShowThankYou] = useState(false); // ✅ thank you popup

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkTheme);
    localStorage.setItem("theme", darkTheme ? "dark" : "light");
  }, [darkTheme]);

  const toggleTheme = () => setDarkTheme((prev) => !prev);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleSignupClick = () => setShowSignupForm(true);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setSignedIn(false);
    setShowSignupForm(false);
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userEmail", email);
    setSignedIn(true);
    setShowSignupForm(false);

    const form = e.target;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      body: data,
    })
      // .then(() => {
      //   setShowThankYou(true);
      //   setTimeout(() => setShowThankYou(false), 3000); // ✅ Auto-hide thank you
      // })
      .catch((error) => alert("Form submission error: " + error));
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setShowOffer(true);
  };

  return (
    <>
      {/* ✅ Hidden dummy form for Netlify build bot */}
      <form name="signup" netlify hidden>
        <input type="email" name="email" />
      </form>

      <div className="navbar">
        <div className="logo">
          <h1>
            Booster<span>Learning Partner</span>
          </h1>
        </div>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          &#9776;
        </button>

        <div className={`nav-content ${menuOpen ? "show" : ""}`}>
          <ul className="home-nav">
            <li>
              <a href="#" onClick={handleHomeClick} className="home-link">
                Home
              </a>
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
                    <input type="hidden" name="form-name" value="signup" />
                    <button
                      type="button"
                      className="close-btn"
                      onClick={() => setShowSignupForm(false)}
                      aria-label="Close"
                    >
                      &times;
                    </button>

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

      {/* ✅ Floating Welcome Offer Popup */}
      {showOffer && (
        <div className="floating-popup">
          <button className="popup-close" onClick={() => setShowOffer(false)}>&times;</button>
          <div className="popup-message">
            <h2>🎉 Welcome to <strong>Booster Learning</strong>!</h2>
            <p>You're exploring a prototype of our upcoming all-in-one learning platform...</p>
            <p><strong>🌟 What’s coming soon:</strong></p>
            <ul className="popup-features">
              <li>✅ Aptitude training & logical reasoning</li>
              <li>💻 Programming practice for top-tier tech interviews</li>
              <li>🧾 Curated preparation roadmaps & sheets</li>
              <li>🎬 High-quality video tutorials</li>
            </ul>
            <p>🚧 Full platform launch coming soon...</p>
            <p>💬 Got ideas or feedback? Help us improve and grow!</p>
            <a href="https://chat.whatsapp.com/FzBoYKWEw4S5tSvwS5Qxxz" target="_blank" rel="noreferrer">
              📌 Join our Feedback Community
            </a>
          </div>
        </div>
      )}

      {/* ✅ Thank You Message */}
      {/* {showThankYou && (
        <div className="thank-you-popup">
          <p>✅ Thank you for signing up!</p>
        </div>
      )} */}
    </>
  );
};

export default Topbar;
