import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderInfo) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderInfo: orderInfo
    };
};

export const purchaseBurgerFailed = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAILED,
        error: error
    };
};
const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderInfo) => {
    return dispatch => {
        dispatch(purchaseBurgerStart())
        axios.post('/orders.json', orderInfo)
            .then(response => {
                console.log(response.data)
                dispatch(purchaseBurgerSuccess(response.data.name, orderInfo))
            })
            .catch(error => {
                dispatch(purchaseBurgerFailed(error))
            });
    };

};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}