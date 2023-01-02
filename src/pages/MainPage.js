import React from 'react';
import AboutMe from '../components/AboutMe';
import BottomBar from '../components/BottomBar';
import History from '../components/History';
import Projects from '../components/Projects';
import RecentActivity from '../components/RecentActivity';
import Topbar from '../components/TopBar';

function MainPage() {

  return (
    <>
      <Topbar />
      <AboutMe />
      <RecentActivity />
      <Projects />
      <History />
      <BottomBar />
    </>
    
  );

}

export default MainPage;