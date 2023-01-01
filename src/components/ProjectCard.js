import { Button, Card, CardActions, CardContent, Grid, Link, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import CircleIcon from '@mui/icons-material/Circle';
import { Box } from "@mui/system";


function ProjectCard(props) {

  function renderList(description) {
    return (
      <Box display={'flex'}>
        <CircleIcon sx={{height: 7, width: 7, mt:0.5, mr: 1}}/>
        <Typography variant="body2">
          {description}
        </Typography>
      </Box>
      
    );
  }

  return (
    <Grid item xs={12} sm={4} padding={6}>
      <Card variant='outlined' sx={{ maxWidth: 345, borderRadius:3 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Description
          </Typography>
          {props.descriptions.map(renderList)}
          <Typography gutterBottom variant="body1" component="div" sx={{mt: 1}}>
            Technologies
          </Typography>
          <Typography variant="body2">
            {props.technologies}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={props.githubLink} sx={{color: "black"}} margin={1}><GitHubIcon fontSize='large'/></Link>
          <Link href={props.websiteLink} sx={{color: "black"}} margin={1}><OpenInBrowserIcon fontSize='large'/></Link>
        </CardActions>
      </Card>
    </Grid>
    
  );
}

export default ProjectCard;