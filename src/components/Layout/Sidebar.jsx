import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onSelect }) => {
    const [openSublist, setOpenSublist] = useState(null);

    const toggleSublist = (key) => {
        setOpenSublist(prev => (prev === key ? null : key));
    };

    const renderArrow = (key) => (
        <span className={`accordion-arrow ${openSublist === key ? 'open' : ''}`}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 9L7.5 6L4.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
    );

    return (
        <aside className={`sidebar-container ${isOpen ? 'sidebar-open' : ''}`}>
            <div className="sidebar-header">
                <h2 className="sidebar-title">Course Topics</h2>
            </div>

            <div className="sidebar-content">
                <ul className="menu-list">
                    <li className="menu-item" onClick={() => onSelect('introduction')}>
                        <span className="item-text">Introduction</span>
                    </li>

                    {/* Basics Level 1 */}
                    <li className="menu-item has-submenu" onClick={() => toggleSublist('basics1')}>
                        <span className="item-text">Basics Level 1</span>
                        {renderArrow('basics1')}
                    </li>
                    <div className={`submenu-wrapper ${openSublist === 'basics1' ? 'open' : ''}`}>
                        <ul className="submenu-list">
                            <li className="submenu-item" onClick={() => onSelect('variables')}>Variables</li>
                            <li className="submenu-item" onClick={() => onSelect('datatypes')}>Data Types</li>
                            <li className="submenu-item" onClick={() => onSelect('operators')}>Operators</li>
                            <li className="submenu-item" onClick={() => onSelect('controlflow')}>Control Flow</li>
                            <li className="submenu-item" onClick={() => onSelect('loops')}>Looping Statements</li>
                            <li className="submenu-item" onClick={() => onSelect('branching')}>Branching Statements</li>
                        </ul>
                    </div>

                    {/* Basics Level 2 */}
                    <li className="menu-item has-submenu" onClick={() => toggleSublist('basics2')}>
                        <span className="item-text">Basics Level 2</span>
                        {renderArrow('basics2')}
                    </li>
                    <div className={`submenu-wrapper ${openSublist === 'basics2' ? 'open' : ''}`}>
                        <ul className="submenu-list">
                            <li className="submenu-item" onClick={() => onSelect('typecasting')}>Type Conversion</li>
                            <li className="submenu-item" onClick={() => onSelect('arrays')}>Arrays</li>
                            <li className="submenu-item" onClick={() => onSelect('methods')}>Methods</li>
                            <li className="submenu-item" onClick={() => onSelect('accessmodifiers')}>Access Modifiers</li>
                            <li className="submenu-item" onClick={() => onSelect('inout')}>User Input / Output</li>
                        </ul>
                    </div>

                    {/* Intermediate Level 1 */}
                    <li className="menu-item has-submenu" onClick={() => toggleSublist('inter1')}>
                        <span className="item-text">Intermediate Level 1</span>
                        {renderArrow('inter1')}
                    </li>
                    <div className={`submenu-wrapper ${openSublist === 'inter1' ? 'open' : ''}`}>
                        <ul className="submenu-list">
                            <li className="submenu-item" onClick={() => onSelect('classobject')}>Class and Objects</li>
                            <li className="submenu-item" onClick={() => onSelect('methodoverloading')}>Method Overloading</li>
                            <li className="submenu-item" onClick={() => onSelect('constructor')}>Constructor</li>
                            <li className="submenu-item" onClick={() => onSelect('static')}>Static Keyword</li>
                            <li className="submenu-item" onClick={() => onSelect('thiskeyward')}>this and final keyword</li>
                            <li className="submenu-item" onClick={() => onSelect('methodoverriding')}>Method Overriding</li>
                        </ul>
                    </div>

                    {/* Intermediate Level 2 */}
                    <li className="menu-item has-submenu" onClick={() => toggleSublist('inter2')}>
                        <span className="item-text">Intermediate Level 2</span>
                        {renderArrow('inter2')}
                    </li>
                    <div className={`submenu-wrapper ${openSublist === 'inter2' ? 'open' : ''}`}>
                        <ul className="submenu-list">
                            <li className="submenu-item" onClick={() => onSelect('inheritance')}>Inheritance</li>
                            <li className="submenu-item" onClick={() => onSelect('polymorphism')}>Polymorphism</li>
                            <li className="submenu-item" onClick={() => onSelect('encapsulation')}>Encapsulation</li>
                            <li className="submenu-item" onClick={() => onSelect('AbstractClassMethods')}>Abstract Class and Methods</li>
                            <li className="submenu-item" onClick={() => onSelect('javaSuper')}>Java Super</li>
                            <li className="submenu-item" onClick={() => onSelect('interface')}>Interface</li>
                        </ul>
                    </div>

                    <li className="menu-item" onClick={() => onSelect('exceptionHandling')}>
                        <span className="item-text">Exception Handling</span>
                    </li>
                    <li className="menu-item" onClick={() => onSelect('advancedTopics')}>
                        <span className="item-text">Advanced Topics</span>
                    </li>
                    <li className="menu-item" onClick={() => onSelect('dataStructures')}>
                        <span className="item-text">Data Structures</span>
                    </li>
                    <li className="menu-item" onClick={() => onSelect('algorithms')}>
                        <span className="item-text">Algorithms</span>
                    </li>

                    {/* Basics Problems */}
                    <li className="menu-item has-submenu" onClick={() => toggleSublist('problems')}>
                        <span className="item-text">Basics Problems</span>
                        {renderArrow('problems')}
                    </li>
                    <div className={`submenu-wrapper ${openSublist === 'problems' ? 'open' : ''}`}>
                        <ul className="submenu-list">
                            <li className="submenu-item" onClick={() => onSelect('program-sheet')}>Program Sheet</li>
                        </ul>
                    </div>

                    <li className="menu-item" onClick={() => onSelect('projects')}>
                        <span className="item-text">Projects</span>
                    </li>
                    <li className="menu-item" onClick={() => onSelect('interviewPrep')}>
                        <span className="item-text">Interview Prep</span>
                    </li>
                    <li className="menu-item" onClick={() => onSelect('video-tutorials')}>
                        <span className="item-text">Video Tutorials</span>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
