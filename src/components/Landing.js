import React, { useEffect, useState } from 'react';
import { getCoin } from '../services/api';

import Loader from './Loader';
import Coin from './Coin';

const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
      
        const fetchApi = async () => {

            const data = await getCoin();

            setCoins(data);
        };
        fetchApi();
    }, []);

    const searchHandler = (event) => {

        setSearch(event.target.value)
    };
    const searchCoin = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <input type="text" placeholder='Search' value={search} onChange={searchHandler}/>
            {
                coins.length ? 
                <div>
                    {
                        searchCoin.map(coin => <Coin
                                
                            key={coin.id}
                            name={coin.name}
                            image={coin.image}
                            symbol={coin.symbol}
                            price={coin.current_price}
                            marketCap={coin.market_cap}
                            pricChange={coin.price_change_percentage_24h}

                        >{coin.name}</Coin>)
                    }
                </div> :
                <Loader />   
            }

        </>
    )
};

export default Landing;
