import React from 'react';

import Menu from '../menu/menu';
import Dishes from '../dishes/dishes';
import OrderList from '../order-list/order-list';
import ApprovedOrder from '../approved-order/approved-order';

import {getMenuByName, getMenuById} from '../data/data';

import './app.css';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: getMenuByName('burger'),
            order: [],
            totalPrice: 0,
            approve: false
        };
        this.getMenu = this.getMenu.bind(this);
        this.addOrder = this.addOrder.bind(this);
        this.removeOrder = this.removeOrder.bind(this);
        this.approveOrder = this.approveOrder.bind(this);
    }

    getMenu(name) {
        const arr = getMenuByName(name);

        this.setState(() => {
            return {
                data: arr
            }
        })
    }

    addOrder(id) {
        let newItem = {};
        let isHaveItem = false;
        let index = 0;

        this.state.order.forEach((name, n) => {
            if (name.id === id) {
                for (let key in name) {
                    newItem[key] = name[key];
                }
                isHaveItem = true;
                index = n;
            }
        });

        if (isHaveItem) {
            newItem.amount++;

            this.setState(({order}) => {
                const newOrder = [...order.slice(0, index), newItem, ...order.slice(index + 1)];

                const newTotal = newItem.price + this.state.totalPrice;

                return {
                    order: newOrder,
                    totalPrice: newTotal
                }
            });
        } else {
            newItem = getMenuById(id);
            const i = {...newItem, amount: 1};
    
            this.setState(({order}) => {
                const oldOrder = order.slice();
                const newOrder = [...oldOrder, i];

                const newTotal = newItem.price + this.state.totalPrice;
    
                return {
                    order: newOrder,
                    totalPrice: newTotal
                }
            })
        }
    }

    removeOrder(id) {
        let newItem = {};
        let index = 0;

        this.state.order.forEach((name, n) => {
            if (name.id === id) {
                for (let key in name) {
                    newItem[key] = name[key];
                }
                index = n;
            }
        });

        if (newItem.amount === 1) {
            this.setState(({order}) => {
                const newOrder = [...order.slice(0, index), ...order.slice(index + 1)];

                const newTotal = this.state.totalPrice - newItem.price;

                return {
                    order: newOrder,
                    totalPrice: newTotal
                }
            });
        } else {
            newItem.amount--;

            this.setState(({order}) => {
                const newOrder = [...order.slice(0, index), newItem, ...order.slice(index + 1)];
                const newTotal = this.state.totalPrice - newItem.price;

                return {
                    order: newOrder,
                    totalPrice: newTotal
                }
            });
        }
    }

    approveOrder() {
        if (this.state.order.length === 0) {
            return;
        }

        this.setState(() => {
            if (this.state.approve) {
                return {
                    order: [],
                    totalPrice: 0,
                    approve: false
                }
            } else {
                return {
                    approve: true
                }
            }
        })
    }

    render() {

        let content;

        if (this.state.approve) {
            content = <ApprovedOrder 
                        order={this.state.order} 
                        total={this.state.totalPrice}
                        approveOrder={this.approveOrder}/>;
        } else {
            content = <>
                <Menu onDisplay={this.getMenu}/>
                <Dishes content={this.state.data} addOrder={this.addOrder}/>
                <OrderList 
                    order={this.state.order} 
                    addOrder={this.addOrder}
                    removeOrder={this.removeOrder}
                    approveOrder={this.approveOrder} 
                    totalPrice={this.state.totalPrice}/>
            </>;
        }

        return (
            <div className='app'>
                <h1>Welcome!</h1>
                {content}
                <div className='link'>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></div>
            </div>
        )
    }
}
