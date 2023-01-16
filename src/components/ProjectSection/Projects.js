import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ProjectCard from "./ProjectCard";
import ProjectData from "../../data/ProjectData";


function Projects() {

  const data = ProjectData;

  function renderCard(data) {
    return (
      <ProjectCard
        key={data.title}
        title={data.title}
        descriptions={data.descriptions}
        technologies={data.technologies}
        githubLink={data.githubLink}
        websiteLink={data.websiteLink}
      />
    );
  }
  
  return (
    <Box pt={10} pl={4} pr={4} id={'projects'}>
      <Typography variant="h3" gutterBottom fontSize={52} fontWeight={500}>
        Projects
      </Typography>
      <Grid container>
        {data.map(renderCard)}
      </Grid>
    </Box>
    
  );

}

export default Projects;