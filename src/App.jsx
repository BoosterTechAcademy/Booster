import React, { useState } from 'react';
import './App.css';
import TopBar from './components/Topbar/Topbar';
import SideBar from './components/Sidebar/Sidebar';
import ContentSection from './components/Contentsection/Contentsection';
import { contentMap } from './data/contentData';
import './utils/copyCode';

const App = () => {
  const [selectedContentId, setSelectedContentId] = useState('introduction');

  const content = 
    selectedContentId === 'video-tutorials'
      ? 'video-tutorials'
      : selectedContentId === 'program-sheet'
      ? 'program-sheet'
      : contentMap[selectedContentId];

  return (
    <>
      <TopBar />
      <div className="app-layout">
        <SideBar onSelect={setSelectedContentId} />
        <ContentSection content={content} />
      </div>
    </>
  );
};

export default App;
