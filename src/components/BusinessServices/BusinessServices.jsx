import React, { useState } from 'react';
import './BusinessServices.css';

const servicesList = [
    {
        id: 'aptitude',
        title: 'Aptitude',
        description: 'Master quantitative and logical aptitude for competitive exams and interviews.',
        curriculum: ['Number System', 'Time & Work', 'Percentages', 'Profit & Loss', 'Probability'],
        payment: '₹999 / module',
        icon: '🧮'
    },
    {
        id: 'dsa',
        title: 'Data Structure and Algorithms',
        description: 'Learn efficient problem solving through pseudo code and implementation in any language.',
        curriculum: ['Arrays & Strings', 'Linked Lists', 'Trees & Graphs', 'Dynamic Programming', 'Sorting Algorithms'],
        payment: '₹1499 / module',
        icon: '🧩'
    },
    {
        id: 'core-oops',
        title: 'Core and OOPS',
        description: 'Deep dive into Object Oriented Programming principles with real-world examples.',
        curriculum: ['Classes & Objects', 'Inheritance', 'Polymorphism', 'Abstraction', 'Encapsulation'],
        payment: '₹1299 / module',
        icon: '💻'
    },
    {
        id: 'logical',
        title: 'Logical Building and Programming',
        description: 'Enhance your core logic building skills, essential for cracking tech interviews.',
        curriculum: ['Pattern Printing', 'Number Logic', 'Recursion', 'Bit Manipulation', 'Math for Programmers'],
        payment: '₹1099 / module',
        icon: '🧠'
    },
    {
        id: 'mentoring',
        title: 'Mentoring',
        description: '1-on-1 career guidance, resume review, and interview preparation.',
        curriculum: ['Resume Building', 'Mock Interviews', 'Career Roadmap', 'Project Review', 'Communication Skills'],
        payment: '₹1999 / module',
        icon: '👥'
    }
];

const BusinessServices = ({ onNavigateToFreeClass, onHomeClick }) => {
    const [toastMessage, setToastMessage] = useState('');

    const handleGoogleFormClick = () => {
        // Simulating opening a google form
        window.open('https://docs.google.com/forms/', '_blank');

        // Show toast message
        setToastMessage('We will contact you shortly!');
        setTimeout(() => setToastMessage(''), 3000);
    };

    return (
        <div className="bs-wrapper">
            {/* Topbar Navigation */}
            <nav className="bs-topbar">
                <div className="bs-logo" onClick={onHomeClick} style={{ cursor: 'pointer' }}>
                    <span className="logo-icon blue-text">&lt;/&gt;</span>
                    <span className="logo-text">Learning<span className="text-secondary">Sheet</span></span>
                </div>
                <div className="bs-nav-links">
                    <button className="nav-link-btn active">Services</button>
                    <button className="nav-link-btn" onClick={onNavigateToFreeClass}>Free Class</button>
                    <button className="btn-secondary nav-btn" onClick={onHomeClick}>Home</button>
                </div>
            </nav>

            {/* Services Component */}
            <section id="services" className="bs-services-section">
                <h2 className="section-title">Our Learning Modules</h2>
                <p className="section-subtitle">Entire teaching is pseudo-code based, allowing you to implement logic in any language of your choice.</p>

                <div className="bs-modules-grid">
                    {servicesList.map(service => (
                        <div key={service.id} className="bs-module-card">
                            <div className="module-card-header">
                                <span className="module-icon-large">{service.icon}</span>
                                <h2>{service.title}</h2>
                            </div>
                            <p className="details-desc">{service.description}</p>

                            <div className="details-curriculum">
                                <h3>Curriculum Covered:</h3>
                                <ul>
                                    {service.curriculum.map((item, index) => (
                                        <li key={index}>⚡ {item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="details-payment flex-between">
                                <h3>Investment:</h3>
                                <p className="price-tag">{service.payment}</p>
                            </div>

                            <div className="details-action mt-auto">
                                <p className="class-info">Live classes for 1 hr daily. Contact via email/phone based on interest.</p>
                                <button className="btn-primary action-btn" onClick={handleGoogleFormClick}>
                                    I am Interested (Fill Form)
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

            {/* Footer Form Toast Notification */}
            {toastMessage && (
                <div className="toast-notification fade-in">
                    {toastMessage}
                </div>
            )}
        </div>
    );
};

export default BusinessServices;
