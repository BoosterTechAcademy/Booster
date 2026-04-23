/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingSuccess.css';

const BookingSuccess = () => {
    const navigate = useNavigate();

    // Replace with actual phone number
    const whatsappNumber = "8248833986";
    const whatsappMessage = encodeURIComponent("Hello! I just booked a mentor session on Booster and would like to know the next steps.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // https://chat.whatsapp.com/CY0IEpTD1vIHiFxeUcvJfe?mode=gi_t
    return (
        <div className="bsu-wrapper">
            <div className="bsu-container">
                <div className="bsu-card fade-in">
                    <div className="success-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor" />
                        </svg>
                    </div>

                    <header className="bsu-header">
                        <h1>Booking <span className="blue-text">Successful!</span></h1>
                        <p>Thank you for showing interest in our mentoring program.</p>
                    </header>

                    <div className="bsu-info-box">
                        <p><strong>What happens next?</strong></p>
                        <p>Our team will contact you soon with the details of your mentor meeting, including the specific date and time slot.</p>
                    </div>

                    <div className="bsu-actions">
                        <a href="https://chat.whatsapp.com/CY0IEpTD1vIHiFxeUcvJfe?mode=gi_t" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                            <span className="icon">💬</span> Contact us on WhatsApp
                        </a>
                        <button className="btn-secondary-outline" onClick={() => navigate('/community-hero')}>
                            Back to Home
                        </button>
                    </div>

                    <footer className="bsu-footer">
                        <p>Need immediate help? Reach out at <span className="blue-text">boostersupport@gmail.com</span></p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default BookingSuccess;
