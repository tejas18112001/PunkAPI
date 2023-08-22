import react from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom' ;
import {Box} from '@mui/material' ;


import { BeerName, Navbar , Feed} from './components'

import './App.css';





function App() {
  return (

   
    <div>
      <BrowserRouter>

        <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        {/* <BeerName /> */}
        <Feed/>
          
        </Box>
      </BrowserRouter>



      
    </div>

  );
}

export default App;
