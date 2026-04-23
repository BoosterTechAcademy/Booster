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
                    <div className="rs-contact-header">
                        <h3>Further Details & Support</h3>
                        <p>We're here to help you at every step of your journey</p>
                    </div>
                    
                    <div className="contact-methods">
                        <a href="mailto:boostercourses@gmail.com" className="contact-item email-card">
                            <div className="contact-icon email-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div className="contact-info">
                                <strong>Email Us</strong>
                                <span>boostercourses@gmail.com</span>
                            </div>
                            <div className="contact-arrow">→</div>
                        </a>
                        
                        <a href="https://chat.whatsapp.com/Gc6ZLTRNzQF8z4SqVtwTBw?mode=gi_t" target="_blank" rel="noreferrer" className="contact-item whatsapp-card">
                            <div className="contact-icon whatsapp-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                </svg>
                            </div>
                            <div className="contact-info">
                                <strong>WhatsApp</strong>
                                <span>Join our community group</span>
                            </div>
                            <div className="contact-arrow">→</div>
                        </a>
                        
                        <a href="tel:+918248833986" className="contact-item phone-card">
                            <div className="contact-icon phone-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <div className="contact-info">
                                <strong>Call Directly</strong>
                                <span>+91 82488 33986</span>
                            </div>
                            <div className="contact-arrow">→</div>
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
