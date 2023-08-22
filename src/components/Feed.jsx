import React from 'react' ;
import {Box , Stack , Typography} from '@mui/material' ;
import { fetchFromApi } from './fetchFromApi';

const Feed = () => {
  return (
    <Stack>
        <Box>
             <Typography>
               <span style={{color : 'red'}}>Images</span>
             </Typography>
        </Box>
    </Stack>
  )
}

export default Feed
