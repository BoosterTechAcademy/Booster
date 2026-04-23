/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './FreeClass.css';

// ─── Edit this list to add / update upcoming classes ──────────────────────
// dateTime : ISO 8601 local time  e.g. '2026-03-10T19:00:00'
// language  : shown as a tag on each card
// ──────────────────────────────────────────────────────────────────────────
const upComingClasses = [
    // {
    //     id: 1,
    //     title: 'Mastering Pattern Printing Logic',
    //     dateTime: '2026-03-10T19:00:00',
    //     dateLabel: 'Mon 10 Mar, 7:00 PM IST',
    //     duration: '2-3 hrs',
    //     language: 'Tamil',          // 'Tamil' | 'English' | 'Tamil / English'
    //     curriculum: 'Learn how to approach any pattern printing interview question using nested loops and mathematical logic (Pseudo code based).',
    //     link: 'https://meet.google.com/syq-yhso-sfe',
    //     instructor: 'Senior Mentor',
    //     linkedIn: 'https://linkedin.com/in/your-mentor-profile-1'  // replace with actual URL
    // },
    // {
    //     id: 2,
    //     title: 'Introduction to Dynamic Programming',
    //     dateTime: '2026-03-16T10:00:00',
    //     dateLabel: 'Sun 16 Mar, 10:00 AM IST',
    //     duration: '2-3 hrs',
    //     language: 'English',        // 'Tamil' | 'English' | 'Tamil / English'
    //     curriculum: 'Break down complex recursion problems into simple DP tabular and memoization approaches.',
    //     link: 'https://meet.google.com/syq-yhso-sfe',
    //     instructor: 'DSA Expert',
    //     linkedIn: 'https://linkedin.com/in/your-mentor-profile-2'  // replace with actual URL
    // },
    // {
    //     id: 3,
    //     title: 'From Confusion to Clarity: Logical Thinking for Interviews',
    //     dateTime: '2026-03-23T19:00:00', // doesn't matter much since it's on hold
    //     dateLabel: 'March 23, 7:00 PM',
    //     duration: '1 hr',
    //     language: 'Tamil',
    //     curriculum: "🚀 Want to stand out in interviews? It's not just coding — it's how you think! Join this free class to learn how to break problems, build logic, and answer smarter in interviews.",
    //     link: 'https://meet.google.com/fko-ybuo-yrj',
    //     instructor: 'SDE • digital.ai',
    //     linkedIn: 'https://www.linkedin.com/in/mariaanthonyyokesh/',
    //     onHold: false
    // }
];

// ──────────────────────────────────────────────────────────────────────────
// Hook: live countdown to a target dateTime string
// Returns { days, hours, minutes, seconds, isLive }
// ──────────────────────────────────────────────────────────────────────────
const useCountdown = (dateTime) => {
    const getTimeLeft = () => {
        const diff = new Date(dateTime) - new Date();
        if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true };
        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
            isLive: false,
        };
    };

    const [timeLeft, setTimeLeft] = useState(getTimeLeft);

    useEffect(() => {
        if (timeLeft.isLive) return;
        const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
        return () => clearInterval(id);
    });

    return timeLeft;
};

// ──────────────────────────────────────────────────────────────────────────
// Single card — must be its own component so hooks work per-card
// ──────────────────────────────────────────────────────────────────────────
const ClassCard = ({ cls }) => {
    const { days, hours, minutes, seconds, isLive } = useCountdown(cls.dateTime);

    return (
        <div className={`fc-list-card ${isLive && !cls.onHold ? 'fc-card-live' : ''} ${cls.onHold ? 'fc-card-onhold' : ''}`}>
            <div className="fc-card-info">
                {/* Header row: badge + duration */}
                <div className="fc-card-header">
                    {cls.onHold ? (
                        <div className="live-badge onhold-badge">⏳ On Hold</div>
                    ) : isLive ? (
                        <div className="live-badge live-now">🔴 Live Now</div>
                    ) : (
                        <div className="live-badge">Live Scheduled</div>
                    )}
                    <span className="fc-duration">⏳ {cls.duration}</span>
                </div>

                <h2 className="fc-title">{cls.title}</h2>

                {/* Language chips */}
                <div className="fc-lang-chips">
                    {cls.language.split('/').map((lang) => (
                        <span key={lang.trim()} className={`lang-chip lang-chip--${lang.trim().toLowerCase()}`}>
                            {lang.trim()}
                        </span>
                    ))}
                </div>

                {/* Date & instructor */}
                <div className="fc-meta">
                    <p className="fc-date">📅 {cls.onHold ? 'Exact timing TBA' : cls.dateLabel}</p>
                    <div className="fc-instructor-profile">
                        <div className="instructor-avatar">👨‍🏫</div>
                        <div className="instructor-details">
                            <span className="instructor-name">{cls.instructor}</span>
                            {cls.linkedIn && (
                                <a
                                    href={cls.linkedIn}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="instructor-linkedin"
                                >
                                    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    LinkedIn Profile
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Countdown — hidden once live or on hold */}
                {!isLive && !cls.onHold && (
                    <div className="fc-countdown-block">
                        <p className="fc-countdown-label">⏰ Class starts in:</p>
                        <div className="fc-countdown-grid">
                            <div className="cd-unit">
                                <span>{String(days).padStart(2, '0')}</span>
                                <small>Days</small>
                            </div>
                            <div className="cd-sep">:</div>
                            <div className="cd-unit">
                                <span>{String(hours).padStart(2, '0')}</span>
                                <small>Hrs</small>
                            </div>
                            <div className="cd-sep">:</div>
                            <div className="cd-unit">
                                <span>{String(minutes).padStart(2, '0')}</span>
                                <small>Min</small>
                            </div>
                            <div className="cd-sep">:</div>
                            <div className="cd-unit">
                                <span>{String(seconds).padStart(2, '0')}</span>
                                <small>Sec</small>
                            </div>
                        </div>
                    </div>
                )}

                {cls.onHold && (
                    <div className="fc-countdown-block fc-countdown-tba">
                        <p className="fc-countdown-label" style={{ marginBottom: 0 }}>⏰ Schedule to be announced shortly. Stay tuned!</p>
                    </div>
                )}

                <div className="fc-curriculum">
                    <h3>What you will learn:</h3>
                    <p>{cls.curriculum}</p>
                </div>
            </div>

            {/* Join button — active only when live */}
            <div className="fc-card-action">
                {cls.onHold ? (
                    <button
                        className="join-class-btn join-locked"
                        disabled
                        title="Exact timing is not mentioned because the class may be rescheduled or cancelled."
                    >
                        🔒 Join Meet (Timing TBA)
                    </button>
                ) : isLive ? (
                    <a
                        href={cls.link}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary join-class-btn join-active"
                    >
                        🔴 Join Now — Class is Live!
                    </a>
                ) : (
                    <button
                        className="join-class-btn join-locked"
                        disabled
                        title="The join link will be activated when the class starts"
                    >
                        🔒 Join Meet (Opens at class time)
                    </button>
                )}
            </div>
        </div>
    );
};

// ──────────────────────────────────────────────────────────────────────────
// Page component
// ──────────────────────────────────────────────────────────────────────────
import { useNavigate } from 'react-router-dom';

const FreeClass = () => {
    const navigate = useNavigate();

    return (
        <div className="free-class-wrapper">
            <div className="fc-container">
                <header className="fc-header">
                    <div className="header-top">
                        <button className="btn-back-home" onClick={() => navigate('/community-hero')}>
                            ← Back to Home
                        </button>
                    </div>
                    <h1>Free Live Masterclasses</h1>
                    <p className="fc-subtitle">
                        Experience our teaching methodology before committing.
                        We upload live class links <strong>1 day prior</strong>. Anyone can join directly!
                        Sessions typically last for <strong>1-2 hours</strong>.
                        <br />
                        <span className="medium-text">Medium of Instruction: Tamil / English</span>
                    </p>
                </header>

                <div className="fc-list">
                    {upComingClasses.map((cls) => (
                        <ClassCard key={cls.id} cls={cls} />
                    ))}
                </div>

                <div className="fc-coming-soon">
                    <h3>More classes will be updated soon.</h3>
                    <p>Stay tuned to our community groups for direct announcements.</p>
                </div>
            </div>
        </div>
    );
};

export default FreeClass;
