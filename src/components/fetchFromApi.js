import axios from 'axios';
export const BASE_URL = 'https://api.punkapi.com/v2/beers';


const options = {
    params: {
      maxResults: 10,
    }
   
  };

export const fetchFromApi = () => {
                    const data =  axios.get('https://api.punkapi.com/v2/beers' , options) 
                          
                           
    
    return data;
  };