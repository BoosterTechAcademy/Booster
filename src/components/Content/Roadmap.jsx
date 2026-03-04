import React from 'react';
import './Roadmap.css';

const roadmapData = [
    {
        id: 1,
        title: 'The Fundamentals',
        description: 'Master the core syntax, data types, operators, and control flow to build strong foundations.',
        topics: ['Introduction', 'Basics Level 1', 'Basics Level 2'],
        icon: '🌱',
        color: '#10b981', // Emerald
        targetId: 'introduction'
    },
    {
        id: 2,
        title: 'Object-Oriented Programming',
        description: 'Learn how to model real-world problems using classes, inheritance, and polymorphism.',
        topics: ['Intermediate Level 1', 'Intermediate Level 2'],
        icon: '🧩',
        color: '#0ea5e9', // Sky Blue
        targetId: 'classobject'
    },
    {
        id: 3,
        title: 'Advanced & Data Structures',
        description: 'Handle errors gracefully and dive into collections, algorithms, and deep concepts.',
        topics: ['Exception Handling', 'Data Structures', 'Algorithms'],
        icon: '⚡',
        color: '#f59e0b', // Amber
        targetId: 'exceptionHandling'
    },
    {
        id: 4,
        title: 'Career Readiness',
        description: 'Put it all together with real projects and prepare for technical interviews.',
        topics: ['Basics Problems', 'Projects', 'Interview Prep'],
        icon: '🚀',
        color: '#8b5cf6', // Violet
        targetId: 'program-sheet'
    }
];

const Roadmap = ({ onNavigate }) => {
    return (
        <div className="roadmap-view">
            <div className="roadmap-header">
                <h1>Your Learning Journey</h1>
                <p>A step-by-step path from beginner to industry-ready Java Developer.</p>
            </div>

            <div className="timeline-container">
                {roadmapData.map((phase, index) => (
                    <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={phase.id}>
                        <div className="timeline-content" onClick={() => onNavigate(phase.targetId)}>
                            <div className="phase-header" style={{ borderLeftColor: phase.color }}>
                                <span className="phase-icon" style={{ backgroundColor: `${phase.color}20`, color: phase.color }}>
                                    {phase.icon}
                                </span>
                                <h2>{phase.title}</h2>
                            </div>
                            <p className="phase-desc">{phase.description}</p>

                            <div className="topics-list">
                                {phase.topics.map((topic, idx) => (
                                    <span key={idx} className="topic-pill">{topic}</span>
                                ))}
                            </div>

                            <button className="start-phase-btn">
                                Start Module
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Roadmap;
