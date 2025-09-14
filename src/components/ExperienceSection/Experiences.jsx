import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Cards from "../Cards";
import ExperienceData from "../../data/ExperienceData";


function Experiences() {

  const data = ExperienceData;

  function renderCard(data) {
    return (
      <Cards
        key={data.title}
        title={data.title}
        location={data.location}
        date={data.date}
        descriptions={data.descriptions}
        technologies={data.technologies}
        githubLink={data.githubLink}
        websiteLink={data.websiteLink}
        hasActions="false"
      />
    );
  }
  
  return (
    <Box pt={10} pl={4} pr={4} id={'experience'}>
      <Typography variant="h3" gutterBottom fontSize={52} fontWeight={500}>
        Experience
      </Typography>
      <Grid container>
        {data.map(renderCard)}
      </Grid>
    </Box>
    
  );

}

export default Experiences;