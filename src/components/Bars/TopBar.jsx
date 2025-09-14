import {  useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const sections = [{title: 'About Me', id: 'aboutme'},{title: 'Recent Activity', id:'recentactivity'}, 
{title: 'Experience', id: 'experience'}, {title: 'Projects', id:'projects'}, {title:'History', id:'history'}];

function Topbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (id) => {
    setAnchorElNav(null);
    setTimeout(() => {document.getElementById(id).scrollIntoView({behavior: "smooth"});}, 100);
  }

  return (
    <AppBar position="fixed" sx={{backgroundColor: '#212121'}}>
      <Container maxWidth="100%" >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Jonas
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {sections.map((section) => (
                <MenuItem key={section.title} onClick={() => handleCloseNavMenu(section.id)}>
                  <Typography textAlign="center">{section.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Jonas
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex'}, marginLeft:'auto'}}>
            {sections.map((section) => (
              <Button
                key={section.title}
                onClick={() => handleCloseNavMenu(section.id)}
                sx={{ my: 2, color: 'white', display: 'block'}}
              >
                {section.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar> 
  );
}
export default Topbar;