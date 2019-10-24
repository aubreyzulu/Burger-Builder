import * as actionTypes from '../actions/actionTypes';
import { updateObjectState } from '../utility';
const initialState = {
    orders: [],
    loading: false,
    purchased: false
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return updateObjectState(state, { purchased: false })

        case actionTypes.PURCHASE_BURGER_START:
            return updateObjectState(state, { loading: true })

        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const orderInfo = {
                ...action.orderInfo,
                id: action.orderId
            }
            return updateObjectState(state, {
                loading: false,
                purchased: true,
                order: state.order.concat(orderInfo)
            })

        case actionTypes.PURCHASE_BURGER_FAILED:
            return updateObjectState(state, { loading: false })

        case actionTypes.FETCH_ORDERS_START:
            return updateObjectState(state, { loading: true })

        case actionTypes.FETCH_ORDERS_SUCCESS:
            return updateObjectState(state, {
                orders: action.orders,
                loading: false
            })

        case actionTypes.FETCH_ORDERS_FAILED:
            return updateObjectState(state, { loading: false })

        default:
            return state;
    };
};

export default reducer;