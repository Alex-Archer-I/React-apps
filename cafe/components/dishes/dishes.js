import React from 'react';

import DishesItem from '../dishes-item/dishes-item';

import './dishes.css'

const Dishes = (props) => {

    const elements = props.content.map(content => {
        return (
            <DishesItem 
                name={content.name} 
                price={content.price} 
                id={content.id} 
                key={content.id}
                img={content.img}
                addOrder={props.addOrder}/>
        )
    })

    return (
        <div className='dishes'>{elements}</div>
    )
}

export default Dishes;