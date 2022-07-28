import React from 'react';
import './Item.scss'

const Item = ({text}) => {
    return (
        <div className={'item'}>
            <p>{text}</p>
        </div>
    );
};

export default Item;