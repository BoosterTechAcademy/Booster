import React from 'react';
import './CommunityHero.css';

const CommunityHero = ({ onNavigateToBusinessServices, onNavigateToFreeClass, onHomeClick }) => {
    return (
        <div className="ch-wrapper">


            {/* Hero Main Content */}
            <main className="ch-hero-content">
                <div className="ch-hero-header fade-in-up">
                    <span className="welcome-badge">Welcome to the Community</span>
                    <h1>Empowering Your <span className="blue-text">Tech Journey</span></h1>
                    <p className="subtitle">
                        Transforming beginners into industry-ready professionals through localized, intensive training.
                    </p>
                </div>

                <div className="ch-cards-container">
                    {/* About Card */}
                    <div className="ch-info-card fade-in-up delay-1">
                        <div className="card-icon">🎯</div>
                        <h3>Our Mission</h3>
                        <p>
                            To provide accessible, high-quality tech education locally through structured pseudo-code learning that adapts to any programming language.
                        </p>
                    </div>

                    {/* What We Do Card */}
                    <div className="ch-info-card fade-in-up delay-2">
                        <div className="card-icon">🚀</div>
                        <h3>What We Do</h3>
                        <p>
                            We offer localized, intensive training modules. Our classes are live for 1 hour daily, providing interactive and engaging learning experiences.
                        </p>
                    </div>

                    {/* Local Learning Card */}
                    <div className="ch-info-card fade-in-up delay-3">
                        <div className="card-icon">📍</div>
                        <h3>Local Learning Services</h3>
                        <p>
                            We bring top-tier tech education directly to you locally, fostering a tight-knit community of learners and mentors right in your area.
                        </p>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="ch-cta-section fade-in-up delay-4">
                    <h2>Ready to explore our offerings?</h2>
                    <div className="cta-buttons">
                        <button className="btn-primary-large" onClick={onNavigateToBusinessServices}>
                            View Business Services
                        </button>
                        <button className="btn-outline-large" onClick={onNavigateToFreeClass}>
                            Check Free Classes
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CommunityHero;
