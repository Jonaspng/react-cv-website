import { Timeline, timelineItemClasses } from "@mui/lab";

import ActivityTimlineItem from "./ActivityTimelineItem";

function ActivityTimeLine(props) {

  function renderItem(event) {
    return (
      <ActivityTimlineItem key={event.created_at} event={event}/>
    );
  }
  return (
    <Timeline 
      position="right" 
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
    {props.data.map(renderItem)}      
    </Timeline>
  )
  
}

export default ActivityTimeLine;