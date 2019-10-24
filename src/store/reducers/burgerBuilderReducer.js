import * as actionTypes from '../actions/actionTypes';
import { updateObjectState } from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            const updateIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
            const updatedIngredients = updateObjectState(state.ingredients, updateIngredient);
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
            return updateObjectState(state, updatedState);

        case actionTypes.REMOVE_INGREDIENT:
            const updateIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
            const updatedIngs = updateObjectState(state.ingredients, updateIng);
            const updatedSt = {
                ingredients: updatedIngs,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
            return updateObjectState(state, updatedSt);

        case actionTypes.SET_INGREDIENTS:
            return updateObjectState(state, {
                ingredients: action.ingredients,
                totalPrice: 4,
                error: false
            });

        case actionTypes.FETCHING_INGREDIENT_FAILED:
            return updateObjectState(state, { error: true })

        default:
            return state;
    }
};


export default reducer;