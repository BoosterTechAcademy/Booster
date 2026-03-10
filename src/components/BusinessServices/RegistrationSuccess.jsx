import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationSuccess.css';

const RegistrationSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="rs-wrapper">
            <div className="rs-container fade-in-up">
                <div className="rs-success-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                </div>

                <header className="rs-header">
                    <h1>Registration Successful! 🎉</h1>
                    <p className="rs-subtitle">
                        Your details have been successfully recorded. Our team will verify your interest and contact you soon.
                    </p>
                </header>

                <div className="rs-content-card">
                    <h3>Flow & Instructions for Classes</h3>
                    <ul className="rs-instructions">
                        <li>
                            <span className="step-num">1</span>
                            <p><strong>Interest Recorded:</strong> Your interest has been recorded and our team will contact you soon.</p>
                        </li>
                        <li>
                            <span className="step-num">2</span>
                            <p><strong>Schedule & Timing:</strong> Class schedule and timing will be provided to you through email / WhatsApp after your registration is confirmed.</p>
                        </li>
                        <li>
                            <span className="step-num">3</span>
                            <p><strong>Curriculum:</strong> Curriculum and daily topics will be sent to you on a daily basis after joining.</p>
                        </li>
                        <li>
                            <span className="step-num">4</span>
                            <p><strong>Content Delivery:</strong> Classes will connect through a live stream platform or Google Meet link focusing on pure content delivery.</p>
                        </li>
                        <li>
                            <span className="step-num">5</span>
                            <p><strong>Attendance:</strong> Attendance will be taken for your successful completion and certification.</p>
                        </li>
                        <li>
                            <span className="step-num">6</span>
                            <p><strong>Validation:</strong> The curriculum includes a validation-based learning process.</p>
                        </li>
                        <li>
                            <span className="step-num">7</span>
                            <p><strong>Support:</strong> You have access to our 24/7 doubt clarification team support.</p>
                        </li>
                    </ul>
                </div>

                <div className="rs-contact-card fade-in-up delay-1">
                    <h3>Further Details & Support</h3>
                    <div className="contact-methods">
                        <a href="mailto:support@booster.com" className="contact-item">
                            <span className="contact-icon">✉️</span>
                            <div>
                                <strong>Email Us</strong>
                                <span>boostercourses@gmail.com</span>
                            </div>
                        </a>
                        <a href="https://chat.whatsapp.com/Gc6ZLTRNzQF8z4SqVtwTBw?mode=gi_t" target="_blank" rel="noreferrer" className="contact-item">
                            <span className="contact-icon">💬</span>
                            <div>
                                <strong>WhatsApp</strong>
                                <span>Join our group / chat</span>
                            </div>
                        </a>
                        <a href="tel:+919876543210" className="contact-item">
                            <span className="contact-icon">📞</span>
                            <div>
                                <strong>Call Directly</strong>
                                <span>+91 82488 33986</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="rs-actions fade-in-up delay-2">
                    <button className="btn-primary-large" onClick={() => navigate('/community-hero')}>
                        Return to Home Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegistrationSuccess;
