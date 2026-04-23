import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BusinessServices.css';

// Added batch details and registration status to each service
const servicesList = [
    {
        id: 'Quantitative Aptitude',
        title: 'Aptitude',
        description: 'Master quantitative aptitude for competitive exams and interviews.',
        curriculum: ['Number System', 'Time & Work', 'Percentages', 'Profit & Loss', 'Ratio and Proportion', 'Average', 'Time, Speed and Distance'],
        payment: '₹1599 / module',
        totalClasses: '16-18',
        durationPerDay: '1 hr',
        remainingSeats: 10,
        batchDate: '2026-04-02', 
        registrationOpen: true,
        language: 'Tamil / English',
        icon: '🧮'
    },
    {
        id: 'dsa',
        title: 'Data Structure and Algorithms',
        description: 'Learn efficient problem solving through pseudo code and implementation in any language.',
        curriculum: ['Arrays & Strings', 'Linked Lists', 'Trees & Graphs', 'Stack and Queue', 'Sorting Algorithms'],
        payment: '₹4000 / module',
        totalClasses: '32-48',
        durationPerDay: '1 hr',
        remainingSeats: 10,
        batchDate: '2026-05-01',
        registrationOpen: false,
        language: 'Tamil / English',
        icon: '🧩'
    },
    {
        id: 'core-oops',
        title: 'Core and OOPS',
        description: 'Deep dive into Object Oriented Programming principles with real-world examples.',
        curriculum: ['Data Types & variable ', 'Conditional Statments', 'Loops', 'Exception handling', 'Classes & Objects', 'Inheritance', 'Polymorphism', 'Abstraction', 'Encapsulation'],
        payment: '₹1599 / module',
        totalClasses: '16-18',
        durationPerDay: '1 hr',
        remainingSeats: 10,
        batchDate: '2026-04-02',
        registrationOpen: true, // Registration closed
        language: 'Tamil / English',
        icon: '💻'
    },
    {
        id: 'logical',
        title: 'Logical Building and Programming',
        description: 'Enhance your core logic building skills, essential for cracking tech interviews.',
        curriculum: ['Pattern Printing', 'basics programs', 'Leetcode problems', 'Bit Manipulation', 'Math for Programmers', 'Boundary case thinking', 'Puzzle Solving'],
        payment: '₹2099 / module',
        totalClasses: '22-26',
        durationPerDay: '1 hr',
        remainingSeats: 10,
        batchDate: '2026-04-02',
        registrationOpen: true,
        language: 'Tamil / English',
        icon: '🧠'
    }
];

// Countdown Helper Component
const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let daysLeft = 0;

        if (difference > 0) {
            daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
        }
        return daysLeft;
    };

    const [daysLeft, setDaysLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setDaysLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    return (
        <div className="countdown-display">
            {daysLeft > 0 ? (
                <span>{daysLeft} days</span>
            ) : (
                <span>Batch Started!</span>
            )}
        </div>
    );
};

const BusinessServices = () => {
    const [toastMessage] = useState('');
    const navigate = useNavigate();

    const handleRegistrationClick = (moduleId) => {
        localStorage.setItem('selectedModule', moduleId);
        navigate('/program-registration');
    };

    return (
        <div className="bs-wrapper">
            {/* Services Component */}
            <section id="services" className="bs-services-section">
                <header className="bs-section-header">
                    <div className="header-top">
                        <button className="btn-back-home" onClick={() => navigate('/community-hero')}>
                            ← Back to Home
                        </button>
                    </div>
                    <h2 className="section-title">Our Learning Modules</h2>
                    <p className="section-subtitle">Entire teaching is pseudo-code based, allowing implementation in any language.</p>
                </header>

                <div className="bs-modules-grid">
                    {servicesList.map(service => (
                        <div key={service.id} className={`bs-module-card ${!service.registrationOpen ? 'module-closed' : ''}`}>
                            <div className="status-badge-container">
                                {service.registrationOpen ? (
                                    <span className="status-badge open">Registration Open</span>
                                ) : (
                                    <span className="status-badge closed">Registration Closed</span>
                                )}
                            </div>

                            <div className="module-card-header">
                                <span className="module-icon-large">{service.icon}</span>
                                <div className="module-title-info">
                                    <h2>{service.title}</h2>
                                    <span className="module-language">🗣️ {service.language}</span>
                                </div>
                            </div>

                            <p className="details-desc">{service.description}</p>

                            <div className="batch-stats-grid">
                                <div className="stat-item">
                                    <span className="stat-label">Daily Duration</span>
                                    <span className="stat-value">{service.durationPerDay}</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Total Classes</span>
                                    <span className="stat-value">{service.totalClasses}</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Available Seats</span>
                                    <span className="stat-value">{service.remainingSeats}</span>
                                </div>
                            </div>

                            <div className="module-schedule-info">
                                <p><strong>Timing:</strong> Classes usually run between 7–9 PM</p>
                                <p><strong>Frequency:</strong> Weekly 3-4 classes will be conducted</p>
                            </div>

                            <div className="details-curriculum">
                                <h3>Curriculum Highlights:</h3>
                                <ul>
                                    {service.curriculum.map((item, index) => (
                                        <li key={index}>⚡ {item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="batch-countdown-compact">
                                <span className="countdown-label">Next Batch:</span>
                                <CountdownTimer targetDate={service.batchDate} />
                            </div>

                            <div className="details-payment flex-between">
                                <h3>Investment:</h3>
                                <p className="price-tag">{service.payment}</p>
                            </div>

                            <div className="details-action mt-auto">
                                {!service.registrationOpen && (
                                    <div className="pre-booking-notice">
                                        <p>Contact: <strong>boostercourses@gmail.com</strong> for pre-booking.</p>
                                    </div>
                                )}
                                <p className="class-info">Our team will contact you soon via phone/email based on your interest.</p>
                                <button
                                    className={`btn-primary action-btn ${!service.registrationOpen || service.remainingSeats === 0 ? 'btn-disabled' : ''}`}
                                    onClick={() => handleRegistrationClick(service.id)}
                                    disabled={!service.registrationOpen || service.remainingSeats === 0}
                                >
                                    {service.registrationOpen ? 'I am Interested (Fill Form)' : 'Registrations Closed'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Demo Video Section */}
            <section className="bs-demo-section">
                <h2 className="section-title">Experience Our Classes</h2>
                <p className="section-subtitle">Check out a demo class for reference before joining.</p>

                <div className="video-container">
                    <div className="video-placeholder">
                        <div className="play-button">▶</div>
                        <p>Demo Class Video Preview</p>
                    </div>
                </div>
            </section>

            {toastMessage && (
                <div className="toast-notification fade-in">
                    {toastMessage}
                </div>
            )}
        </div>
    );
};

export default BusinessServices;
