import React from 'react';

import gifLoader from "../gif/loading.gif"

const Loader = () => {

    return (
        <div>
            <img src={gifLoader} alt='loader' style={{width: "85px"}}/>
            <h1>Loading...</h1>
        </div>
    )
};

export default Loader
