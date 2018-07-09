import {ADD_CARD} from "../constants/ActionTypes";

export const addCardReducer = (state = {nameCards: []}, action) => {

    switch (action.type) {
        case ADD_CARD: return {nameCards: [...state.nameCards, action.payload]};
        default: return state;
    }

};