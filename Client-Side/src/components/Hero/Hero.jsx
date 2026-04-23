import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <div className="hero-wrapper">
            <div className="hero-container">
                <div className="hero-content-section">
                    <div className="badge">New & Improved Learning Experience</div>
                    <h1 className="hero-title">
                        Master Java with <span className="text-gradient">True Clarity.</span>
                    </h1>
                    <p className="hero-subtitle">
                        An all-in-one learning platform built for tech aspirants. Journey from basic syntax
                        to advanced Data Structures and Algorithms with structured roadmaps.
                    </p>

                    <div className="hero-cta-group">
                        <button className="btn-primary hero-btn" onClick={() => navigate('/roadmap')}>
                            Start Learning Now
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="btn-outline hero-btn" onClick={() => navigate('/join-community')}>
                            Join Community
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Core Concepts</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">100+</span>
                            <span className="stat-label">Coding Practices</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Community Access</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual-section">
                    {/* Abstract geometric shapes representing development and structure */}
                    <div className="visual-graphic">
                        <div className="glass-card main-card">
                            <div className="card-header">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <div className="card-code">
                                <pre><code>
                                    <span className="code-keyword">public class</span> <span className="code-class">Journey</span> &#123;
                                    <span className="code-keyword">public static void</span> <span className="code-func">main</span>(String[] args) &#123;
                                    System.out.<span className="code-func">println</span>(<span className="code-string">"Hello, World!"</span>);
                                    <span className="code-comment">// Your success starts here</span>
                                    &#125;
                                    &#125;
                                </code></pre>
                            </div>
                        </div>
                        <div className="glass-card floating-card-1">
                            <span>🚀 Interview Ready</span>
                        </div>
                        <div className="glass-card floating-card-2">
                            <span>🧠 Structured Roadmaps</span>
                        </div>

                        {/* Background glowing orbs */}
                        <div className="glow-orb orb-1"></div>
                        <div className="glow-orb orb-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
