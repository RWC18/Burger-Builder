import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from 'axios';

class Orders extends Component {
    state= {
        orders: [],
        loading: true
    };

    componentDidMount() {
        axios.get('https://burger-order-a2bb4.firebaseio.com/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                this.setState({loading: false, orders: fetchedOrders})
            })
            .catch(err => {
                this.setState({loading: false});
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order key={order.id}
                           ingredients={order.ingredients}
                           price={+order.price}
                    />
                ))}
            </div>
        );
    }
}

export default Orders;