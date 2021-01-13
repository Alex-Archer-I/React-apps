import React from 'react';

import './menu-item.css';

import burger from '../../icons/menu-icons/burger.png';
import drink from '../../icons/menu-icons/drink.png';
import ice_cream from '../../icons/menu-icons/ice_cream.png';
import pizza from '../../icons/menu-icons/pizza.png';
import roll from '../../icons/menu-icons/roll.png';
import salad from '../../icons/menu-icons/salad.png';
import snack from '../../icons/menu-icons/snack.png';

const arrImg = [burger, pizza, salad, drink, snack, ice_cream, roll];

export default class MenuItem extends React.Component {
    render() {
        const {text, img, onDisplay} = this.props;

        return (
            <button className='menu-item' onClick={onDisplay}>
                <div>{text}</div>
                <img src={arrImg[img]} alt=''></img>
            </button>
        )
    }

}