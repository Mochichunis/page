import { createStore } from "redux";

const initialState = {
    productos: [],
};

const reducerShop = (state = initialState, action) => {
    if (action.type === "") {
        
        return {
            ...state
        };
    }

    return state;
};

export default createStore(reducerShop);