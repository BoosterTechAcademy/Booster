import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ onToggleSidebar, showSidebarToggle }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentRoute = location.pathname === '/' ? 'home' : location.pathname.split('/')[1];

    const isLearningModuleRoute = currentRoute === 'community-hero' || currentRoute === 'business-services' || currentRoute === 'free-class' || currentRoute === 'mock-before-learn' || currentRoute === 'book-mentor';

    // All routes that appear AFTER the welcome form — must stay in light theme only.
    const isCommunityFlow = [
        'community-hero',
        'business-services',
        'free-class',
        'mock-before-learn',
        'program-registration',
        'registration-success',
        'book-mentor',
        'booking-success',
    ].includes(currentRoute);

    const [darkTheme, setDarkTheme] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    // Force light theme whenever we are in the community flow.
    useEffect(() => {
        if (isCommunityFlow) {
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
            // Do NOT persist this as the global preference so the main site
            // keeps the user's original choice.
            return;
        }
        if (darkTheme) {
            document.body.classList.add("dark-theme");
            document.body.classList.remove("light-theme");
        } else {
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
        }
        localStorage.setItem("theme", darkTheme ? "dark" : "light");
    }, [darkTheme, isCommunityFlow]);

    const toggleTheme = () => setDarkTheme((prev) => !prev);

    return (
        <header className="navbar-glass">
            <div className="navbar-container">
                <div className="navbar-left">
                    {showSidebarToggle && (
                        <button className="menu-toggle-btn" onClick={onToggleSidebar} aria-label="Toggle Sidebar">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    )}

                    <div className="brand" onClick={() => navigate('/')}>
                        <div className="brand-logo">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--primary-color)" width="32" height="32">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <div className="brand-text">
                            <span className="brand-name">Booster</span>
                            <span className="brand-tagline">Learning Partner</span>
                        </div>
                    </div>
                </div>

                <nav className="navbar-right">
                    <ul className="nav-links">
                        <li>
                            <button className={`nav-link-btn ${currentRoute === 'home' ? 'active' : ''}`} onClick={() => navigate('/')}>Home</button>
                        </li>
                        {isLearningModuleRoute && (
                            <>
                                <li>
                                    <button
                                        className={`nav-link-btn ${currentRoute === 'business-services' ? 'active' : ''}`}
                                        onClick={() => navigate('/business-services')}
                                    >
                                        Services
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`nav-link-btn ${currentRoute === 'free-class' ? 'active' : ''}`}
                                        onClick={() => navigate('/free-class')}
                                    >
                                        Free Class
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`nav-link-btn ${currentRoute === 'book-mentor' ? 'active' : ''}`}
                                        onClick={() => navigate('/book-mentor')}
                                    >
                                        Book Mentor
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`nav-link-btn ${currentRoute === 'mock-before-learn' ? 'active' : ''}`}
                                        onClick={() => navigate('/mock-before-learn')}
                                    >
                                        Mock Interview
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>

                    {/* Hide theme toggle for all community-flow routes (after welcome form) */}
                    {!isCommunityFlow && (
                        <div className="nav-actions">
                            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
                                {darkTheme ? (
                                    // Sun Icon
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="5"></circle>
                                        <line x1="12" y1="1" x2="12" y2="3"></line>
                                        <line x1="12" y1="21" x2="12" y2="23"></line>
                                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                        <line x1="1" y1="12" x2="3" y2="12"></line>
                                        <line x1="21" y1="12" x2="23" y2="12"></line>
                                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                    </svg>
                                ) : (
                                    // Moon Icon
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                    </svg>
                                )}
                            </button>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
