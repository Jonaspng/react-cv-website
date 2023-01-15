import React from 'react';
import AboutMe from '../components/AboutMe';
import BottomBar from '../components/BottomBar';
import Circles from '../components/Circles';
import History from '../components/History';
import Projects from '../components/Projects';
import RecentActivity from '../components/RecentActivity';
import Topbar from '../components/TopBar';

function MainPage() {

  return (
    <>
      <Topbar />
      <div>
        <AboutMe />
        <RecentActivity />
        <Projects />
        <History />
        <Circles />
      </div>
      
      <BottomBar />
    </>
    
  );

}

export default MainPage;