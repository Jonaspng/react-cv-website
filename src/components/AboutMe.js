import Grid from '@mui/material/Grid';
import { Typography, Link, Box } from '@mui/material';

function AboutMe() {

  return (
    <Box id={"aboutme"} height={"100%"}>
      <Grid container>
        <Grid item xs={12} sm={6} padding={9}>
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
        </Grid>
      </Grid>
    </Box>
    
  );
}

export default AboutMe;