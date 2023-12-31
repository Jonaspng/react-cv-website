import { Card, CardActions, CardContent, Grid, Link, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import CircleIcon from '@mui/icons-material/Circle';
import { Box } from "@mui/system";


function Cards(props) {

  function renderList(description) {
    return (
      <Box display={'flex'} key={description}>
        <CircleIcon sx={{height: 7, width: 7, mt:0.8, mr: 1}}/>
        <Typography variant="body2">
          {description}
        </Typography>
      </Box>
      
    );
  }

  return (
    <Grid item xs={12} md={6} lg={4} align='center' paddingY={2} paddingX={1}>
      <Card variant='outlined' sx={{ width:"95%", borderRadius:3 }} align='left'>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            {props.location}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            {props.date}
          </Typography>
          {props.descriptions.map(renderList)}
          <Typography gutterBottom variant="body1" component="div" sx={{mt: 1}}>
            Technologies
          </Typography>
          <Typography variant="body2">
            {props.technologies}
          </Typography>
        </CardContent>
        {props.hasActions === "true" &&
        <CardActions>
          <Link href={props.githubLink} sx={{color: "black"}} margin={1}><GitHubIcon fontSize='large'/></Link>
          <Link href={props.websiteLink} sx={{color: "black"}} margin={1}><OpenInBrowserIcon fontSize='large'/></Link>
        </CardActions>}
      </Card>
    </Grid>
    
  );
}

export default Cards;