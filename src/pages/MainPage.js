import { Box } from '@mui/material';
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
      <Box height={'100%'} paddingLeft={4} paddingRight={4} >
        <AboutMe />
        <RecentActivity />
        <Projects />
        <History />
        <BottomBar />
      </Box>
    </>
    
    
  );

}

export default MainPage;