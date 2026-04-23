import React, { useState } from 'react';
import './Sidebar.css';


const Sidebar = ({ onSelect }) => {
  const [visible, setVisible] = useState(false);
  const [openSublist, setOpenSublist] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleSidebar = () => setVisible(!visible);
  const toggleSublist = (key) => {
    setOpenSublist((prev) => (prev === key ? null : key));
  };
  const renderArrow = (key) => (
    <span className="arrow">{openSublist === key ? '▼' : '▶'}</span>
  );

  const showModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      {/* Sidebar structure */}
      <div className={`sidebar-wrapper ${visible ? 'sidebar-open' : ''}`}>
        <button
          className={`sidebar-toggle ${visible ? 'toggle-inside' : ''}`}
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          {visible ? '<' : '>'}
        </button>

        <div className={`sidebar ${visible ? 'show' : ''}`}>
          <h2>Course Topics</h2>
          <ul>
            <li onClick={() => onSelect('introduction')}>Introduction</li>

            <li onClick={() => toggleSublist('basics1')}>
              {renderArrow('basics1')} Basics Level 1
            </li>
            {openSublist === 'basics1' && (
              <ul className="sublist show">
                <li onClick={() => onSelect('variables')}>Variables</li>
                <li onClick={() => onSelect('datatypes')}>Data Types</li>
                <li onClick={() => onSelect('operators')}>Operators</li>
                <li onClick={() => onSelect('controlflow')}>Control Flow</li>
                <li onClick={() => onSelect('loops')}>Looping Statements</li>
                <li onClick={() => onSelect('branching')}>Branching Statements</li>
              </ul>
            )}

            <li onClick={() => toggleSublist('basics2')}>
              {renderArrow('basics2')} Basics Level 2
            </li>
            {openSublist === 'basics2' && (
              <ul className="sublist show">
                <li onClick={() => onSelect('typecasting')}>Type Conversion</li>
                <li onClick={() => onSelect('arrays')}>Arrays</li>
                <li onClick={() => onSelect('methods')}>Methods</li>
                <li onClick={() => onSelect('accessmodifiers')}>Access Modifiers</li>
                <li onClick={() => onSelect('inout')}>User Input / Output</li>
              </ul>
            )}

            <li onClick={() => toggleSublist('inter1')}>
              {renderArrow('inter1')} Intermediate Level 1
            </li>
            {openSublist === 'inter1' && (
              <ul className="sublist show">
                <li onClick={() => onSelect('classobject')}>Class and Objects</li>
                <li onClick={() => onSelect('methodoverloading')}>Method Overloading</li>
                <li onClick={() => onSelect('constructor')}>Constructor</li>
                <li onClick={() => onSelect('static')}>Static Keyword</li>
                <li onClick={() => onSelect('thiskeyward')}>this and final keyword</li>
                <li onClick={() => onSelect('methodoverriding')}>Method Overriding</li>
              </ul>
            )}

            <li onClick={() => toggleSublist('inter2')}>
              {renderArrow('inter2')} Intermediate Level 2
            </li>
            {openSublist === 'inter2' && (
              <ul className="sublist show">
                <li onClick={() => onSelect('inheritance')}>Inheritance</li>
                <li onClick={showModal}>Polymorphism</li>
                <li onClick={() => onSelect('encapsulation')}>Encapsulation</li>
                <li onClick={() => onSelect('AbstractClassMethods')}>Abstract Class and Methods</li>
                <li onClick={() => onSelect('javaSuper')}>Java Super</li>
                <li onClick={() => onSelect('interface')}>Interface</li>
              </ul>
            )}

            <li onClick={showModal}>Exception Handling</li>
            <li onClick={showModal}>Advanced Topics</li>
            <li onClick={showModal}>Data Structures</li>
            <li onClick={showModal}>Algorithms</li>

            <li onClick={() => toggleSublist('problems')}>
              {renderArrow('problems')} Basics Problems
            </li>
            {openSublist === 'problems' && (
              // onClick={() => onSelect('program-sheet')}
              <ul className="sublist show">
                <li onClick={showModal}>Program Sheet</li>
              </ul>
            )}

            <li onClick={showModal}>Projects</li>
            <li onClick={showModal}>Interview Prep</li>
            <li onClick={() => onSelect('video-tutorials')}>Video Tutorials</li>
          </ul>
        </div>
      </div>

      {/* Popup Modal */}
      {modalOpen && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="popup-close-x" onClick={closeModal} aria-label="Close Popup">&times;</button>
            <h2>🚧 Content Under Development</h2>
            <p>We are working hard to bring this content to you. It will be available soon.</p>
            <p>Thank you for your patience and support!</p>
            <button className="close-btn" onClick={closeModal}>
              Okay, Got it!
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
