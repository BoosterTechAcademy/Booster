import React, { useState, useEffect } from 'react';
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
import MockBeforeLearn from './components/BusinessServices/MockBeforeLearn';
import ProgramRegistration from './components/BusinessServices/ProgramRegistration';
import RegistrationSuccess from './components/BusinessServices/RegistrationSuccess';
import BookMentor from './components/BusinessServices/BookMentor';
import BookingSuccess from './components/BusinessServices/BookingSuccess';
import './utils/copyCode';

const App = () => {
  const [selectedContentId, setSelectedContentId] = useState(() => {
    return localStorage.getItem('lastPath') || 'home';
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('lastPath', selectedContentId);
  }, [selectedContentId]);

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

  const handleCommunityHome = () => {
    setSelectedContentId('community-hero');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      <Navbar
        onHomeClick={handleNavHome}
        onToggleSidebar={toggleSidebar}
        currentRoute={selectedContentId}
        onNavigateToBusinessServices={() => setSelectedContentId('business-services')}
        onNavigateToFreeClass={() => setSelectedContentId('free-class')}
        onNavigateToMockBeforeLearn={() => setSelectedContentId('mock-before-learn')}
        onNavigateToBookMentor={() => setSelectedContentId('book-mentor')}
        showSidebarToggle={selectedContentId !== 'home' && selectedContentId !== 'join-community' && selectedContentId !== 'community-hero' && selectedContentId !== 'business-services' && selectedContentId !== 'free-class' && selectedContentId !== 'mock-before-learn' && selectedContentId !== 'program-registration' && selectedContentId !== 'registration-success' && selectedContentId !== 'book-mentor' && selectedContentId !== 'booking-success'}
      />

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
          onNavigateToMockBeforeLearn={() => setSelectedContentId('mock-before-learn')}
          onHomeClick={handleNavHome}
        />
      ) : selectedContentId === 'business-services' ? (
        <BusinessServices
          onNavigateToFreeClass={() => setSelectedContentId('free-class')}
          onNavigateToRegistration={() => setSelectedContentId('program-registration')}
          onNavigateToBookMentor={() => setSelectedContentId('book-mentor')}
          onHomeClick={handleCommunityHome}
        />
      ) : selectedContentId === 'free-class' ? (
        <FreeClass
          onHomeClick={handleCommunityHome}
          onNavigateToRegistration={() => setSelectedContentId('program-registration')}
        />
      ) : selectedContentId === 'mock-before-learn' ? (
        <MockBeforeLearn onHomeClick={handleCommunityHome} />
      ) : selectedContentId === 'program-registration' ? (
        <ProgramRegistration
          onNavigateToPayment={() => {
            // Since the payment step has been removed, map directly to the success page upon form completion.
            setSelectedContentId('registration-success');
          }}
          onHomeClick={handleCommunityHome}
        />
      ) : selectedContentId === 'registration-success' ? (
        <RegistrationSuccess onHomeClick={handleCommunityHome} />
      ) : selectedContentId === 'book-mentor' ? (
        <BookMentor
          onNavigateToSuccess={() => setSelectedContentId('booking-success')}
          onHomeClick={handleCommunityHome}
        />
      ) : selectedContentId === 'booking-success' ? (
        <BookingSuccess onHomeClick={handleCommunityHome} />
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
