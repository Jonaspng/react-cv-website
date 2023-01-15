import { Box, Typography } from "@mui/material"

function RecentActivity() {

  return (
    <Box pt={10} pl={4} pr={4} id={"recentactivity"}>
      <Typography variant="h3" gutterBottom fontSize={52} fontWeight={500}>
        Recent Activity
      </Typography>
    </Box>
  );

}

export default RecentActivity;