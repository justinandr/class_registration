import { AppBar, Box, Toolbar, Typography, IconButton, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

function NavBar(){
    return (
      <Box sx={{ display: 'flex', backgroundColor: 'black' }}>
      <AppBar position='sticky' component="nav" color='primary' >
          <Toolbar>
          <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: 'none' } }}
          >
              <MenuIcon />
          </IconButton>
          <Typography
              variant="h6"
              component="div"
              textAlign={'left'}
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
              Course Registration
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button component={Link} to='/' sx={{ color: '#fff' }}>
                      Home
              </Button>
              <Button component={Link} to='/students' sx={{ color: '#fff' }}>
                      Students
              </Button>
              <Button component={Link} to='/courses' sx={{ color: '#fff' }}>
                      Courses
              </Button>
              <Button component={Link} to='/registrations' sx={{ color: '#fff' }}>
                      Registrations
              </Button>
          </Box>
          </Toolbar>
      </AppBar>
  </Box>
    )
}

export default NavBar