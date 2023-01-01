import React from 'react';
import AboutMe from '../components/AboutMe';
import History from '../components/History';
import Projects from '../components/Projects';
import Topbar from '../components/TopBar';

function MainPage() {

  return (
    <>
      <Topbar />
      <AboutMe />
      <Projects />
      <History />
    </>
    
  );

}

export default MainPage;