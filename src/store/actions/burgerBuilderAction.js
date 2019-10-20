import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (ingredientName) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: ingredientName
    };
};
const setIngredient = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
};
const fetchingIngredientFailed = () => {
    return {
        type: actionTypes.FETCHING_INGREDIENT_FAILED,
    }
}

export const removeIngredient = (ingredientName) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingredientName
    };
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://react-burger-b04af.firebaseio.com/ingredients.json')
            .then(response => {
                dispatch(setIngredient(response.data))
            })
            .catch(error => {
                dispatch(fetchingIngredientFailed())
            });
    }
}