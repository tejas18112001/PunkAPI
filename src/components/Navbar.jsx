// import React from 'react'
// import {Stack} from '@mui/material' 
// import {Link} from 'react-router-dom' 
// import {logo} from "../utils/constants"
// import SearchBar from './SearchBar'
// const Navbar = () => {
//   return (
//      <Stack
       
//      >
//       <Link to ="/" style={{display:'flex' , alignItems : 'center'}}>
//         <img src ={logo} alt ="logo" height = {40} />
//       </Link>
//       <SearchBar/>
//      </Stack>
//   )
// }

// export default Navbar


import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';
import SearchBar from './SearchBar'



export default function SearchAppBar() {
  return (

  
    <Box sx={{ flexGrow: 1 , position : "sticky" , background :"#1A1110" , top : 0 , justifyContent:'space-between'}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          

          <SearchBar/>
          
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}
