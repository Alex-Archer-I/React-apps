import React from 'react';

import MenuItem from '../menu-item/menu-item';

import './menu.css';

const Menu = ({onDisplay}) => {
    
    const menuArr = [
        {name: 'Бургеры', id: 'burger', img: 0},
        {name: 'Пицца', id: 'pizza', img: 1},
        {name: 'Салаты', id: 'salad', img: 2},
        {name: 'Напитки', id: 'drink', img: 3},
        {name: 'Закуски', id: 'snack', img: 4},
        {name: 'Мороженное', id: 'ice_cream', img: 5},
        {name: 'Роллы', id: 'roll', img: 6}
    ];
    let i = 0;

    const elements = menuArr.map(name => {
        i++;
        return (
            <li key={i}>
                <MenuItem text={name.name} onDisplay={() => onDisplay(name.id)} id={i} img={name.img}/>
            </li>
        )
    })

    return(
        <ul className="menu">
            {elements}
        </ul>
    )
}

export default Menu;