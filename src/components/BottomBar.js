import { Typography } from '@mui/material';
import { Box } from '@mui/system';

function BottomBar() {
  return (
    <Box sx={{backgroundColor: 'black'}} padding={5}>
      <Typography sx={{color:'white'}}>
      © Png Yi Wei Jonas. All rights reserved.
      </Typography>
    </Box>
  );
}

export default BottomBar;