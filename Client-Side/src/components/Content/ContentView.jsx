import React, { useState, useEffect } from 'react';
import './ContentView.css';
import videoData from '../../data/videos';
import programSheetData from '../../data/programSheet';
import AlgorithmVisualizer from './AlgorithmVisualizer';

const ContentView = ({ content }) => {
    const [filteredVideos, setFilteredVideos] = useState([]);
    const [category, setCategory] = useState('basics');
    const [speakingLanguage, setSpeakingLanguage] = useState('english');
    const [expandedSections, setExpandedSections] = useState({});

    useEffect(() => {
        if (content?.type === 'video-tutorials') {
            const filtered = videoData.filter(
                (video) =>
                    video.category === category &&
                    video.speakingLanguage === speakingLanguage
            );
            setFilteredVideos(filtered);
        }
    }, [content, category, speakingLanguage]);

    const toggleSection = (topic) => {
        setExpandedSections((prev) => ({
            ...prev,
            [topic]: !prev[topic]
        }));
    };

    const convertYouTubeUrl = (url) => {
        if (!url) return '';
        const match = url.match(/(?:youtu\.be\/|v=)([^&\s?]+)/);
        return match ? `https://www.youtube.com/embed/${match[1]}` : url;
    };

    if (!content) {
        return (
            <div className="content-view empty-state">
                <div className="empty-state-icon">⚡</div>
                <h2>Content Needed</h2>
                <p>Please select a topic from the sidebar.</p>
            </div>
        );
    }

    // Handle Video Tutorials Page
    if (content.type === 'video-tutorials') {
        return (
            <div className="content-view view-videos">
                <div className="view-header">
                    <h1>Video Tutorials</h1>
                    <p>Learn at your own pace with our curated video content.</p>
                </div>

                <div className="filter-controls">
                    <div className="filter-group">
                        <label>Language</label>
                        <select value={speakingLanguage} onChange={(e) => setSpeakingLanguage(e.target.value)}>
                            <option value="english">English</option>
                            <option value="tamil">Tamil</option>
                        </select>
                    </div>
                    <div className="filter-group">
                        <label>Category</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="basics">Basics</option>
                            <option value="oops">OOP</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </div>
                </div>

                <div className="video-grid">
                    {filteredVideos.length > 0 ? (
                        filteredVideos.map((video) => (
                            <div className="video-card" key={video._id}>
                                <div className="video-wrapper">
                                    <iframe
                                        src={convertYouTubeUrl(video.videoUrl)}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="video-info">
                                    <h3>{video.title}</h3>
                                    <p>{video.description}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="empty-state">
                            <p>No videos found for exactly this filter combination.</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // Handle Project Guide
    if (content.type === 'project-guide') {
        return (
            <div className="content-view view-projects">
                <div className="view-header">
                    <h1>{content.title}</h1>
                    <p>{content.description}</p>
                </div>

                <div className="projects-timeline">
                    {content.levels.map((level, lvlIdx) => (
                        <div className="project-level-block" key={lvlIdx}>
                            <div className="level-header">
                                <div className="level-badge">Step {lvlIdx + 1}</div>
                                <h2>{level.levelName}</h2>
                            </div>
                            <p className="level-desc">{level.description}</p>

                            <div className="project-cards-grid">
                                {level.projects.map((proj, pIdx) => (
                                    <div className="project-card" key={pIdx}>
                                        <div className="proj-card-header">
                                            <h3>{proj.name}</h3>
                                            <span className={`difficulty-badge ${proj.difficulty.toLowerCase()}`}>
                                                {proj.difficulty}
                                            </span>
                                        </div>
                                        <div className="proj-meta">
                                            <span className="meta-icon">⏱️</span>
                                            <span>{proj.timeEstimate}</span>
                                        </div>

                                        <div className="proj-problem">
                                            <h4>Mission Statement</h4>
                                            <p>{proj.problemStatement}</p>
                                        </div>

                                        <div className="proj-features">
                                            <h4>Key Learnings & Features</h4>
                                            <ul>
                                                {proj.featuresToImplement.map((feat, fIdx) => (
                                                    <li key={fIdx}>{feat}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="proj-actions">
                                            {proj.videoSrc && (
                                                <a href={proj.videoSrc} target="_blank" rel="noopener noreferrer" className="action-link primary proj-link">
                                                    🎬 Watch Guide
                                                </a>
                                            )}
                                            {proj.articleLink && (
                                                <a href={proj.articleLink} target="_blank" rel="noopener noreferrer" className="action-link outline proj-link">
                                                    📄 Read Architecture
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Handle Algorithm Guide
    if (content.type === 'algorithm-guide') {
        return (
            <div className="content-view view-algorithms">
                <div className="view-header">
                    <h1>{content.title}</h1>
                    <p>{content.description}</p>
                </div>

                <div className="algorithm-list">
                    {content.list.map((algo, index) => (
                        <div className="algorithm-card" key={index}>
                            <div className="algo-header">
                                <h2>{algo.name}</h2>
                                <span className={`difficulty-badge ${algo.difficulty.toLowerCase().replace(/ \/ /g, '-')}`}>
                                    {algo.difficulty}
                                </span>
                            </div>

                            <div className="algo-concept">
                                <p>{algo.concept}</p>
                            </div>

                            <div className="algo-visualization">
                                <h4>Mental Model</h4>
                                <div className="viz-box">
                                    <pre>{algo.visualization}</pre>
                                </div>
                            </div>

                            {algo.iterations && algo.iterations.length > 0 && (
                                <AlgorithmVisualizer steps={algo.iterations} />
                            )}

                            <div className="algo-code" style={{ marginTop: '24px' }}>
                                <h4>Java Implementation</h4>
                                <div className="code-container">
                                    <button className="copy-btn" onClick={() => navigator.clipboard.writeText(algo.code)}>Copy</button>
                                    <pre className="code-block">{algo.code}</pre>
                                </div>
                            </div>

                            <div className="algo-resources">
                                <h4>Learning Resources</h4>
                                <div className="resource-links">
                                    {algo.videoSrc && (
                                        <a href={algo.videoSrc} target="_blank" rel="noopener noreferrer" className="action-link outline video-link">
                                            🎬 Watch Tutorial
                                        </a>
                                    )}
                                    {algo.articleLink && (
                                        <a href={algo.articleLink} target="_blank" rel="noopener noreferrer" className="action-link outline doc-link">
                                            📄 Read Article
                                        </a>
                                    )}
                                    {algo.practiceLink && (
                                        <a href={algo.practiceLink} target="_blank" rel="noopener noreferrer" className="action-link primary practice-link">
                                            💻 Practice Problem
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Handle Program Sheet Page
    if (content.type === 'program-sheet') {
        return (
            <div className="content-view view-programs">
                <div className="view-header">
                    <h1>Program Practice Sheet</h1>
                    <p>Sharpen your problem-solving skills with these categorized exercises.</p>
                </div>

                <div className="accordion-group">
                    {programSheetData.map((section, index) => (
                        <div className={`accordion-card ${expandedSections[section.topic] ? 'expanded' : ''}`} key={index}>
                            <div
                                className="accordion-header"
                                onClick={() => toggleSection(section.topic)}
                            >
                                <h3>{section.topic}</h3>
                                <span className="toggle-icon">
                                    {expandedSections[section.topic] ? '−' : '+'}
                                </span>
                            </div>

                            {expandedSections[section.topic] && (
                                <div className="accordion-body">
                                    <div className="table-responsive">
                                        <table className="modern-table">
                                            <thead>
                                                <tr>
                                                    <th>Program</th>
                                                    <th>Video Tutorial</th>
                                                    <th>Article</th>
                                                    <th>Practice Link</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {section.items.map((item, idx) => (
                                                    <tr key={idx}>
                                                        <td className="fw-500">{item.name}</td>
                                                        <td>
                                                            {item.video ? <a href={item.video} target="_blank" rel="noopener noreferrer" className="action-link">Watch</a> : '-'}
                                                        </td>
                                                        <td>
                                                            {item.article ? <a href={item.article} target="_blank" rel="noopener noreferrer" className="action-link outline">Read</a> : '-'}
                                                        </td>
                                                        <td>
                                                            {item.practice ? <a href={item.practice} target="_blank" rel="noopener noreferrer" className="action-link primary">Practice</a> : '-'}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Handle Standard Rich Text / HTML Content
    return (
        <div className="content-view">
            {content.title && <h1 className="content-title">{content.title}</h1>}
            {content.article && <p className="content-lead">{content.article}</p>}

            {content.video && (
                <div className="video-wrapper single-video mb-4">
                    <iframe
                        src={convertYouTubeUrl(content.video)}
                        title="Overview Video"
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            {content.description && (
                <div
                    className="rich-text-content"
                    dangerouslySetInnerHTML={{ __html: content.description }}
                />
            )}

            {content.practice && (
                <div className="practice-banner mt-4">
                    <h3>Ready to test your knowledge?</h3>
                    <a href={content.practice} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        Start Practice
                    </a>
                </div>
            )}
        </div>
    );
};

export default ContentView;
