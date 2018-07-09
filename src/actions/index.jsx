import {ADD_CARD} from "../constants/ActionTypes";

export const addNameCard = card => ({
   type: ADD_CARD,
   payload: card
});