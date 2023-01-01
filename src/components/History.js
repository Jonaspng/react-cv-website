import { Timeline, TimelineConnector, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineOppositeContent } from "@mui/lab";
import { Typography, Box, Link } from "@mui/material";


function History() {

  return(
    <Box padding={10} id={'history'}>
      <Typography variant="h3" gutterBottom fontSize={52} fontWeight={500}>
        History of CV website
      </Typography>
      <Timeline position="right">
        <TimelineItem>
          <TimelineOppositeContent color={'grey'}>
            January 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
              <Link underline='none' color='black' href='#'>
                React CV Website with Material UI
              </Link>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color={'grey'}>
            August 2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
              <Link underline='none' color='black' href='https://jonaspng.github.io/cv2/'>
                CV Website with Bootstrap
              </Link>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color={'grey'}>
            Feburary 2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
                <Link underline='none' color='black' href='https://jonaspng.github.io/cv/'>
                  First CV Website
                </Link>
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      
    </Box>
    

  );

}

export default History;