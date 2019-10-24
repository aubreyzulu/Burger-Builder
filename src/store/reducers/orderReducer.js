import * as actionTypes from '../actions/actionTypes';
import { updateObjectState } from '../utility';
const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const purchaseInit = (state, action) => {
    return updateObjectState(state, { purchased: false })
};
const purchaseBurgerStart = (state, action) => {
    return updateObjectState(state, { loading: true })
}
const purchaseBurgerSuccess = (state, action) => {
    const orderInfo = {
        ...action.orderInfo,
        id: action.orderId
    }
    return updateObjectState(state, {
        loading: false,
        purchased: true,
        order: state.order.concat(orderInfo)
    })
}
const purchaseBurgerFailed = (state, action) => {
    return updateObjectState(state, { loading: false })
}

const fetchOrdersStart = (state, action) => {
    return updateObjectState(state, { loading: true })
}
const fetchOrdersSuccess = (state, action) => {
    return updateObjectState(state, {
        orders: action.orders,
        loading: false
    })
}
const fetchOrdersFailed = (state, action) => {
    return updateObjectState(state, { loading: false })
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return purchaseInit(state, action);
        case actionTypes.PURCHASE_BURGER_START:
            return purchaseBurgerStart(state, action);
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return purchaseBurgerSuccess(state, action);
        case actionTypes.PURCHASE_BURGER_FAILED:
            return purchaseBurgerFailed(state, action);
        case actionTypes.FETCH_ORDERS_START:
            return fetchOrdersStart(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return fetchOrdersSuccess(state, action);
        case actionTypes.FETCH_ORDERS_FAILED:
            return fetchOrdersFailed(state, action);
        default:
            return state;
    };
};

export default reducer;
