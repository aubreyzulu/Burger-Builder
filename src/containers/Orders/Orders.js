import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as orderAction from '../../store/actions/index'

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        this.props.onFetchOrder()
    }



    render() {
        let orders = <Spinner />

        if (this.props.loading) {
            orders = (<div>
                {this.props.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />
                ))}
                {console.log('showing orders', this.props.orders)}
            </div>)
        }
        return orders;
    }
}
const mapStateToProps = state => {
    return {
        orders: state.orderReducer.orders,
        loading: state.orderReducer.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrder: () => dispatch(orderAction.fetchOrders())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));