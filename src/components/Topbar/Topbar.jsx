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
  const [showOffer, setShowOffer] = useState(false); // ✅ Popup state

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
    }).catch((error) => alert("Form submission error: " + error));
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setShowOffer(true); // ✅ Show popup
  };

  return (
    <>
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
          <ul>
            <li>
              <a href="#" onClick={handleHomeClick}>Home</a> {/* ✅ Popup trigger */}
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

      {/* ✅ Floating Popup */}
      {showOffer && (
        <div className="floating-popup">
          <button className="popup-close" onClick={() => setShowOffer(false)}>&times;</button>
          <div className="popup-message">
            <h3>🎉 Welcome to Booster Learning!</h3>
            <p>This is a prototype of our major working project combining trending tech and interview related preparation LMS.</p>
            <p>Main features(combing apptitude,all high tech company used programming language,preparation sheet and video tutorials..etc..) will be released soon with new address. Stay tuned!</p>
            <p>please provide your valuable user feedback and any other brainstrom tips for us in the following group..</p>
            <a href="" target="_blank" rel="noreferrer">📌 join feedback community</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Topbar;
