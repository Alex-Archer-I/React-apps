import React from 'react';

import './dishes-item.css';

const DishesItem = ({name, price, id, img, addOrder}) => {
    return (
        <div 
            onClick={() => {
                addOrder(id);
            }} 
            className='dishes-item'>
            <img src={img} alt={id}></img>
            <div className='dishes-item-text'>
                <div className='dishes-item-name'>{name}</div>
                <div className='dishes-item-price'>{price} р.</div>
            </div>
        </div>
    )
}

export default DishesItem;