import React from 'react';
import styles from "./coin.module.css"

const Coin = ({image, name, price, symbol, marketCap, priceChange}) => {

    return (
        <div className={styles.container}>
            <img src={image} alt="coin" />
            <span>{name}</span>
            <span>{symbol.toUpperCase()}</span>
            <span>{price.toLocaleString()}</span>
            <span>{priceChange}</span>
            <span>{marketCap.toLocaleString()}</span>
        </div>
    )
};

export default Coin;
