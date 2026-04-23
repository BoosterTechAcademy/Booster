import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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

const ContentRoute = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const contentId = pathParts[pathParts.length - 1] || 'video-tutorials';

  const content =
    contentId === 'video-tutorials'
      ? { type: 'video-tutorials' }
      : contentId === 'program-sheet'
        ? { type: 'program-sheet' }
        : contentMap[contentId] || contentMap['data-types-variables']; // default fallback

  return (
    <div className="learning-environment">
      <Sidebar
        isOpen={isSidebarOpen}
        onSelect={() => {
          if (window.innerWidth <= 900) setIsSidebarOpen(false);
        }}
      />
      <main className="content-area">
        <ContentView content={content} />
      </main>
    </div>
  );
};

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const showSidebarToggle = location.pathname.startsWith('/learn');

  return (
    <div className="app-container">
      <Navbar
        onToggleSidebar={toggleSidebar}
        showSidebarToggle={showSidebarToggle}
      />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/join-community" element={<WelcomeForm />} />
        <Route path="/community-hero" element={<CommunityHero />} />
        <Route path="/business-services" element={<BusinessServices />} />
        <Route path="/free-class" element={<FreeClass />} />
        <Route path="/mock-before-learn" element={<MockBeforeLearn />} />
        <Route path="/program-registration" element={<ProgramRegistration />} />
        <Route path="/registration-success" element={<RegistrationSuccess />} />
        <Route path="/book-mentor" element={<BookMentor />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
        <Route path="/roadmap" element={<div className="learning-environment roadmap-page"><Roadmap /></div>} />
        <Route path="/learn/*" element={<ContentRoute />} />
      </Routes>
    </div>
  );
};

export default App;
