import React, { useState } from 'react';
import './MockBeforeLearn.css';

const MockBeforeLearn = ({ onHomeClick }) => {
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        tel: '',
        email: '',
        college: '',
        topic: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwGrkp7k2qQfyngQJJ8WdHx7zE7uirtg6BKbCKpBktg60Yk8xyzj0m2MJ-PbqeRP0Vf/exec";

        try {
            await fetch(SCRIPT_URL, {
                method: "POST",
                // "text/plain" avoids CORS preflight requests
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify(formData),
            });

            setStatus('Thank you! Our mentors from booster will contact you within 24 hours with meeting details and time.');
            setFormData({ name: '', tel: '', email: '', college: '', topic: '' }); // Clear the form
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus('Something went wrong. Please try again or use the email option.');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setStatus(''), 5000);
        }
    };

    return (
        <div className="mbl-wrapper">
            <div className="mbl-container">
                <header className="mbl-header fade-in-up">
                    <h1>Mock Before <span className="blue-text">Learn</span></h1>
                    <p className="mbl-subtitle">
                        Test your current skill level through a mock interview or technical discussion. Knowing where you stand is the first step to mastering your craft.
                    </p>
                </header>

                <div className="mbl-content fade-in-up delay-1">
                    <div className="mbl-info-card">
                        <h3>How it works</h3>
                        <ul className="mbl-steps">
                            <li><span>1</span> Fill out the interest form below or email us directly.</li>
                            <li><span>2</span> Our mentors from Booster will review your request.</li>
                            <li><span>3</span> We will contact you within 24 hours with meeting details and time.</li>
                            <li><span>4</span> Attend the mock interview (provided in <strong>Tamil / English</strong>) and get a detailed assessment of your level.</li>
                        </ul>

                        <div className="mbl-email-option">
                            <p>Prefer email? Contact us directly at: <a href="mailto:booster@francis.edu" className="blue-text">booster@francis.edu</a></p> // Visible email option
                        </div>
                    </div>

                    <div className="mbl-form-card">
                        <h3>Register Interest</h3>
                        <form onSubmit={handleSubmit} className="mbl-form">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" name="tel" value={formData.tel} onChange={handleChange} required placeholder="Enter your phone number" pattern="[0-9]*" />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <label>Current College/Institution</label>
                                <input type="text" name="college" value={formData.college} onChange={handleChange} required placeholder="Enter your college" />
                            </div>
                            <div className="form-group">
                                <label>Discussion Topic</label>
                                <select name="topic" value={formData.topic} onChange={handleChange} required>
                                    <option value="">Select a topic</option>
                                    <option value="dsa">DSA & Problem Solving</option>
                                    <option value="core">Core CS (OOPs, OS, DBMS)</option>
                                    <option value="dev">Development & Frameworks</option>
                                    <option value="general">General Fit/HR</option>
                                </select>
                            </div>
                            <button type="submit" className="btn-primary-large mbl-submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending Request...' : 'Request Mock Interview'}
                            </button>
                        </form>
                        {status && <div className="mbl-toast">{status}</div>}

                        <div className="mbl-gform-option">
                            <p>Or join our <a href="https://wa.me/919876543210?text=I%20am%20Interested%20with%20their%20resume" target="_blank" rel="noreferrer" className="blue-text">WhatsApp Group</a> to connect instantly!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MockBeforeLearn;
