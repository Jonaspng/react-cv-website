import Grid from '@mui/material/Grid';
import { Typography, Link, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function AboutMe() {

  return (
    <Box id={"aboutme"} height={"102%"}>
      <Grid container>
        <Grid item xs={12} sm={6} padding={9} sx={{ display: { xs: 'none', sm: 'block' }}}>
          <h1> Picture </h1>
        </Grid>
        <Grid item xs={12} sm={6} padding={9}>
          <Typography variant="h1" gutterBottom fontSize={52} fontWeight={500} margin={0}>
            Hello!
          </Typography>
          <Typography variant="h1" gutterBottom fontSize={52} fontWeight={500} margin={0}>
            I am Jonas.
          </Typography>
          <Typography variant="h3" gutterBottom fontSize={22} fontWeight={700} margin={0}>
            Year 2 Computer Science Undergraduate @ <Link href='https://www.nus.edu.sg/' underline='none' color='black'>NUS</Link>
          </Typography>
          <Typography variant="h6" gutterBottom fontSize={22} fontWeight={400} margin={0} sx={{ pt: 2, pb: 2}}>
            I have strong interest in Web Development, Database and DevOps.
          </Typography>
          <Link href="https://github.com/Jonaspng"><GitHubIcon fontSize='large' sx={{color:'black', mr: 2}} /></Link>
          <Link href="https://www.linkedin.com/in/png-yi-wei-jonas-836a4a206"><LinkedInIcon fontSize='large' sx={{color:'black'}}/></Link>
        </Grid>
      </Grid>
    </Box>
    
  );
}

export default AboutMe;