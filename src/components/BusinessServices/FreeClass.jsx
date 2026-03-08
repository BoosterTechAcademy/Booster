import React from 'react';
import './FreeClass.css';

const upComingClasses = [
    {
        id: 1,
        title: 'Mastering Pattern Printing Logic',
        date: 'Tomorrow, 7:00 PM IST',
        duration: '2-3 hrs',
        curriculum: 'Learn how to approach any pattern printing interview question using nested loops and mathematical logic (Pseudo code based).',
        link: 'https://meet.google.com/',
        instructor: 'Senior Mentor'
    },
    {
        id: 2,
        title: 'Introduction to Dynamic Programming',
        date: 'Sunday, 10:00 AM IST',
        duration: '2-3 hrs',
        curriculum: 'Break down complex recursion problems into simple DP tabular and memoization approaches.',
        link: 'https://meet.google.com/',
        instructor: 'DSA Expert'
    }
];

const FreeClass = ({ onHomeClick }) => {
    return (
        <div className="free-class-wrapper">


            <div className="fc-container">
                <header className="fc-header">
                    <h1>Free Live Masterclasses</h1>
                    <p className="fc-subtitle">
                        Experience our teaching methodology before committing.
                        We upload live class links 1 day prior. Anyone can join directly!
                        Sessions typically last for <strong>2-3 hours</strong>.
                        <br />
                        <span className="medium-text">Medium of Instruction: Tamil / English</span>
                    </p>
                </header>

                <div className="fc-list">
                    {upComingClasses.map((cls) => (
                        <div key={cls.id} className="fc-list-card">
                            <div className="fc-card-info">
                                <div className="fc-card-header">
                                    <div className="live-badge">Live Scheduled</div>
                                    <span className="fc-duration">⏳ {cls.duration}</span>
                                </div>
                                <h2 className="fc-title">{cls.title}</h2>

                                <div className="fc-meta">
                                    <p className="fc-date">📅 {cls.date}</p>

                                    <div className="fc-instructor-profile">
                                        <div className="instructor-avatar">👨‍🏫</div>
                                        <div className="instructor-details">
                                            <span className="instructor-name">{cls.instructor}</span>
                                            <span className="instructor-role">{cls.instructorRole}</span>
                                            <a href={cls.instructorLinkedIn} target="_blank" rel="noreferrer" className="instructor-linkedin">
                                                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                                LinkedIn Profile
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="fc-curriculum">
                                    <h3>What you will learn:</h3>
                                    <p>{cls.curriculum}</p>
                                </div>
                            </div>

                            <div className="fc-card-action">
                                <a
                                    href={cls.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-primary join-class-btn"
                                >
                                    Join Meet Here →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State / Coming Soon */}
                <div className="fc-coming-soon">
                    <h3>More classes will be updated soon.</h3>
                    <p>Stay tuned to our community groups for direct announcements.</p>
                </div>
            </div>
        </div>
    );
};

export default FreeClass;
