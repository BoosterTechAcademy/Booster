import React, { useState, useEffect } from 'react';
import './Contentsection.css';
import videoData from '../../data/videos';
import programSheetData from '../../data/programSheet';

const ContentSection = ({ content }) => {
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [category, setCategory] = useState('basics');
  const [speakingLanguage, setSpeakingLanguage] = useState('english');
  const [expandedSections, setExpandedSections] = useState({});

  // Helper to convert YouTube link to embed format
  const convertYouTubeUrl = (url) => {
    const match = url.match(/(?:youtu\.be\/|v=)([^&\s?]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  useEffect(() => {
    if (content === 'video-tutorials') {
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

if (!content) {
  return (
    <div className="content no-content-message">
  <div className="programmer-wrapper">
    <div className="computer-desk">
      <div className="monitor">
        <div className="typing-animation">Loading<span className="dots"></span></div>
      </div>
      <div className="keyboard"></div>
      <div className="programmer"></div>
    </div>
    <div className="message-box">
      <h2>Our Developer is Typing Code ⌨️</h2>
      <p>
        This section is still under development.<br />
        Stay tuned for upcoming content!
      </p>
    </div>
  </div>
</div>

  );
}





  if (content === 'video-tutorials') {
    return (
      <div className="content">
        <div className="video-filter-controls" style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <select
            value={speakingLanguage}
            onChange={(e) => setSpeakingLanguage(e.target.value)}
          >
            <option value="english">English</option>
            <option value="tamil">Tamil</option>
          </select>

          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="basics">Basics</option>
            <option value="oops">OOP</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="video-grid">
          {filteredVideos.length > 0 ? (
            filteredVideos.map((video) => (
              <div className="video-card" key={video._id}>
               
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <iframe
                  width="100%"
                  height="250"
                  src={convertYouTubeUrl(video.videoUrl)}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))
          ) : (
            <p>No videos found for this filter.</p>
          )}
        </div>
      </div>
    );
  }

  if (content === 'program-sheet') {
    return (
      <div className="content">
        {programSheetData.map((section, index) => (
          <div className="dropdown-section" style={{ marginBottom: '20px' }} key={index}>
            <div
              className="dropdown-header"
              style={{
                cursor: 'pointer',
                fontWeight: 'bold',
                background: '#f0f0f0',
                padding: '10px',
                borderRadius: '5px'
              }}
              onClick={() => toggleSection(section.topic)}
            >
              {section.topic}
              <span className="arrow" style={{ float: 'right' }}>
                {expandedSections[section.topic] ? '▲' : '▼'}
              </span>
            </div>

            {expandedSections[section.topic] && (
              <div className="dropdown-content" style={{ marginTop: '10px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
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
                        <td>{item.name}</td>
                        <td>
                          <a href={item.video} target="_blank" rel="noopener noreferrer">
                            Watch
                          </a>
                        </td>
                        <td>
                          <a href={item.article} target="_blank" rel="noopener noreferrer">
                            Read
                          </a>
                        </td>
                        <td>
                          <a href={item.practice} target="_blank" rel="noopener noreferrer">
                            Practice
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="content">
      <h1 className="title">{content.title}</h1>
      {content.article && <p>{content.article}</p>}
      {content.video && (
        <iframe
          src={content.video}
          title="Video"
          width="100%"
          height="300"
          allowFullScreen
        ></iframe>
      )}
      {content.practice && (
        <div>
          <a href={content.practice} target="_blank" rel="noopener noreferrer">
            Practice Here
          </a>
        </div>
      )}
      {content.description && (
        <div
          className="html-description"
          dangerouslySetInnerHTML={{ __html: content.description }}
        />
      )}
    </div>
  );
};

export default ContentSection;
