import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ onSelect }) => {
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

          <li onClick={() => toggleSublist('basics1')}>Basics Level 1</li>
          <ul className={`sublist ${openSublist.basics1 ? 'show' : ''}`}>
            <li onClick={() => onSelect('variables')}>Variables</li>
            <li onClick={() => onSelect('datatypes')}>Data Types</li>
            <li onClick={() => onSelect('operators')}>Operators</li>
            <li onClick={() => onSelect('flow')}>Control Flow</li>
            <li onClick={() => onSelect('loops')}>Looping Statements</li>
            <li onClick={() => onSelect('branching')}>Branching Statements</li>
          </ul>

          <li onClick={() => toggleSublist('basics2')}>Basics Level 2</li>
          <ul className={`sublist ${openSublist.basics2 ? 'show' : ''}`}>
            <li>Type Conversion</li>
            <li>Arrays</li>
            <li>Methods</li>
            <li>Access Modifiers</li>
            <li>User Input / Output</li>
          </ul>

          <li onClick={() => toggleSublist('inter1')}>Intermediate Level 1</li>
          <ul className={`sublist ${openSublist.inter1 ? 'show' : ''}`}>
            <li>Class and Objects</li>
            <li>Method Overloading</li>
            <li>Constructor</li>
            <li>Static Keyword</li>
            <li>this and final keyword</li>
            <li>Method Overriding</li>
          </ul>

          <li onClick={() => toggleSublist('inter2')}>Intermediate Level 2</li>
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

          <li onClick={() => toggleSublist('problems')}>Basics Problems</li>
          <ul className={`sublist ${openSublist.problems ? 'show' : ''}`}>
            <li onClick={() => onSelect('program-sheet')}>Program Sheet</li>
          </ul>

          <li>Projects</li>
          <li>Interview Prep</li>
          <li onClick={() => onSelect('video-tutorials')}>Video Tutorials</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
