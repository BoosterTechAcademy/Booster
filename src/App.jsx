import React from 'react';
import './App.css';
import TopBar from './components/Topbar/Topbar';
import SideBar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <>

     <TopBar/>
      <div className='Main-Section'>
         <SideBar/>
      </div>
    
    </>
  );
};

export default App;
