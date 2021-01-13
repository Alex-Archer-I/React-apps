import './approved-order.css';

const ApprovedOrder = ({order, total, approveOrder}) => {

    const elements = order.map(order => {
        return (
        <div className='order-list-item'>
            <div className='order-list-item-name'>{order.name}</div>
            <div className='order-list-item-amount'>{order.amount}</div>
            <div className='order-list-item-price'>{order.price}</div>
        </div>
        )
    });

    return (
        <div className='approved-order'>
            <div className='approved-order-title'>Ваш заказ:</div>
            <div className='approved-order-list'>{elements}</div>
            <div className='approved-order-total'>Общая сумма: {total}</div>
            <div className='approved-order-footer'>Спасибо за покупку!</div>
            <button onClick={() => {approveOrder()}}>Спасибо!</button>
        </div>
    )
}

export default ApprovedOrder;