import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectData";


function Projects() {

  const data = ProjectData;

  function renderCard(data) {
    return (
      <ProjectCard
        title={data.title}
        descriptions={data.descriptions}
        technologies={data.technologies}
        githubLink={data.githubLink}
        websiteLink={data.websiteLink}
      />
    );
  }
  
  return (
    <Grid container>
      {data.map(renderCard)}
    </Grid>
  );

}

export default Projects;