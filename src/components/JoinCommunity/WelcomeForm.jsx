import React, { useState } from 'react';
import './WelcomeForm.css';

// ─────────────────────────────────────────────────────────────────
// ALLOWED CREDENTIALS — edit these pairs to add/update access.
// College name is case-insensitive. Reference ID is case-insensitive.
// ─────────────────────────────────────────────────────────────────
const ALLOWED_CREDENTIALS = [
    { college: 'francis', referenceId: 'yogii' },
    { college: 'FXEC', referenceId: 'JMV2020FW' },
    { college: 'francis', referenceId: 'booster2' },
    { college: 'francis', referenceId: 'booster3' },
    { college: 'francis', referenceId: 'booster4' },
    { college: 'francis', referenceId: 'booster5' },
    { college: 'francis', referenceId: 'booster6' },
    { college: 'francis', referenceId: 'booster7' },
    { college: 'francis', referenceId: 'booster8' },
    { college: 'francis', referenceId: 'booster9' },
];

const WelcomeForm = ({ onValidationSuccess }) => {
    const [college, setCollege] = useState('');
    const [referenceId, setReferenceId] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const inputCollege = college.trim().toLowerCase();
        const inputRef = referenceId.trim().toLowerCase();

        const isValid = ALLOWED_CREDENTIALS.some(
            (cred) =>
                cred.college.toLowerCase() === inputCollege &&
                cred.referenceId.toLowerCase() === inputRef
        );

        if (isValid) {
            setError('');
            onValidationSuccess();
        } else {
            setError('Invalid College or Reference ID. Please try again or join the WhatsApp group below.');
        }
    };

    return (
        <div className="welcome-form-wrapper">
            <div className="welcome-form-container glass-card">
                <h2 className="welcome-title">Join Our Community</h2>
                oawefoiearoig
                <p className="welcome-subtitle">Please provide your details to proceed.</p>

                <form onSubmit={handleSubmit} className="welcome-form">
                    <div className="form-group">
                        <label htmlFor="college">1. Which clg are you from?</label>
                        <input
                            type="text"
                            id="college"
                            value={college}
                            onChange={(e) => setCollege(e.target.value)}
                            placeholder="e.g. Oxford"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="referenceId">2. Enter your reference ID</label>
                        <input
                            type="text"
                            id="referenceId"
                            value={referenceId}
                            onChange={(e) => setReferenceId(e.target.value)}
                            placeholder="e.g. F2BFR45"
                            required
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" className="btn-primary submit-btn">
                        Continue
                    </button>

                    <div className="whatsapp-link-container">
                        <span>Or, directly </span>
                        <a
                            href="https://chat.whatsapp.com/CKTTNNhokKsJfcRPJPDnca?mode=hq1tcla"
                            target="_blank"
                            rel="noreferrer"
                            className="whatsapp-link"
                        >
                            Join in WhatsApp group
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default WelcomeForm;
