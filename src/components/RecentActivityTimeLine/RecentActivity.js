import { React, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material"

import ActivityTimeLine from "./ActivityTimeLine";
import DefaultActivityData from "../../data/DefaultActivityData";

function RecentActivity() {

  const [activityData, setActivityData] = useState([]);

  async function getRecentActivity(){
    try {
        return await fetch("https://api.github.com/users/jonaspng/events/public")
            .then((res) => res.json())
            .then((data) => setActivityData(data.slice(0,5)));
    } catch(error) {
        console.log(error);
    }
    if (activityData.length === 0) {
      setActivityData(DefaultActivityData)
    }
}
  useEffect(()=> {
    getRecentActivity();
  })
  

  return (
    <Box pt={10} pl={4} pr={4} id={"recentactivity"}>
      <Typography variant="h3" gutterBottom fontSize={52} fontWeight={500}>
        Recent Activity
      </Typography>
      <ActivityTimeLine data={activityData}/>
    </Box>
  );

}

export default RecentActivity;