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

const addIngredients = (state, action) => {
    const updateIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
    const updatedIngredients = updateObjectState(state.ingredients, updateIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    }
    return updateObjectState(state, updatedState);
};
const removeIngredients = (state, action) => {
    const updateIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
    const updatedIngredients = updateObjectState(state.ingredients, updateIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    }
    return updateObjectState(state, updatedState);
};
const setIngredients = (state, action) => {
    return updateObjectState(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 4,
        error: false
    });
};
const fetIngredientFailed = (state, action) => {
    return updateObjectState(state, { error: true })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return addIngredients(state, action);

        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredients(state, action)

        case actionTypes.SET_INGREDIENTS:
            return setIngredients(state, action);

        case actionTypes.FETCHING_INGREDIENT_FAILED:
            return fetIngredientFailed(state, action);

        default:
            return state;
    }
};


export default reducer;