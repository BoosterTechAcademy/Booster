import React, { useState } from 'react';
import './ProgramRegistration.css';

const ProgramRegistration = ({ onNavigateToPayment, onHomeClick }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        startDate: '',
        module: localStorage.getItem('selectedModule') || ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // This should be replaced by your actual Google Sheets script URL
        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwZWA6ZeWMROyS6XievMbroh7fODQUFvR8hCmMcPeFpkcmA_p0foofWjZlOjVUHDa58VQ/exec";

        try {
            await fetch(SCRIPT_URL, {
                method: "POST",
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify(formData),
            });
            // If tracking this in the SAME sheet, ensure your Google script handles these exact keys,
            // or deploy a separate script/sheet if the schema differs significantly.

            // Navigate to the next step (Payment)
            onNavigateToPayment();
        } catch (error) {
            console.error("Error submitting form:", error);
            alert('Something went wrong. Please try again or contact support.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pr-wrapper">
            <div className="pr-container">
                <header className="pr-header fade-in-up">
                    <h1>Register for <span className="blue-text">Learning Module</span></h1>
                    <p className="pr-subtitle">
                        Begin your journey with us. Fill out your details below to proceed to the payment step.
                    </p>
                </header>

                <div className="pr-form-card fade-in-up delay-1">
                    <form onSubmit={handleSubmit} className="pr-form">
                        <div className="form-group">
                            <label>Full Name <span className="label-hint">(As to be displayed in certificate)</span></label>
                            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Enter your full name" />
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email" />
                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Enter your phone number" pattern="[0-9]*" />
                        </div>

                        <div className="form-group">
                            <label>Preferred Date to Start</label>
                            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label>Interested Module</label>
                            <select name="module" value={formData.module} onChange={handleChange} required>
                                <option value="">Select a module</option>
                                <option value="aptitude">Aptitude</option>
                                <option value="dsa">Data Structure and Algorithms</option>
                                <option value="core-oops">Core and OOPS</option>
                                <option value="logical">Logical Building and Programming</option>
                                <option value="mentoring">Book Mentor</option>
                            </select>
                        </div>

                        <div className="pr-form-actions">
                            <button type="submit" className="btn-primary-large pr-submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Processing...' : 'Complete Registration'}
                            </button>
                            <button type="button" className="btn-secondary-outline back-btn" onClick={onHomeClick}>
                                Back to Home
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProgramRegistration;
