// components/Contentsection/ContentSection.jsx
import React, { useState, useEffect } from 'react';
import './Contentsection.css';
import videoData from '../../data/videos';

const ContentSection = ({ content }) => {
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [category, setCategory] = useState('basics');
  const [speakingLanguage, setSpeakingLanguage] = useState('english');

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

  if (!content) {
    return <div className="content">Select a topic to view content.</div>;
  }

  if (content === 'video-tutorials') {
    return (
      <div className="content">
        <div className="video-filter-controls" style={{ display: 'flex' }}>
          <select
            value={speakingLanguage}
            onChange={(e) => setSpeakingLanguage(e.target.value)}
          >
            <option value="english">English</option>
            <option value="tamil">Tamil</option>
          </select>

          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="basics">Basics</option>
            <option value="oop">OOP</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="video-grid">
          {filteredVideos.length > 0 ? (
            filteredVideos.map((video) => (
              <div className="video-card" key={video.id}>
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="thumbnail"
                />
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <video controls src={video.videoUrl}></video>
              </div>
            ))
          ) : (
            <p>No videos found for this filter.</p>
          )}
        </div>
      </div>
    );
  }

  // Default: article/video/practice mode
  return (
    <div className="content">
      <h1>{content.title}</h1>
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
