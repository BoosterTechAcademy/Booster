import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookMentor.css';

const BookMentor = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        preferredTime: '',
        topic: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxde8R2ic3KM-idEtZswqeRHz21BSci99UQT5amU9HVlz723QxF3cty66_szbM70RdN9A/exec";

        try {
            // Include booking type for the sheet
            const submissionData = {
                ...formData,
                type: 'Mentor Booking',
                bookingFee: '₹300',
                duration: '20 min'
            };

            await fetch(SCRIPT_URL, {
                method: "POST",
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify(submissionData),
            });

            navigate('/booking-success');
        } catch (error) {
            console.error("Error submitting booking:", error);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bm-wrapper">
            <header className="bm-hero fade-in">
                <div className="bm-hero-content">
                    <h1>1-on-1 <span className="blue-text">Career Guidance</span></h1>
                    <p className="bm-hero-subtitle">
                        Get expert advice, resume reviews, and interview prep tailored just for you.
                    </p>
                    <div className="bm-pricing-card">
                        <div className="pricing-tag">₹300</div>
                        <div className="pricing-info">
                            <span>Duration: 20 min</span>
                            <span>Medium: Tamil / English</span>
                            <span>Expert Mentorship</span>
                        </div>
                    </div>
                </div>
            </header>

            <section className="bm-form-section fade-in delay-1">
                <div className="bm-container">
                    <div className="bm-form-card">
                        <div className="form-header">
                            <h2>Book Your Session</h2>
                            <p>Fill out the form below to show your interest.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="bm-form">
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="WhatsApp number preferred"
                                        pattern="[0-9]*"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Preferred Time Slot</label>
                                    <input
                                        type="text"
                                        name="preferredTime"
                                        value={formData.preferredTime}
                                        onChange={handleChange}
                                        required
                                        placeholder="e.g. Evening, Weekends"
                                    />
                                </div>
                                <div className="form-group full-width">
                                    <label>Topic of Interest</label>
                                    <select name="topic" value={formData.topic} onChange={handleChange} required>
                                        <option value="">Select a topic</option>
                                        <option value="Resume Review">Resume Review</option>
                                        <option value="Mock Interview">Mock Interview</option>
                                        <option value="Career Roadmap">Career Roadmap</option>
                                        <option value="Technical Guidance">Technical Guidance</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Session Duration</label>
                                    <input
                                        type="text"
                                        value="20 Minutes"
                                        readOnly
                                        className="read-only-input"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Booking Fee</label>
                                    <input
                                        type="text"
                                        value="₹300"
                                        readOnly
                                        className="read-only-input"
                                    />
                                </div>
                                <div className="form-group full-width">
                                    <label>Brief Message (Optional)</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="What specifically would you like to discuss?"
                                        rows="4"
                                    />
                                </div>
                            </div>
                            <div className="bm-actions">
                                <button type="submit" className="btn-primary-large bm-submit-btn" disabled={isSubmitting}>
                                    {isSubmitting ? 'Processing...' : 'Book Mentor Now'}
                                </button>
                                <button type="button" className="btn-secondary bm-back-btn" onClick={() => navigate('/community-hero')}>
                                    Back to Home
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookMentor;
