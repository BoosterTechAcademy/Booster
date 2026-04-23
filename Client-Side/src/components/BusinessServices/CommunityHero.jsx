import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CommunityHero.css';

const CommunityHero = () => {
    const navigate = useNavigate();

    return (
        <div className="ch-wrapper">

            {/* Hero Main Content */}
            <main className="ch-hero-content">

                {/* Hero Top Grid */}
                <div className="ch-hero-grid">

                    {/* Left Column Text */}
                    <div className="ch-hero-text">
                        <div className="welcome-badge fade-in-up">
                            <span className="sparkle">✨</span> Welcome to the Community
                        </div>
                        <h1 className="fade-in-up delay-1">
                            Empowering Your <br /><span className="blue-text gradient-text">Tech Journey</span>
                        </h1>
                        <p className="subtitle fade-in-up delay-2">
                            Transforming beginners into industry-ready professionals through localized, intensive training, expert mentorship, and real-world projects.
                        </p>

                        <div className="ch-hero-stats fade-in-up delay-3">
                            <div className="stat-item">
                                <h3>500+</h3>
                                <p>Learners</p>
                            </div>
                            <div className="divider"></div>
                            <div className="stat-item">
                                <h3>50+</h3>
                                <p>Live Projects</p>
                            </div>
                            <div className="divider"></div>
                            <div className="stat-item">
                                <h3>100%</h3>
                                <p>Practical Focus</p>
                            </div>
                        </div>

                        <div className="cta-groups fade-in-up delay-4">
                            <button className="btn-primary-glow" onClick={() => {
                                document.getElementById('offerings-section').scrollIntoView({ behavior: 'smooth' });
                            }}>
                                Explore Programs <span className="arrow">↓</span>
                            </button>
                            <button className="btn-outline-play" onClick={() => navigate('/free-class')}>
                                <span className="play-icon">▶</span> Watch Demo
                            </button>
                        </div>
                    </div>

                    {/* Right Column Visuals */}
                    <div className="ch-hero-visual fade-in-up delay-2">
                        <div className="visual-background-glow"></div>
                        <div className="visual-circle main-circle"></div>
                        <div className="visual-circle secondary-circle"></div>

                        <div className="glass-card floating-card-1">
                            <div className="glass-icon">🎯</div>
                            <div className="glass-text">
                                <h4>Structured Learning</h4>
                                <p>Master concepts easily</p>
                            </div>
                        </div>

                        <div className="glass-card floating-card-2">
                            <div className="glass-icon">💻</div>
                            <div className="glass-text">
                                <h4>Live Classes</h4>
                                <p>Interactive sessions</p>
                            </div>
                        </div>

                        <div className="hero-main-illustration">
                            <div className="abstract-shape">
                                <div className="code-line w-70"></div>
                                <div className="code-line w-50"></div>
                                <div className="code-line w-80"></div>
                                <div className="code-line w-40"></div>
                                <div className="code-line w-60"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Skills Marquee (Creative Feature) */}
                <div className="ch-tech-marquee-wrapper fade-in-up delay-3">
                    <div className="ch-tech-marquee">
                        <div className="marquee-content">
                            <span>Coding</span><span className="dot">•</span>
                            <span>Placement Support</span><span className="dot">•</span>
                            <span>Mentor Guiding</span><span className="dot">•</span>
                            <span>Logical Building</span><span className="dot">•</span>
                            <span>Technical Training</span><span className="dot">•</span>
                            <span>Appitude</span><span className="dot">•</span>
                            <span>Data Structure and Algorithms</span><span className="dot">•</span>
                            <span>Core & OOPS</span><span className="dot">•</span>

                            {/* Duplicate for infinite scrolling effect */}
                            <span>Coding</span><span className="dot">•</span>
                            <span>Placement Support</span><span className="dot">•</span>
                            <span>Mentor Guiding</span><span className="dot">•</span>
                            <span>Logical Building</span><span className="dot">•</span>
                            <span>Technical Training</span><span className="dot">•</span>
                            <span>Appitude</span><span className="dot">•</span>
                            <span>Data Structure and Algorithms</span><span className="dot">•</span>
                            <span>Core & OOPS </span><span className="dot">•</span>
                        </div>
                    </div>
                </div>

                {/* Trust Banner */}
                <div className="ch-trust-banner fade-in-up delay-3">
                    <p>Trusted by students looking to join top tech companies</p>
                    <div className="trust-logos-container">
                        <div className="company-logo">
                            <div className="logo-icon bg-blue">❖</div>
                            <span className="logo-text">Tech Innovators</span>
                        </div>
                        <div className="company-logo">
                            <div className="logo-icon bg-purple">⬡</div>
                            <span className="logo-text">Global Startups</span>
                        </div>
                        <div className="company-logo">
                            <div className="logo-icon bg-green">⟡</div>
                            <span className="logo-text">Future Leaders</span>
                        </div>
                        <div className="company-logo">
                            <div className="logo-icon bg-orange">⎔</div>
                            <span className="logo-text">Elite Institutes</span>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="ch-features-section">
                    <div className="section-header fade-in-up">
                        <h2>Why Choose Our Platform?</h2>
                        <p>Discover the features that make our tech education stand out from the rest.</p>
                    </div>
                    <div className="ch-cards-container">
                        {/* About Card */}
                        <div className="ch-info-card fade-in-up delay-1">
                            <div className="card-icon-wrapper">
                                <div className="card-icon">🎯</div>
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                To provide accessible, high-quality tech education locally through structured pseudo-code learning that adapts to any programming language.
                            </p>
                        </div>

                        {/* What We Do Card */}
                        <div className="ch-info-card fade-in-up delay-2">
                            <div className="card-icon-wrapper">
                                <div className="card-icon">🚀</div>
                            </div>
                            <h3>What We Do</h3>
                            <p>
                                We offer localized, intensive training modules. Our classes are live for 1 hour daily, providing interactive and engaging learning experiences.
                            </p>
                        </div>

                        {/* Local Learning Card */}
                        <div className="ch-info-card fade-in-up delay-3">
                            <div className="card-icon-wrapper">
                                <div className="card-icon">📍</div>
                            </div>
                            <h3>Local Learning</h3>
                            <p>
                                We bring top-tier tech education directly to you locally, fostering a tight-knit community of learners and mentors right in your area.
                            </p>
                        </div>

                        {/* Career Support Card */}
                        <div className="ch-info-card fade-in-up delay-4">
                            <div className="card-icon-wrapper">
                                <div className="card-icon">💼</div>
                            </div>
                            <h3>Career Support</h3>
                            <p>
                                Beyond just education, we provide resume building, mock interviews, and dedicated placement assistance to launch your career.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Interactive Offerings Section */}
                <div id="offerings-section" className="ch-offerings-section fade-in-up delay-3">
                    <div className="offerings-header">
                        <h2>Ready to explore our offerings?</h2>
                        <p>Choose your pathway and ignite your tech career today. Tap a card to begin.</p>
                    </div>

                    <div className="offerings-grid">
                        <div className="offering-card offering-business" onClick={() => navigate('/business-services')}>
                            <div className="card-glow"></div>
                            <div className="offering-icon">🏢</div>
                            <div className="offering-content">
                                <h3>Business Services</h3>
                                <p>Comprehensive corporate training and professional development programs designed to elevate your career potential.</p>
                            </div>
                            <div className="offering-arrow">→</div>
                        </div>

                        <div className="offering-card offering-free" onClick={() => navigate('/free-class')}>
                            <div className="card-glow"></div>
                            <div className="offering-icon">🎁</div>
                            <div className="offering-content">
                                <h3>Free Classes</h3>
                                <p>Experience our premium teaching methodology firsthand without any cost before you make a commitment.</p>
                            </div>
                            <div className="offering-arrow">→</div>
                        </div>

                        <div className="offering-card offering-mock" onClick={() => navigate('/mock-before-learn')}>
                            <div className="card-glow"></div>
                            <div className="offering-icon">🎯</div>
                            <div className="offering-content">
                                <h3>Mock Before Learn</h3>
                                <p>Test your baseline skills through simulated interviews and get a truly personalized roadmap for learning.</p>
                            </div>
                            <div className="offering-arrow">→</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CommunityHero;
