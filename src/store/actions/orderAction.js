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

export const purchaseBurgerStart = (orderInfo) => {
    return dispatch => {
        axios.post('/orders.json', orderInfo)
            .then(response => {
                console.log(response.data)
                dispatch(purchaseBurgerSuccess(response.data, orderInfo))
            })
            .catch(error => {
                dispatch(purchaseBurgerFailed(error))
            });
    };

}