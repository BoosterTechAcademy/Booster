import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import ContentView from "./components/Content/ContentView";
import Hero from './components/Hero/Hero';
import Roadmap from './components/Content/Roadmap';
import { contentMap } from './data/contentData';
import WelcomeForm from './components/JoinCommunity/WelcomeForm';
import CommunityHero from './components/BusinessServices/CommunityHero';
import BusinessServices from './components/BusinessServices/BusinessServices';
import FreeClass from './components/BusinessServices/FreeClass';
import './utils/copyCode';

const App = () => {
  const [selectedContentId, setSelectedContentId] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Derive the active content object from the map
  const content =
    selectedContentId === 'video-tutorials'
      ? { type: 'video-tutorials' }
      : selectedContentId === 'program-sheet'
        ? { type: 'program-sheet' }
        : contentMap[selectedContentId];

  const handleNavHome = () => {
    setSelectedContentId('home');
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      <Navbar onHomeClick={handleNavHome} onToggleSidebar={toggleSidebar} showSidebarToggle={selectedContentId !== 'home' && selectedContentId !== 'join-community' && selectedContentId !== 'community-hero' && selectedContentId !== 'business-services' && selectedContentId !== 'free-class'} />

      {selectedContentId === 'home' ? (
        <Hero
          onStartLearning={() => setSelectedContentId('roadmap')}
          onJoinCommunity={() => setSelectedContentId('join-community')}
        />
      ) : selectedContentId === 'join-community' ? (
        <WelcomeForm onValidationSuccess={() => setSelectedContentId('community-hero')} />
      ) : selectedContentId === 'community-hero' ? (
        <CommunityHero
          onNavigateToBusinessServices={() => setSelectedContentId('business-services')}
          onNavigateToFreeClass={() => setSelectedContentId('free-class')}
          onHomeClick={handleNavHome}
        />
      ) : selectedContentId === 'business-services' ? (
        <BusinessServices onNavigateToFreeClass={() => setSelectedContentId('free-class')} onHomeClick={handleNavHome} />
      ) : selectedContentId === 'free-class' ? (
        <FreeClass onHomeClick={handleNavHome} />
      ) : selectedContentId === 'roadmap' ? (
        <div className="learning-environment roadmap-page">
          <Roadmap onNavigate={(id) => setSelectedContentId(id)} />
        </div>
      ) : (
        <div className="learning-environment">
          <Sidebar
            isOpen={isSidebarOpen}
            onSelect={(id) => {
              setSelectedContentId(id);
              if (window.innerWidth <= 900) setIsSidebarOpen(false); // Close on mobile after selection
            }}
          />
          <main className="content-area">
            <ContentView content={content} />
          </main>
        </div>
      )}
    </div>
  );
};

export default App;
