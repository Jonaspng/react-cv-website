import AboutMe from '../components/AboutMe';

import Circles from '../components/Circles';
import History from '../components/History';
import Projects from '../components/ProjectSection/Projects';
import RecentActivity from '../components/RecentActivityTimeLine/RecentActivity';
import Experiences from '../components/ExperienceSection/Experiences';

import Topbar from '../components/Bars/TopBar';
import BottomBar from '../components/Bars/BottomBar';

function MainPage() {

  return (
    <>
      <Topbar />
      <div>
        <AboutMe />
        <RecentActivity />
        <Experiences />
        <Projects />
        <History />
        <Circles />
      </div>
      <BottomBar />
    </>
    
  );

}

export default MainPage;