import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [visible, setVisible] = useState(false);
  const [openSublist, setOpenSublist] = useState({});

  const toggleSidebar = () => setVisible(!visible);

  const toggleSublist = (key) => {
    setOpenSublist((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle Sidebar">
        &#9776;
      </button>

      <div className={`sidebar ${visible ? 'show' : ''}`}>
        <h2>Course Topics</h2>
        <ul>
          <li onClick={() => toggleSublist('intro')}>Introduction</li>

          <li onClick={() => toggleSublist('basics1')}>
            Basics Level 1
          </li>
          <ul className={`sublist ${openSublist.basics1 ? 'show' : ''}`}>
            <li>Variables</li>
            <li>Data Types</li>
            <li>Operators</li>
            <li>Control Flow</li>
            <li>Looping Statements</li>
            <li>Branching Statements</li>
          </ul>

          <li onClick={() => toggleSublist('basics2')}>
            Basics Level 2
          </li>
          <ul className={`sublist ${openSublist.basics2 ? 'show' : ''}`}>
            <li>Type Conversion</li>
            <li>Arrays</li>
            <li>Methods</li>
            <li>Access Modifiers</li>
            <li>User Input / Output</li>
          </ul>

          <li onClick={() => toggleSublist('inter1')}>
            Intermediate Level 1
          </li>
          <ul className={`sublist ${openSublist.inter1 ? 'show' : ''}`}>
            <li>Class and Objects</li>
            <li>Method Overloading</li>
            <li>Constructor</li>
            <li>Static Keyword</li>
            <li>this and final keyword</li>
            <li>Method Overriding</li>
          </ul>

          <li onClick={() => toggleSublist('inter2')}>
            Intermediate Level 2
          </li>
          <ul className={`sublist ${openSublist.inter2 ? 'show' : ''}`}>
            <li>Inheritance</li>
            <li>Polymorphism</li>
            <li>Encapsulation</li>
            <li>Abstract Class and Methods</li>
            <li>Java Super</li>
            <li>Interface</li>
          </ul>

          <li>Exception Handling</li>
          <li>Advanced Topics</li>
          <li>Data Structures</li>
          <li>Algorithms</li>

          <li onClick={() => toggleSublist('problems')}>
            Basics Problems
          </li>
          <ul className={`sublist ${openSublist.problems ? 'show' : ''}`}>
            <li>Program Sheet</li>
          </ul>

          <li>Projects</li>
          <li>Interview Prep</li>
          <li>Video Tutorials</li>
        </ul>
      </div>

      <div className="video-filter-controls" style={{ display: 'none' }}>
        <select id="speakingLanguageSelect">
          <option value="english">English</option>
          <option value="tamil">Tamil</option>
        </select>

        <select id="categorySelect">
          <option value="basics">Basics</option>
          <option value="oop">OOP</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
    </>
  );
};

export default Sidebar;
