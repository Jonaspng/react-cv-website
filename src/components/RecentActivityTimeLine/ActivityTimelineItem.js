import { Card, Typography } from "@mui/material";
import {
  TimelineConnector, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineDot, 
  TimelineContent, 
} from "@mui/lab";
import moment from 'moment';

function ActivityTimlineItem(props) {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot sx={{backgroundColor:"limegreen"}}/>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Card sx={{maxWidth: 380, p: 1.5, borderRight: "10px solid limegreen"}}>
        <Typography gutterBottom variant="h6">
          {props.event.type.slice(0, props.event.type.length - 5)}
        </Typography>
        <Typography gutterBottom variant="subtitle2">
          {props.event.repo.name}
        </Typography>
        <Typography gutterBottom variant="body2">
          {moment(new Date(props.event.created_at)).fromNow()}
        </Typography>
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
}

export default ActivityTimlineItem;