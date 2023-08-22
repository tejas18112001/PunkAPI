import React from 'react' ;
import { useState } from 'react';
import { fetchFromApi } from './fetchFromApi';

function BeerName() {

    const [beerList, useBeerList] = useState(['Libertine Porter']);
    const getBeers = (e) => {
        const data = fetchFromApi();
        data.then((res) => useBeerList(res.data))
            .catch((err) => console.log(err));

    }



    return (
        <div >
            <h1>Beer Punks</h1>
            <button onClick={getBeers}>Get All Beers</button>
            {
                beerList.length >= 1 ? beerList.map((beer, idx) => {
                    return <p key={idx}>{beer.name}</p>
                }) : []
            }
        </div>
    )
}

export default BeerName

  