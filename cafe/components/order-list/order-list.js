import React from 'react';

import OrderListItem from '../order-list-item/order-list-item';

import './order-list.css';

const OrderList = ({order, totalPrice, addOrder, removeOrder, approveOrder}) => {

    let content;
    if (order.length === 0) {
        content = <div className='empty-list-text'>Ваш заказ пуст =(</div>;
    } else {
        content = order.map(elem => {
            return (
                <OrderListItem
                    name={elem.name}
                    amount={elem.amount}
                    price={elem.price * elem.amount}
                    key={elem.id}
                    id={elem.id}
                    addOrder={addOrder}
                    removeOrder={removeOrder}/>
            )
        })
    }

    return (
        <div className='order-list'>
            {content}
            <div className='underline'>
                <button onClick={() => {approveOrder()}}>Оформить заказ</button>
                <div className='total'>Итого:  {totalPrice}</div>
            </div>
        </div>
    )
}

export default OrderList;