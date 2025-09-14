import Grid from '@mui/material/Grid';
import { Typography, Link, Box, CardMedia } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function AboutMe() {

  return (
    <Box pt={10} id={"aboutme"} height={"100%"}>
      <Grid container height={"100%"}>
        <Grid size={{xs: 12, sm: 6}} padding={14} sx={{ display: { xs: 'none', sm: 'block' }, height:{md: 'auto'}}}>
        <CardMedia
          component="img"
          image="/webDevelopment.png"
        />
        </Grid>
        <Grid size={{xs: 12, sm: 6}} padding={4} display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <Box>
            <Typography variant="h1" gutterBottom fontSize={52} fontWeight={500} margin={0}>
              Hello!
            </Typography>
            <Typography variant="h1" gutterBottom fontSize={52} fontWeight={500} margin={0}>
              I am Jonas Png.
            </Typography>
            <Typography variant="h3" gutterBottom fontSize={22} fontWeight={700} margin={0}>
              Bachelor of Computing (Computer Science), <Link href='https://www.nus.edu.sg/' underline='none' color='white'>NUS</Link>
            </Typography>
            <Typography variant="h6" gutterBottom fontSize={22} fontWeight={400} margin={0} sx={{ pt: 2, pb: 2}}>
              I have strong interest in Web Development, Artificial Intelligence and Cyber Security.
            </Typography>
            <Link href="https://github.com/Jonaspng"><GitHubIcon fontSize='large' sx={{color:'white', mr: 2}} /></Link>
            <Link href="https://www.linkedin.com/in/png-yi-wei-jonas-836a4a206"><LinkedInIcon fontSize='large' sx={{color:'white'}}/></Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
    
  );
}

export default AboutMe;