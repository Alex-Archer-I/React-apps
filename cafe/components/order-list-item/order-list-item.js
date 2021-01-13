import React from 'react';

import './order-list-item.css';
import './fonts.css';

export default class OrderListItem extends React.Component {

    render() {
        const {name, amount, price, id, addOrder, removeOrder} = this.props;
        return (
            <div className='order-list-item'>
                <div className='order-list-item-name'>{name}</div>
                <div className='order-list-item-amount'>
                    <span onClick={() => removeOrder(id)} className="icon-minus"></span>
                    {amount}
                    <span onClick={() => addOrder(id)} className="icon-plus"></span>
                </div>
                <div className='order-list-item-price'>{price}</div>
            </div>
        )
    }
}